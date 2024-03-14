import React from 'react';
import { Link } from "react-router-dom";
import { UilArrowLeft } from '@iconscout/react-unicons'
import { useDispatch, useSelector } from "react-redux";
import VideoCard1 from '../Components/VideoCard1'
import VideoCardHorizontal from '../Components/videoCards/VideoCardHorizontal';

export default function Favourites() {
  const favoriteVideosList = useSelector((state) => state.favoriteVideosList);

  console.log("favouriteVideosList", favoriteVideosList)

  return (
    <div className='container'>
      <h4 className='fs-4 fw-normal py-5'>Total Videos In Favourites List {favoriteVideosList.length}</h4>
      {
        favoriteVideosList?.length > 0 ? favoriteVideosList.map((videoDetails, index) => {

       console.log('dafaaa', videoDetails);
          const {
            statistics, videoData
          } = videoDetails;
          return <React.Fragment> 
            <VideoCardHorizontal videoData={videoDetails} viewFor="watch-later" />
            {/* <VideoCard1 key={index} videoData={videoData} isDeleteActionEnabled={true} /> */}
          </React.Fragment>
        }) : <Link to='/' className="fs-4 fw-normal text-decoration-none"> <UilArrowLeft/> add video to favorites list</Link>
      }
      
    </div>
  )
}
