import React, { useEffect } from 'react'
import AddComment from './AddComment'
import SingleComment from './SingleComment'
import { useDispatch, useSelector } from 'react-redux';
import numeral from 'numeral';
import { GET_COMMENTS_OF_SELECTED_VIDEO } from '../../redux/constants/constants';
import CommentSkeleton from '../skeletons/CommentSkeleton';

export default function Comments(props) {
  const { videoData, videoId } = props;
  const { snippet, statistics } = videoData;

  const { comments, newAddedCommentVideoId, loading, error} = useSelector(state => state.comments);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({ type: GET_COMMENTS_OF_SELECTED_VIDEO, payload: videoId })
  }, [videoId, newAddedCommentVideoId])

  return (
    <div className='d-flex flex-column my-4 p-2'>
      <div>{numeral(statistics?.commentCount).format('0.a').toUpperCase()} Comments</div>
      {/* Loading and error has to manges here */}
      <AddComment videoId={videoId}/>
      {
        false ?
        comments.map((comment, index) => {
          return <React.Fragment key={index}>
            <SingleComment comment={comment}/>
          </React.Fragment>
        }) : [...Array(20)].map((_, index) => {
          return <React.Fragment key={index}>
            <CommentSkeleton view="lg" />
          </React.Fragment>
        })
      }
    </div>
  )
}
