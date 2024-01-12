import moment from 'moment';
import numeral from 'numeral';
import React, { useState, useEffect } from 'react';
import apiRequest from '../../api';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { UilCheckCircle } from '@iconscout/react-unicons'
import { useDispatch, useSelector } from 'react-redux';
import { GET_CHANNEL_DETAILS_OF_SELECTED_VIDEO, GET_SELECTED_VIDEO } from '../../redux/constants/constants';
import { useNavigate } from 'react-router-dom';


export default function ChannelHorizontalCard(props) {
    const { snippet: { description, publishedAt, channelTitle, title, thumbnails, channelId } } = props?.channelSearchData;
    const { viewFor } = props;

    const [channelData, setChannelData] = useState({})

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formateDuration = (time) => {
        const second = moment.duration(time).asSeconds();
        const newDuration = moment.utc(second * 1000).format("mm:ss");
        return newDuration;
    };

    const handelChannelClick = () => {
        navigate(`/channel-details/${channelId}`, { state: { channelData }});
    };


    const getChannelDetailsByChannelId = async () => {
        const res = await apiRequest('/channels', {
            params: {
                part: 'snippet,contentDetails,statistics',
                id: channelId
            }
        })
        setChannelData(res.data.items[0])
    };

    useEffect(() => {
        getChannelDetailsByChannelId();
    }, [channelId])


    return (
        <div
            className='mx-3 row  py-1'
            onClick={handelChannelClick}
        >
            <div className='col-md-4 d-flex justify-content-center position-relative  m-0 p-0'>
                <LazyLoadImage
                    src={thumbnails.default.url}
                    // src="https://i.ytimg.com/vi/JtYeYWz5RNA/mqdefault.jpg"
                    effect='blur'
                    className='rounded-circle'
                    style={{width: '150px'}}
                />
            </div>
            <div className='col-md-8 pt-1'>
                <div className='video-title d-flex align-items-center py-1 fs-3'>
                    {title}
                    <span className='mx-2'><UilCheckCircle size={16} color="#aaa" /></span>
                </div>

                <div className='justify-content-start align-items-center py-0'>
                    <div style={{ fontSize: '10px' }} >
                        <span className="text-muted">
                            {channelData?.snippet?.customUrl}
                        </span>
                        &nbsp;
                        &#x2022;
                        &nbsp;
                        <span className="text-muted">
                            {channelData?.statistics?.subscriberCount}K subscribers
                        </span>
                    </div>
                    <div>
                        <p className='fs-6 color-aaa'>
                        {description}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}