import React, { useEffect } from 'react'
import AddComment from './AddComment'
import SingleComment from './SingleComment'
import { useDispatch, useSelector } from 'react-redux';

export default function Comments(props) {
  const { videoData, videoId } = props;
  const { snippet, statistics } = videoData;

  const {comments, loading, error} = useSelector(state => state.comments);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({ type: 'GET_COMMENTS_OF_SELECTED_VIDEO', payload: videoId })
  }, [videoId])

  return (
    <div className='d-flex flex-column my-4 p-2'>
      <div>{statistics?.commentCount} Comments</div>
      {/* Loading and error has to manges here */}
      <AddComment />
      {
        comments.length > 0 ?
        comments.map((comment, index) => {
          return <React.Fragment key={index}>
            <SingleComment comment={comment}/>
          </React.Fragment>
        } ) : null
      }
    </div>
  )
}
