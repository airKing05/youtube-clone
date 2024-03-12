import moment from 'moment';
import numeral from 'numeral';
import React, { useState, useEffect } from 'react';
import apiRequest from '../../api';
import FavIcon from '../FavIcon';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate, NavLink, Link } from 'react-router-dom';

export default function VideoCard2({ videoData }) {
    const [videosMoreDetails, setVideosMoreDetails] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [channelDataLoading, setChannelDataLoading] = useState(false);
    const [videoDataLoading, setVideoDataLoading] = useState(false);


    const { 
        id, 
        snippet: { publishedAt, channelId, title, thumbnails: { medium }, channelTitle }, 
        statistics, 
        contentDetails 
    } = videoData;


    const getMoreVideosData = async (videoId) => {
        setVideoDataLoading(true);
        const res = await apiRequest('/videos', {
            params: {
                part: 'snippet, contentDetails, statistics',
                id: videoId
            }
        })
        const data = res.data.items[0];
        setVideosMoreDetails(data);
        setVideoDataLoading(false)
    };

    useEffect(() => {
        // this API call is only for the channel videos 
        if ((!contentDetails?.duration || !statistics?.viewCount) && contentDetails?.videoId) {
            getMoreVideosData(contentDetails?.videoId);
        }
    }, [contentDetails?.videoId]);

    let videoIdForCategoryVideoDetailsCalled = id?.videoId
    useEffect(() => {
        // this API call, if category keyword is selected
        if (videoIdForCategoryVideoDetailsCalled) {
            getMoreVideosData(videoIdForCategoryVideoDetailsCalled);
        }
    }, [videoIdForCategoryVideoDetailsCalled]);



    const getChannelIconData = async () => {
        setChannelDataLoading(true)
        const res = await apiRequest('/channels', {
            params: {
                part: 'snippet,contentDetails,statistics',
                id: channelId
            }
        })
        setChannelData(res.data.items[0])
        setChannelDataLoading(false)
    };

    useEffect(() => {
        getChannelIconData();
    }, [channelId])

    const formateDuration = (time) => {
        const second = moment.duration(time).asSeconds();
        const newDuration = moment.utc(second * 1000).format("mm:ss");
        return newDuration;
    };

    // handling video click to show in play screen
    const navigate = useNavigate();

    const handleVideoClick = (videoId) => {
        navigate(`/watch/${videoId}`, { state: { channelData, channelDataLoading, videoDataLoading, videoData: videosMoreDetails || videoData } });
        // {/* onClick={() => handleVideoClick(id)} */ }
    };

    const handleAddToFavorite = (e) => {
        e.stopPropagation()
    }

    const videoIdForNavigateToPlayScreen = id?.videoId ? id.videoId : contentDetails?.videoId ? contentDetails?.videoId : id
    
    return (
        <>
            <div
                onClick={() => handleVideoClick(videoIdForNavigateToPlayScreen)}
                className='col-md-3 position-relative my-3 mx-2'
                style={{ padding: '1px', cursor: 'pointer' }}>
                <div className='position-relative'>
                    <LazyLoadImage
                        src={medium.url}
                        effect='blur'
                        className='img-fluid' style={{ borderRadius: '12px' }}
                    />
                    <span className='bg-dark px-1 position-absolute rounded' style={{ top: '80%', right: '2%', fontSize: '12px' }}>{formateDuration(contentDetails?.duration || videosMoreDetails?.contentDetails?.duration)}</span>
                    <span className="position-absolute" style={{ top: '1%', right: '7%' }}>
                    <FavIcon 
                        handleAddToFavorite={(e) => handleAddToFavorite(e)}
                    /></span>
                </div>
                <div className='row my-auto mt-2 p-0 ms-n-2'>
                    <div className='col-3 position-relative'>
                        <LazyLoadImage
                            src={channelData?.snippet.thumbnails.default.url}
                            className='img-fluid rounded-circle'
                            alt='thumbnail'
                        />
                    </div>
                    <div className='col-9 text-start text-muted p-0'>
                        <h6 className='text-wrap video-title mb-0' >{title} </h6>
                        <span style={{ fontSize: '12px' }} className=" text-muted">{channelTitle}</span>
                        <div style={{ fontSize: '10px' }} >
                            <span className="text-muted">{numeral(statistics?.viewCount ? statistics?.viewCount : videosMoreDetails?.statistics?.viewCount).format('0.a')} views</span>
                            &#x2022;
                            <span className="text-muted">{moment(publishedAt).fromNow()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
