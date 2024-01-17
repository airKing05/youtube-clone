import moment from 'moment';
import numeral from 'numeral';
import React, { useState, useEffect } from 'react';
import apiRequest from '../../api';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { UilCheckCircle } from '@iconscout/react-unicons'
import { useDispatch, useSelector } from 'react-redux';
import { GET_CHANNEL_DETAILS_OF_SELECTED_VIDEO, GET_SELECTED_VIDEO } from '../../redux/constants/constants';
import { useNavigate } from 'react-router-dom';


export default function VideoCardHorizontal(props) {
  const { id: { videoId }, snippet: { description, publishedAt, channelTitle, title, thumbnails, channelId } } = props?.videoData;
  const { viewFor } = props;

  const [moreDetailsOfVideo, setMoreDetailsOfVideo] = useState({});
  const [channelData, setChannelData] = useState({})

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formateDuration = (time) => {
    const second = moment.duration(time).asSeconds();
    const newDuration = moment.utc(second * 1000).format("mm:ss");
    return newDuration;
  };

  const handleVideoClick = () => {
    navigate(`/watch/${videoId}`, { state: { channelData, videoData: moreDetailsOfVideo } });
  };

  const getVideoMoreDetails = async () => {
    const res = await apiRequest('/videos', {
      params: {
        part: 'snippet,contentDetails,statistics',
        id: videoId
      }
    })
    const data = res.data.items[0];
    setMoreDetailsOfVideo(data);
  };

  useEffect(() => {
    getVideoMoreDetails();
  }, [videoId]);


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
      className={`${viewFor === 'search' ? 'mx-3 py-1' : 'mx-3 ps-2 py-2'} row cursor__pointer`}
      onClick={handleVideoClick}
    >
      <div className='col-md-4 position-relative m-0 p-0'>
        <LazyLoadImage
          src={thumbnails.high.url}
          // src="https://i.ytimg.com/vi/JtYeYWz5RNA/mqdefault.jpg"
          effect='blur'
          className='img-fluid' style={{ borderRadius: '8px', height: '100%' }}
        />
        <span
          className='bg-dark position-absolute rounded d-md-block d-none px-2 py-1'
          style={{ bottom: viewFor === 'search' ? '14%' : '5%', right: '2%', fontSize: '10px' }}
        >
          {formateDuration(moreDetailsOfVideo?.contentDetails?.duration || '100')}
        </span>
        <span
          className='bg-dark px-1 position-absolute rounded d-block d-md-none'
          style={{ top: '80%', right: '2%', fontSize: '10px' }}
        >
          {formateDuration('100')}
        </span>

      </div>
      <div className='col-md-8 pt-1'>
        <div className={`${viewFor === 'search' ? 'fs-3 py-1' : 'fs-6 pt-n-1'} video-title`}>{title}</div>
        {
          viewFor === 'search' ?
            <>
              <div className='justify-content-start align-items-center py-0'>
                <div style={{ fontSize: '10px' }} >
                  <span className="text-muted">{numeral(moreDetailsOfVideo?.statistics?.viewCount).format('0.a').toUpperCase()} views</span>
                  &nbsp;
                  &#x2022;
                  &nbsp;
                  <span className="text-muted">{moment(publishedAt).fromNow()}</span>
                </div>

                <div className='d-flex align-items-center my-1'>
                  <span className='channel__icon-sm me-2'>
                    <LazyLoadImage
                      src={channelData?.snippet?.thumbnails?.default?.url}
                      effect='blur'
                      className='img-fluid rounded-circle'
                    />
                  </span>
                  <span className='text-muted color-aaa' style={{ fontSize: '12px' }}>{channelTitle}</span>
                  <span className='mx-1 d-flex pt-1'><UilCheckCircle size={12} color="#aaa" /></span>
                </div>

                <div>
                  <p className='fs-6 color-aaa'>{description}</p>
                </div>
              </div>
            </>
            :
            <>
              <div className='d-flex flex-column justify-content-start py-0'>
                <div className='d-flex pt-2 align-items-center'>
                  <span className='text-muted' style={{ fontSize: '12px' }}>{channelTitle}</span>
                  <span className='mx-1 d-flex pt-1'><UilCheckCircle size={12} color="gray" /></span>
                </div>
                <div style={{ fontSize: '10px' }} >
                  <span className="text-muted">{numeral(moreDetailsOfVideo?.statistics?.viewCount).format('0.a').toUpperCase()} views</span>
                  &nbsp;
                  &#x2022;
                  &nbsp;
                  <span className="text-muted">{moment(publishedAt).fromNow()}</span>
                </div>
              </div>
            </>

        }
      </div>

    </div>
  )
}
