import moment from 'moment';
import numeral from 'numeral';
import React, { useState, useEffect } from 'react';
import apiRequest from '../../api';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { UilCheckCircle } from '@iconscout/react-unicons'


export default function VideoCardHorizontal() {

  const formateDuration = (time) => {
    const second = moment.duration(time).asSeconds();
    const newDuration = moment.utc(second * 1000).format("mm:ss");
    return newDuration;
  };

  return (
    <div className='mx-3 row  py-1 align-items-center'>
      <div className='col-6 col-md-4 position-relative m-0 p-0'>
        <LazyLoadImage
          src="https://i.ytimg.com/vi/JtYeYWz5RNA/mqdefault.jpg"
          effect='blur'
          className='img-fluid' style={{ borderRadius: '12px', height: '100%' }}
        />
        <span className='bg-dark px-1 position-absolute rounded d-md-block d-none' style={{ top: '70%', right: '2%', fontSize: '10px' }}>{formateDuration('100')}</span>
        <span className='bg-dark px-1 position-absolute rounded d-block d-md-none' style={{ top: '80%', right: '2%', fontSize: '10px' }}>{formateDuration('100')}</span>

      </div>
      <div className='col-6 col-md-8 '>
        <div className='video-title py-1'>this is my second video form this youtube clone</div>
        <div className='d-flex jutify-content-start align-items-center py-0'>
          {/* <LazyLoadImage
            src="https://yt3.ggpht.com/iAJfO2jFSYSw8yK1ZiclCN3RfH7XRRZQOxuXi4amCxA1gYhTGIOw9faI29D181tCCAY7C-i3_Q=s48-c-k-c0x00ffffff-no-rj"
            effect='blur'
            width={30}
            className='img-fluid rounded-circle' style={{ borderRadius: '12px', height: '100%' }}
          /> */}
          <span className='text-muted' style={{fontSize: '12px'}}>KS Record</span>
          <span className='mx-1 d-flex align-items-center'><UilCheckCircle size={12} color="gray"/></span>
        </div>
        <div style={{ fontSize: '10px' }} >
          <span className="text-muted">{numeral(123456).format('0.a')} views</span>
          &nbsp;
          &#x2022;
          &nbsp;

          <span className="text-muted">{moment('2022-11-19').fromNow()}</span></div>
      </div>

    </div>
  )
}
