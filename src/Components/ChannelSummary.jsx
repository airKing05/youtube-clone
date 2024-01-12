import React from 'react';
import { UilCheckCircle, UilBell } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function ChannelSummary(props) {
    const { 
    snippet: { title, description, thumbnails },
     statistics: { subscriberCount, videoCount, viewCount } 
    } = props.channelData;

    return (
        <div className='row'>
            <Link to={`/channel-details`} className='col-4 '>
            <LazyLoadImage 
                src={thumbnails.medium.url} 
                className='img-fluid rounded-circle'
                effect='blur'
                style={{ maxWidth: '150px', height: '150px' }} 
                alt='thumbnail'
            />
                {/* <img src={thumbnails.medium.url} className='img-fluid rounded-circle' style={{ maxWidth: '150px', height: '150px' }} alt='thumbnail' /> */}
            </Link>
            <Link to={`/channel-details`} className='col-6 text-decoration-none text-start my-auto'>
                <h4 className='fs-4 fw-bold text-dark'>
                    <span className=''>{title}</span> &nbsp;
                    <span><UilCheckCircle size={18} /></span>
                </h4>
                <div className='text-muted fs-6 my-2'>
                    <span>{subscriberCount/1000}K subscribe</span>
                    &nbsp;
                    &#x2022;
                    &nbsp;
                    <span>{videoCount} Videos</span>
                    &nbsp;
                    &#x2022;
                    &nbsp;
                    <span>{viewCount/1000}K Total views</span>
                </div>
                <div className='d-none d-md-block'>
                    <p className='fs-6 normal text-wrap text-muted control-over-flow'>{description}</p>
                </div>
                <div className='d-block d-md-none mt-2'>
                    <span className='btn bg-dark bg-gradient text-dark bg-opacity-10 rounded-0'>
                        Subscribe
                    </span>
                    <span className=''>
                        <UilBell size={20}></UilBell>
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