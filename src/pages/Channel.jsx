import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import ChannelSummary from '../Components/ChannelSummary'
import VideoCard1 from '../Components/VideoCard1'
import VideoCard2 from '../Components/videoCards/VideoCard2'
import { useLocation } from 'react-router-dom';
import { GET_CHANNEL_VIDEOS } from '../redux/constants/constants';

export default function Channel() {
  const { state : {channelData} } = useLocation();

  const dispatch = useDispatch();
  const {videos, loading, error} = useSelector(state => state.channelVideos);

  const playlistId = channelData.contentDetails?.relatedPlaylists?.uploads
  // get the channel videos by channel's uploads
  useEffect(() => {
    dispatch({ type: GET_CHANNEL_VIDEOS, payload: playlistId})
  }, [playlistId])


  return (
    <div className='mx-4 '>
      {/* src='https://bit.ly/3ATSdwy' */}
      <div className='img-fluid mb-3 bg-dark bg-gradient' style={{ height: '200px' }} />
      {
        channelData ? <ChannelSummary channelData={channelData} /> : <h4 className='fs-4 text-danger'>Search Channel Name</h4>
      }
      <h4 className='fs-4 fw-normal text-uppercase my-5'>All videos</h4>
      <div className='row'>

        {
          !loading ? videos.map((video) => {
            return <React.Fragment key={video.id}>
              <VideoCard2 videoData={video} />
            </React.Fragment> 
          }) : null
        }
      </div>
    </div>
  )
}
