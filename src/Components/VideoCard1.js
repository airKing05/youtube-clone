import React from 'react';
import { UilCheckCircle } from '@iconscout/react-unicons';

export default function VideoCard1() {
  return (
    <div className='row'>
        <div className='col-md-4'>
              <img src='https://bit.ly/3RwGiKD' className='img-fluid' alt='thumbnail'/>
        </div>
        <div className='col-md-8 text-start'>
              <h4 className='fs-5 fw-bold'>Learn Data Structures and Algorithms as Absolute Beginner to Advanced!</h4>
              <div>
                  <span>87K views</span> &#x2022; <span>1 day ago</span>
              </div>
              <div>
                <span>icon</span>
                <span>Love Babbar</span>
                <span><UilCheckCircle size={25}/></span>
            </div>
            <div>
                <p>Hey everyone! In today's video, I'll share the best resource for beginners to master Data Structures and Algorithms! This playlist ..</p>
            </div>
        </div>
    </div>
  )
}
