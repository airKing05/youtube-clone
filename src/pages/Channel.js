import React from 'react'
import ChannelSummary from '../Components/ChannelSummary'
import VideoCard1 from '../Components/VideoCard1'
import VideoCard2 from '../Components/VideoCard2'

export default function Channel() {
  return (
    <div className='mx-4 '>
        {/* src='https://bit.ly/3ATSdwy' */}
          <div className='img-fluid mb-3 bg-dark bg-gradient'  style={{ height: '200px'}}/>
        <ChannelSummary/>
          <h4 className='fs-4 fw-normal text-uppercase my-5'>All videos</h4>
          <div className='row'>
           {/* <VideoCard1/> */}
            <VideoCard2 />
              <VideoCard2 />
              <VideoCard2 />
              <VideoCard2 />
              <VideoCard2 />
              <VideoCard2 />
        </div>
    </div>
  )
}
