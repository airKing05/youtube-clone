import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import ChannelSummary from '../Components/ChannelSummary'
import VideoCard1 from '../Components/VideoCard1'
import VideoCard2 from '../Components/VideoCard2'

export default function Channel() {
  const [channelData, setChannelData] = useState([]);
  const [list, setList] = useState([])

  // get channel data from the search channel
  const channelInfo = useSelector((state) => state.channelData);
  // console.log("channelInfo", channelInfo)
  if (channelData !== channelInfo) {
    setChannelData(channelInfo)
  }

  // get video data from search channel
  const videosList = useSelector((state) => state.videosData);
  console.log("VIDEOS LIST", videosList)
  if (list !== videosList) {
    setList(videosList);
  }


  return (
    <div className='mx-4 '>
        {/* src='https://bit.ly/3ATSdwy' */}
          <div className='img-fluid mb-3 bg-dark bg-gradient'  style={{ height: '200px'}}/>
      {
        channelData[0] ? <ChannelSummary channelInfo={channelData} /> : <h4 className='fs-4 text-danger'>Search Channel Name</h4>
      }
          <h4 className='fs-4 fw-normal text-uppercase my-5'>All videos</h4>
          <div className='row'>
          
          {
            list && list.map((video) => {
              return <VideoCard2 key={video.id.videoId} videoData={video} />
            })
          }

          
         
        </div>
    </div>
  )
}
