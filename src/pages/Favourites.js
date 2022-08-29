import React from 'react';
import { Link } from "react-router-dom";
import { UilArrowLeft } from '@iconscout/react-unicons'
import { useDispatch, useSelector } from "react-redux";
import VideoCard1 from '../Components/VideoCard1'

export default function Favourites() {
  const favouriteVideosList = useSelector((state) => state.favouriteVideosList);
  console.log("favouriteVideosList", favouriteVideosList)

  return (
    <div className='container border'>
      <h4>Total Videos In Favourites List {favouriteVideosList.length}</h4>
      {
        favouriteVideosList.length > 0 ? favouriteVideosList.map((video, index) => {
          return <VideoCard1 key={index} videoData={video} isDeleteActionEnabled = {true} />
        }) : <Link to='/search' className="fs-4 fw-normal text-decoration-none"> <UilArrowLeft/> add video to favorites list</Link>
      }
      
    </div>
  )
}
