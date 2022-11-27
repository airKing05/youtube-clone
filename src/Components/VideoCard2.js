import moment from 'moment';
import numeral from 'numeral';
import React, { useState, useEffect } from 'react';
import apiRequest from '../api';
import FavIcon from './FavIcon';

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
        console.log("times", time);

        const second  =  moment.duration(time).asSeconds();
        console.log("times secod", second);

        const newDuration =  moment.utc(second*1000).format("mm:ss");
        console.log("times new durauon", newDuration);

        return newDuration;
    }

    return (
        <>
            <div className='col-md-3 col-ms-4 position-relative m-3' style={{ maxWidth: '260px', padding: '1px' }}>
                <img src={medium.url} className='img-fluid ' alt='thumbnail' style={{ borderRadius: '12px' }} />
                <span className="position-absolute" style={{ top: '1%', right: '7%' }}><FavIcon /></span>
                <div className='row my-auto mt-3 p-0'>
                    <div className='col-3 postion-relative'>
                        <img src={channelUrl} className='img-fluid rounded-circle' alt='thumbnail' />
                        <span className='bg-dark p-2'>{formateDuration(duration)}</span>
                    </div>
                    <div className='col-9 text-start text-muted '>
                        <h6 className='text-wrap fs-6' >{title} </h6>
                        <span style={{ fontSize: '12px' }} className="pt-0 text-muted">{channelTitle}</span>
                        <div style={{ fontSize: '10px' }} ><span className="text-muted">{numeral(views).format('0.a')} views</span> &#x2022; <span className="text-muted">{moment(publishedAt).fromNow()}</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}
