import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import VideoCard1 from '../Components/VideoCard1'

export default function Favourites() {
  const favouriteVideosList = useSelector((state) => state.favouriteVideosList);
  const dispatch  = useDispatch();

  const totalFavouriteVideos = favouriteVideosList.length;
  return (
    <div className='container border'>
        {/* <VideoCard1/> */}
    </div>
  )
}
