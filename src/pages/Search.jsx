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
import HomeSkeletonCard from '../Components/skeletons/HomeSkeletonCard';

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
      {/* <div className='home-container'>
        <div style={{ height: '10vh' }} className=''>
          <Navbar />
        </div>
        <div style={{ height: '90vh', overflowY: 'auto' }} className=''>
          <Sidebar />
        </div>
        <div className='home-video-container searchPage__container position-absolute '>
          {
           !loading ? searchResult?.map((_result, index) => {
              if (_result.id.kind === "youtube#video"){
                return (<React.Fragment key={_result.id.videoId}>
                  <VideoCardHorizontal videoData={_result} viewFor="search" />
                </React.Fragment>)
              }else{
                return (<React.Fragment key={_result.id.channelId}>
                  <ChannelHorizontalCard channelResults={_result} viewFor="search" />
                  <hr/>
                </React.Fragment>)
              }
             
            }) : 
              [...Array(20)].map((_, index) => <React.Fragment key={index}> <HomeSkeletonCard view="lg" /> </React.Fragment>)
          }
        </div>
      </div> */}

      {
        !loading ? searchResult?.map((_result, index) => {
          if (_result.id.kind === "youtube#video") {
            return (<React.Fragment key={_result.id.videoId}>
              <VideoCardHorizontal videoData={_result} viewFor="search" />
            </React.Fragment>)
          } else {
            return (<React.Fragment key={_result.id.channelId}>
              <ChannelHorizontalCard channelResults={_result} viewFor="search" />
              <hr />
            </React.Fragment>)
          }

        }) :
          [...Array(20)].map((_, index) => <React.Fragment key={index}> <HomeSkeletonCard view="lg" /> </React.Fragment>)
      }
    </>
  )
}



{/* channelData &&  <h4 className='fs-5 fw-normal text-start mb-4 text-uppercase'>List form {channelData[0].snippet.title}</h4> */ }