import moment from 'moment';
import numeral from 'numeral';
import React, { useState, useEffect } from 'react';
import apiRequest from '../../api';
import FavIcon from '../FavIcon';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function VideoCard2({ videoData }) {
    const [duration, setDuration] = useState(null);
    const [views, setViews] = useState(null);
    const [channelUrl, setChannelUrl] =useState('');


    console.log("duraion and views", duration, views)
    const { id, snippet: { publishedAt, channelId, title, thumbnails: { medium }, channelTitle } } = videoData;

    // contentDetails and statistics taking as dynamicly bcoz, that can be change on each and ever second
    const getMoreVideosData = async () => {
        const res = await apiRequest('/videos', {
            params: {
                part: 'contentDetails,statistics',
                id: id
            }
        })
        const data = res.data.items[0];
        setDuration(data.contentDetails.duration);
        setViews(data.statistics.viewCount);
       
    };
    useEffect(() =>{
        getMoreVideosData();
    }, [id]);

    const getChannelIconData = async () => {
        const res = await apiRequest('/channels', {
            params: {
                part: 'snippet',
                id: channelId
            }
        })
        console.log("channle data ", res);
        const urlData = res.data.items[0].snippet.thumbnails.default.url;
        setChannelUrl(urlData)
    };

    useEffect(()=> {
        getChannelIconData();
    }, [channelId])

    const formateDuration = (time) => {
        const second  =  moment.duration(time).asSeconds();
        const newDuration =  moment.utc(second*1000).format("mm:ss");
        return newDuration;
    };

    return (
        <>
            <div className='col-md-3 col-ms-4 position-relative my-3 mx-2' style={{ maxWidth: '200px', padding: '1px', cursor: 'pointer' }}>
                <div className='position-relative'>
                    {/* <img src={medium.url} className='img-fluid ' alt='thumbnail' style={{ borderRadius: '12px' }} /> */}
                    <LazyLoadImage 
                    src={medium.url}
                    effect='blur'
                    className='img-fluid' style={{ borderRadius: '12px' }} 
                     />
                    <span className='bg-dark px-1 position-absolute rounded' style={{ top: '80%', right: '2%', fontSize: '12px' }}>{formateDuration(duration)}</span>
                    <span className="position-absolute" style={{ top: '1%', right: '7%' }}><FavIcon /></span>
                </div>
                <div className='row my-auto mt-2 p-0'>
                    <div className='col-3 postion-relative'>
                        {/* <img src={channelUrl} className='img-fluid rounded-circle' alt='thumbnail' /> */}
                        <LazyLoadImage src={channelUrl} className='img-fluid rounded-circle' alt='thumbnail' />
                        
                    </div>
                    <div className='col-9 text-start text-muted p-0'>
                        <h6 className='text-wrap video-title mb-0' >{title} </h6>
                        <span style={{ fontSize: '12px' }} className=" text-muted">{channelTitle}</span>
                        <div style={{ fontSize: '10px' }} ><span className="text-muted">{numeral(views).format('0.a')} views</span> &#x2022; <span className="text-muted">{moment(publishedAt).fromNow()}</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}
