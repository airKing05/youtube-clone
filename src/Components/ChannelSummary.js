import React from 'react';
import { UilCheckCircle, UilBell } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

export default function ChannelSummary(props) {
    console.log("PROPSMOF HASSSSS", props);
    const { snippet, statistics } = props.channelInfo[0];
    // const { title, description, thumbnails } = snippet;
    // const { subscriberCount, videoCount, viewCount } = statistics
    // console.log(props);
    // console.log("channel summmarrrrrrrr", snippet, statistics, title, thumbnails);
    return (
        <div className='row'>
            <Link to={`/channel-details`} className='col-4 '>
                <img src={snippet && snippet.thumbnails.medium.url} className='img-fluid rounded-circle' style={{ maxWidth: '150px', height: '150px' }} alt='thumbnail' />
            </Link>
            <Link to={`/channel-details`} className='col-6 text-decoration-none text-start my-auto'>
                <h4 className='fs-4 fw-bold text-dark'>
                    <span className=''>{snippet && snippet.title}</span> &nbsp;
                    <span><UilCheckCircle size={18} /></span>
                </h4>
                <div className='text-muted fs-6 my-2'>
                    <span>{statistics && statistics.subscriberCount/1000}K subscribe</span>
                    &nbsp;
                    &#x2022;
                    &nbsp;
                    <span>{statistics && statistics.videoCount} Videos</span>
                    &nbsp;
                    &#x2022;
                    &nbsp;
                    <span>{statistics && statistics.viewCount} Total views</span>
                </div>
                <div className='d-none d-md-block'>
                    <p className='fs-6 normal text-wrap text-muted control-over-flow'>{snippet && snippet.description}</p>
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
