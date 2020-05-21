import React, { memo } from 'react'
import { List, Typography, Rate } from 'antd'
import { Link } from 'react-router-dom'
import { LikeOutlined, CommentOutlined } from '@ant-design/icons'
import './index.styl'
import IconText from './../../utils/IconText'
const { Title, Text, Paragraph } = Typography

const Review = memo((props) => {
	const { rid, uid, userName, rating, time, content, like, comment } = props
	return (
		<div className="comment-item">
			<div className="user-info">
				<Text strong className="margin-right-10">
					<Link to={`/user/${uid}`}>{userName}</Link>
				</Text>
				{rating ? (
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
						defaultValue={rating / 2}
					/>
				) : null}

				<Text className="margin-right-10">{time}</Text>
			</div>
			<Paragraph ellipsis={{ rows: 2, expandable: true }} type="secondary">
				{content}
			</Paragraph>
			<div className="review-action">
				<IconText icon={LikeOutlined} text={`${like} 赞成`} />
				<Link to={`/review/${rid}`} style={{ color: 'rgba(0, 0, 0, 0.65)' }}>
					<IconText icon={CommentOutlined} text={`${comment} 评论`} />
				</Link>
			</div>
		</div>
	)
})

export default Review
