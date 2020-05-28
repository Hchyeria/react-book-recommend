import React, { createElement, useState, memo } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled, DeleteOutlined } from '@ant-design/icons';
import defaultUrl from '../../asserts/default.jpg'
import deleteReview from '../../apis/reviews/delete.js'

const BookComment = memo(({
  bookName,
  coverUrl,
  content,
  reviewId,
}) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const handleDelete = () => {
    const deleteFoo = async () => {
      const data = {
        reviewId: reviewId
      }
      await deleteReview(data)
    }
    deleteFoo()
  }


  const actions = [
    <span key="comment-basic-like">
      <Tooltip title="Like">
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined, {
          onClick: like,
        })}
      </Tooltip>
      <span className="comment-action">{likes}</span>
    </span>,
    <span key=' key="comment-basic-dislike"'>
      <Tooltip title="Dislike">
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined, {
          onClick: dislike,
        })}
      </Tooltip>
      <span className="comment-action">{dislikes}</span>
    </span>,
    <><DeleteOutlined onClick={handleDelete} />删除</>,
  ];

  return (
    <Comment
      actions={actions}
      author={bookName}
      avatar={
        <Avatar
          //   src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          //   alt="Han Solo"
          src={coverUrl ? coverUrl : defaultUrl}
          alt={bookName}
        />
      }
      content={
        <p>
          {/* We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully
          and efficiently. */}
          {content}
        </p>
      }
    />
  );
})

export default BookComment