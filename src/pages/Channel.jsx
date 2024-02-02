import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import ChannelSummary from '../Components/ChannelSummary'
import VideoCard1 from '../Components/VideoCard1'
import VideoCard2 from '../Components/videoCards/VideoCard2'
import { useLocation } from 'react-router-dom';
import { GET_CHANNEL_VIDEOS } from '../redux/constants/constants';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import HomeSkeletonCard from '../Components/skeletons/HomeSkeletonCard';

export default function Channel() {
  const { state: { channelData } } = useLocation();

  const dispatch = useDispatch();
  const { videos, loading, error } = useSelector(state => state.channelVideos);

  const playlistId = channelData.contentDetails?.relatedPlaylists?.uploads
  // get the channel videos by channel's uploads
  useEffect(() => {
    if (playlistId) {
      dispatch({ type: GET_CHANNEL_VIDEOS, payload: playlistId })
    }
  }, [playlistId])


  return (
    <>
      <div className='home-container'>
        <div style={{ height: '7.5vh' }}>
          <Navbar />
        </div>
        <div style={{ height: '92.5vh' }}>
          <Sidebar />
        </div>
        <div className=' home-video-container position-absolute'>
          <div className=''>
            {
              channelData ? <ChannelSummary channelData={channelData} /> : <h4 className='fs-4 text-danger'>Search Channel Name</h4>
            }
            <h4 className='fs-4 fw-normal text-uppercase mt-5 mb-3'>All videos</h4>
            <div className='row d-flex flex-wrap'>
              {
                !loading ? videos.map((video) => {
                  return <React.Fragment key={video.id}>
                    <VideoCard2 videoData={video} />
                  </React.Fragment>
                }) : null
              }
              {
                true ? [...Array(20).fill(0)].map((_, index) => {
                  return <React.Fragment key={index}>
                    <HomeSkeletonCard />
                  </React.Fragment> 
                }) : null
              }
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
