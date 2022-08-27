import React from 'react';
import { UilSearch } from '@iconscout/react-unicons'
import VideoCard1 from '../Components/VideoCard1';
import ChannelSummary from '../Components/ChannelSummary';

export default function Search() {
  return (
    <div className='container border' style={{maxWidth:"1000px"}}>
      <div class="input-group my-5 d-flex mx-auto" style={{ maxWidth: "500px" }}>
        <input type="text" class="form-control" placeholder="search by username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <span class="input-group-text" id="basic-addon2"><UilSearch/></span>
      </div>
      <hr />
      <ChannelSummary/>
      <hr/>
      <h4 className='fs-5 fw-normal text-start mb-4 text-uppercase'>List form Love Babber</h4>
      <VideoCard1/>
    </div>
  )
}
