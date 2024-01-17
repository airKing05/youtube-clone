import React, { useState } from 'react';
import { UilCheckCircle, UilBell } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { toggleShowMoreText } from '../utils/methods/toggleShowMoreText';
import numeral from 'numeral';

export default function ChannelSummary(props) {
    const {
        snippet: { title, description, thumbnails },
        statistics: { subscriberCount, videoCount, viewCount },
        brandingSettings: { channel, image }
    } = props.channelData;

    const [showMore, setShowMore] = useState(true);

    return (
        <>
            <div className='d-flex justify-content-center align-items-center mb-3 channel__banner'>
                {/* need to work here */}
                <LazyLoadImage
                    src={image.bannerExternalUrl}
                    className='h-100 w-100 rounded'
                    effect='blur'
                    style={{ objectFit: 'cover' }}
                    alt='channel-banner'
                />
            </div>
            <div className='row'>

                <Link to={`/channel-details`} className='col-2 '>
                    <LazyLoadImage
                        src={thumbnails.medium.url}
                        className='img-fluid rounded-circle'
                        effect='blur'
                        style={{ maxWidth: '150px', height: '150px' }}
                        alt='thumbnail'
                    />
                    {/* <img src={thumbnails.medium.url} className='img-fluid rounded-circle' style={{ maxWidth: '150px', height: '150px' }} alt='thumbnail' /> */}
                </Link>
                <Link to={`/channel-details`} className='col-7 text-decoration-none text-center my-auto'>
                    <div className='text-start'>
                        <h4 className='fs-4 fw-bold text-dark'>
                            <span className=''>{title}</span> &nbsp;
                            <span><UilCheckCircle size={18} /></span>
                        </h4>
                        <div className='text-muted fs-6 my-2'>
                            <span>{numeral(subscriberCount).format('0.a').toUpperCase()} subscribe</span>
                            &nbsp;
                            &#x2022;
                            &nbsp;
                            <span>{numeral(videoCount).format('0.a').toUpperCase()} Videos</span>
                            &nbsp;
                            &#x2022;
                            &nbsp;
                            <span>{numeral(viewCount).format('0.a').toUpperCase()} Total views</span>
                        </div>
                        <div className='d-none d-md-block'>
                            <div className='bg-transparent overflow-hidden'>
                                <span className='bg-transparent fs-6 normal text-wrap text-muted control-over-flow'
                                    style={toggleShowMoreText(showMore)}>
                                    {description}
                                </span>
                                <span
                                    className='bg-transparent text-primary'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setShowMore(!showMore)
                                    }}>
                                    {showMore ? "More" : "Show less"}
                                </span>
                            </div>
                            {/* <p className='fs-6 normal text-wrap text-muted control-over-flow border' style={toggleShowMoreText(showMore)}>{description}</p> */}
                        </div>
                        <div className='d-block d-md-none mt-2 border'>
                            <span className='btn bg-dark bg-gradient text-white rounded-pill bg-opacity-10 rounded-0'>
                                Subscribe
                            </span>
                            <span className=''>
                                <UilBell size={20}></UilBell>
                            </span>
                        </div>
                    </div>
                </Link>
                <div className='col-3 d-none d-md-block text-end my-auto'>
                    <span
                        className='btn bg-dark bg-gradient text-white rounded-pill bg-opacity-10 rounded-0'
                        onClick={() => console.log("this is subscribed called")}
                    >
                        Subscribe
                    </span>
                    &nbsp;
                    <span>
                        <UilBell size={20}></UilBell>
                    </span>

                </div>
            </div>
        </>
    )
}
