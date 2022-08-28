import React, { useState, useEffect } from 'react';
import { UilSearch } from '@iconscout/react-unicons'
import VideoCard1 from '../Components/VideoCard1';
import ChannelSummary from '../Components/ChannelSummary';
import { DebounceInput } from 'react-debounce-input';
//import API_KEY from '../config/.env';
// require('dotenv').config()

export default function Search() {
  const [searchInput, setSearchInput] = useState('');
  const [list, setList] = useState([]);
  const [channelData, setChannelData] = ('');

  const KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = 'https://www.googleapis.com/youtube/v3';

  function handleChange(e) {
    setSearchInput(e.target.value)
    console.log(e.target.value)
  }


  function handleSearch() {
    const type = "video";
    const part = "snippet";
    const query = encodeURI(searchInput).toLowerCase();
    let url = BASE_URL + "/search" + "?key=" + KEY + "&q=" + query + "&type=" + type + "&part=" + part
    fetch(url)
      .then(res => res.json())
      .then(res => {
       // console.log(res)
        setList(res.items)
      })
  }

  async function getChannelData(){
    const channelId = await list[0].snippet.channelId;
    const part = "snippet,contentDetails,statistics";
    let url = BASE_URL + "/channels" + "?key=" + KEY + "&part=" + part + "&id=" + channelId;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log("channel________data", res.items)
        setChannelData(res);
      })
  }

  useEffect(() => {
    getChannelData()
  }, [list])
  
  console.log("list--------------", list)
  console.log("channel data form channelData-----", channelData)
  return (
    <div className='container border' style={{ maxWidth: "1000px" }}>
      <div className="input-group my-5 d-flex mx-auto" style={{ maxWidth: "500px" }}>
        {/* <input 
        type="text" 
        className="form-control" 
        placeholder="search by username" 
        aria-label="Recipient's username" 
        aria-describedby="basic-addon2" 
          value={searchInput}
          onChange={handleChange}
        /> */}
        <DebounceInput
          minLength={2}
          debounceTimeout={1000}
          type="text"
          className="form-control"
          placeholder="search by username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={searchInput}
          onChange={handleChange}
        />
        <span
          className="input-group-text"
          id="basic-addon2"
          onClick={handleSearch}
        ><UilSearch /></span>
      </div>
      <hr />
      <ChannelSummary videosList ={list} />
      <hr />
      <h4 className='fs-5 fw-normal text-start mb-4 text-uppercase'>List form Love Babber</h4>
      {
        list && list.map((video) => {
          return <VideoCard1 key={video.id.videoId} snippet={video.snippet} />
        })
      }

    </div>
  )
}
