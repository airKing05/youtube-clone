import React, { useState, useEffect, useRef } from 'react';
import { UilSearch } from '@iconscout/react-unicons'
import VideoCard1 from '../Components/VideoCard1';
import ChannelSummary from '../Components/ChannelSummary';
import { DebounceInput } from 'react-debounce-input';
import { searchChannel } from "../redux/actions/videosAction";
import { useDispatch, useSelector } from "react-redux";

export default function Search() {
  const [list, setList] = useState([])
  const [channelData, setChannelData] = useState([]);
  const inputElement = useRef();
  const dispatch = useDispatch();
   


  // function handleChange(e) {
  //   console.log(e.target.value)
  // }

  // get video data from search channel
  const videosList = useSelector((state) => state.videosData);
  console.log("VIDEOS LIST", videosList)
  if (list !== videosList) {
    setList(videosList);
  }

  // get channel data from the search channel
  const channelInfo = useSelector((state) => state.channelData);
 // console.log("channelInfo", channelInfo)
  if (channelData !== channelInfo){
    setChannelData(channelInfo)
  }

  // send channel name to get video data from search channel
  function handleSearch() {
   // console.log(inputElement.current.value)
    dispatch(searchChannel(inputElement.current.value) )
  }

  return (
    <div className='container border' style={{ maxWidth: "1000px" }}>
      <div className="input-group my-5 d-flex mx-auto" style={{ maxWidth: "500px" }}>
        <input
          //minLength={2}
          //debounceTimeout={1000}
          type="text"
          className="form-control"
          placeholder="search by username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          ref = {inputElement}
          //onChange={(e) => { console.log(e.target.value)}}
        />
        <span
          className="input-group-text"
          id="basic-addon2"
          onClick={handleSearch}
        ><UilSearch /></span>
      </div>
      <hr />
      {
        channelData[0] && channelData[0].snippet ? <ChannelSummary channelInfo={channelData} /> : <h4 className='fs-4 text-danger'>Search Channel Name</h4>
      }
    
      <hr />
      {/* channelData &&  <h4 className='fs-5 fw-normal text-start mb-4 text-uppercase'>List form {channelData[0].snippet.title}</h4> */}
      {
        list && list.map((video) => {
          return <VideoCard1 key={video.id.videoId} videoData={video} />
        })
      }

    </div>
  )
}
