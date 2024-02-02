import moment from 'moment';
import numeral from 'numeral';
import React, { useState, useEffect } from 'react';
import apiRequest from '../../api';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { UilCheckCircle } from '@iconscout/react-unicons'
import { useDispatch, useSelector } from 'react-redux';
import { GET_CHANNEL_DETAILS_OF_SELECTED_VIDEO, GET_SELECTED_VIDEO } from '../../redux/constants/constants';
import { useNavigate } from 'react-router-dom';
import { toggleShowMoreText } from '../../utils/methods/toggleShowMoreText';


export default function ChannelHorizontalCard(props) {
    const { snippet, contentDetails } = props?.channelResults;
    const { viewFor } = props;
    const { description, publishedAt, channelTitle, title, thumbnails, resourceId } = snippet;

    const [channelData, setChannelData] = useState({})

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // for subscription channel id came from the resourceId else it will came from snippet directly
    const channelId = (viewFor && resourceId?.channelId) ? resourceId?.channelId : snippet.channelId

    const formateDuration = (time) => {
        const second = moment.duration(time).asSeconds();
        const newDuration = moment.utc(second * 1000).format("mm:ss");
        return newDuration;
    };

    const handelChannelClick = () => {
        navigate(`/channel-details/${channelId}`, { state: { channelData } });
    };


    const getChannelDetailsByChannelId = async () => {
        const res = await apiRequest('/channels', {
            params: {
                part: 'snippet,contentDetails,statistics,brandingSettings',
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
            className={`${viewFor === 'subscription' ? 'box-shadow-89 mb-5 pt-4 pb-4' : ''} mx-3 row py-1 cursor__pointer`}
            onClick={handelChannelClick}
        >
            <div className='col-md-4 d-flex justify-content-center position-relative  m-0 p-0'>
                <LazyLoadImage
                    src={thumbnails.default.url}
                    // src="https://i.ytimg.com/vi/JtYeYWz5RNA/mqdefault.jpg"
                    effect='blur'
                    className='rounded-circle'
                    style={{ width: '150px' }}
                />
            </div>
            <div
                className={`${viewFor === 'subscription' ? 'pt-sm-4 pt-md-1' : ''} col-md-8 pt-1 `}
                style={{ marginTop: viewFor === 'subscription' && '-10px' }}
            >
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
                            {numeral(channelData?.statistics?.subscriberCount).format('0.a').toUpperCase()} subscribers
                        </span>
                    </div>
                    <div>
                        <p
                            className='fs-6 color-aaa'
                            style={toggleShowMoreText(true)}
                        >
                            {description}
                        </p>
                    </div>
                    {
                        contentDetails?.totalVideoItemCount ? <div className='fs-6 fw-bold'>
                            Total videos: {contentDetails?.totalVideoItemCount}
                        </div> : null
                    }
                   
                </div>
            </div>

        </div>
    )
}
