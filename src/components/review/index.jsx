import React, { memo, useState } from 'react'
import moment from 'moment'
import { List, Typography, Rate } from 'antd'
import { Link } from 'react-router-dom'
import { LikeOutlined, CommentOutlined, LikeFilled, DeleteOutlined } from '@ant-design/icons'
import './index.styl'
import IconText from './../../utils/IconText'
import AppState from '../../stores/appState'
import deleteReview from '../../apis/reviews/delete.js'

const { Title, Text, Paragraph } = Typography


const Review = memo((props) => {
	const {
		agreeNumber,
		bookId,
		bookName,
		content,
		coverUrl,
		reviewId,
		reviewTime,
		star,
		userId,
		userName,
		hasAgree,
	} = props

	const [like, setLike] = useState(agreeNumber)
	const [isLike, setIsLike] = useState(hasAgree)

	const isMe = userId === AppState.user.userId

	const handleClickWriteIcon = () => {
		let newLike
		if (isLike) {
			newLike = like - 1
		} else {
			newLike = like + 1
		}
		setLike(newLike)
		setIsLike(!isLike)
	}

	const handleDelete = () => {
		const deleteFoo = async () => {
			const data = {
				reviewId: reviewId
			}
			await deleteReview(data)
		}
		deleteFoo()
	}

	return (
		<div className="comment-item">
			<div className="user-info">
				<Text strong className="margin-right-10">
					<Link to={`/user/${userId}`}>{userName}</Link>
				</Text>
				{star ? (
					<Rate
						className="margin-right-10"
						style={{
							fontSize: '1em',
							height: '100%',
							position: 'relative',
							top: '-2px',
						}}
						disabled
						allowHalf
						defaultValue={star / 2}
					/>
				) : null}

				<Text className="margin-right-10">{moment(reviewTime).format("YYYY-MM-DD")}</Text>
			</div>
			<Paragraph ellipsis={{ rows: 2, expandable: true }} type="secondary">
				{content}
			</Paragraph>
			<div className="review-action">
				<IconText
					icon={isLike ? LikeFilled : LikeOutlined}
					text={`${like ? like : 0} 赞成`}
					onClick={handleClickWriteIcon}
				/>
				{/* <Link to={`/review/${rid}`} style={{ color: 'rgba(0, 0, 0, 0.65)' }}>
					<IconText icon={CommentOutlined} text={`${comment} 评论`} />
				</Link> */}
				{
					isMe
						? <><DeleteOutlined onClick={handleDelete} />删除</>
						: null
				}
			</div>
		</div>
	)
})

export default Review
