import React, { useState, useEffect, useRef } from 'react';
import { UilSearch } from '@iconscout/react-unicons'
import VideoCard1 from '../Components/VideoCard1';
import ChannelSummary from '../Components/ChannelSummary';
import { DebounceInput } from 'react-debounce-input';
import { searchChannel } from "../redux/actions/videosAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import { GET_SEARCH_VIDEOS } from '../redux/constants/constants';
import VideoCardHorizontal from '../Components/videoCards/VideoCardHorizontal';
import ChannelHorizontalCard from '../Components/channel/ChannelHorizontalCard';

export default function Search() {
  const [list, setList] = useState([])
  const [channelData, setChannelData] = useState([]);
  const inputElement = useRef();
  const dispatch = useDispatch();
   

  const {query} = useParams();

  const {result: searchResult, loading, error} = useSelector((state) => state.searchResult);


  // get video data from search channel
  const videosList = useSelector((state) => state.videosData);

  if (list !== videosList) {
    setList(videosList);
  }

  // get channel data from the search channel
  const channelInfo = useSelector((state) => state.channelData);
  if (channelData !== channelInfo){
    setChannelData(channelInfo)
  }

  // send channel name to get video data from search channel
  function handleSearch() {
    dispatch(searchChannel(inputElement.current.value) )
  }

  

  // new way

  useEffect(()=>{
    dispatch({ type: GET_SEARCH_VIDEOS, payload: query })
  }, [query])

  return (
    <>
    {/* <div className='container border' style={{ maxWidth: "1000px" }}>
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
    
      {
        list && list.map((video) => {
          return <VideoCard1 key={video.id.videoId} videoData={video} />
        })
      }

    </div> */}

      <div className='home-container'>
        <div style={{ height: '7.5vh' }}>
          <Navbar />
        </div>
        <div style={{ height: '92.5vh' }}>
          <Sidebar />
        </div>
        <div className='container home-video-container position-absolute '>
          {
            !loading ? searchResult?.map((_result, index) => {
              if (_result.id.kind === "youtube#video"){
                return (<React.Fragment key={_result.id.videoId}>
                  <VideoCardHorizontal videoData={_result} viewFor="search" />
                </React.Fragment>)
              }else{
                return (<React.Fragment key={_result.id.channelId}>
                  <ChannelHorizontalCard channelSearchData={_result} viewFor="search" />
                </React.Fragment>)
              }
             
            }) : <h4>loading...</h4>
          }
        </div>

        {/* <VideoCardHorizontal viewFor="search" /> */}


      </div>
    </>
  )
}



{/* channelData &&  <h4 className='fs-5 fw-normal text-start mb-4 text-uppercase'>List form {channelData[0].snippet.title}</h4> */ }