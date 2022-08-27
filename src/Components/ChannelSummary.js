import React from 'react';
import { UilCheckCircle, UilBell } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

export default function ChannelSummary() {
    return (
        <div className='row'>
            <Link to={`/channel-details`} className='col-4 '>
                <img src='https://bit.ly/3RwGiKD' className='img-fluid rounded-circle' style={{ maxWidth: '150px', height: '150px' }} alt='thumbnail' />
            </Link>
            <Link to={`/channel-details`} className='col-6 text-decoration-none text-start my-auto'>
                <h4 className='fs-5 fw-bolder text-dark'>
                    <span className=''>Love Babbar</span> &nbsp;
                    <span><UilCheckCircle size={18} /></span></h4>
                    <div className='text-muted'>
                        <span>500K subscribe</span> &#x2022; <span>1000 videos</span>
                    </div>
                <div className='d-none d-md-block'>
                    <p className='fs-6 normal text-wrap text-muted'>Hey everyone! In today's video, I'll share the best resource for beginners to master Data Structures and Algorithms!..</p>
                </div>
                <div className='d-block d-md-none mt-2'>
                    <span className='btn bg-dark bg-gradient text-dark bg-opacity-10 rounded-0'>
                        Subscribe
                    </span>
                    <span className=''>
                        <UilBell  size={20}></UilBell>
                    </span>
                </div>
            </Link>
            <div className='col-2 d-none d-md-block text-start my-auto'>
                <span className='btn bg-dark bg-gradient text-dark bg-opacity-10 rounded-0'>
                    Subscribe
                </span>

                <span>
                    <UilBell size={20}></UilBell>
                </span>

            </div>
        </div>
    )
}
