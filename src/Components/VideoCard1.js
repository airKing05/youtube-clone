import React from 'react';
import { UilCheckCircle } from '@iconscout/react-unicons';

export default function VideoCard1() {
    return (
        <>
            <div className='row'>
                <div className='col-md-4'>
                    <img src='https://bit.ly/3RwGiKD' className='img-fluid' alt='thumbnail' />
                </div>
                <div className='col-md-8 text-start d-none d-md-block'>
                    <h4 className='fs-5 fw-bolder'>Learn Data Structures and Algorithms as Absolute Beginner to Advanced!</h4>

                    <div className='text-muted '>
                        <span>87K views</span> &#x2022; <span>1 day ago</span>
                    </div>
                    <div className='text-muted '>
                        <span className=' rounded-circle' style={{ backgroundColor: 'red', width: '25px', height: '25px' }}>th</span> &nbsp;
                        <span>Love Babbar</span> &nbsp;
                        <span><UilCheckCircle size={18} /></span>
                    </div>
                    <div className=''>
                        <p className='fs-6 normal text-wrap text-muted'>Hey everyone! In today's video, I'll share the best resource for beginners to master Data Structures and Algorithms! This playlist ..</p>
                    </div>
                </div>
                <div className='col-md-8 d-block d-md-none mt-3'>
                    <div className='row my-auto'>
                        <div className='col-2' >
                            <img src='https://bit.ly/3RwGiKD' className='img-fluid rounded-circle' style={{ maxWidth: '50px', height: '50px' }} alt='thumbnail' />
                        </div>
                        <div className='col-10 text-start text-muted'>
                            <h6 className='fs-6 fw-bolder'>Learn Data Structures and Algorithms as Absolute Beginner to Advanced!</h6>
                            <span>Love Babbar</span> &#x2022;  <span>87K views</span> &#x2022; <span>1 day ago</span>
                        </div>
                    </div>
                   
                </div>
            </div>
           
            
        </>
    )
}
