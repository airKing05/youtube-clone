import React, { useEffect } from 'react';
import { UilShare, UilThumbsUp, UilThumbsDown, UilImport } from '@iconscout/react-unicons';
import numeral from 'numeral';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CHANNEL_DETAILS_OF_SELECTED_VIDEO } from '../../redux/constants/constants';

export default function ChannelLinks({ videoData, channelData }) {
  //console.log("linek count", videoDataById);

  const dispatch = useDispatch();
  const { channelDetails,loading, error } = useSelector(state => state.channelDetails);

  const { snippet, statistics } = channelData;
  const { snippet: { channelId }, statistics: { likeCount } } = videoData;

  


  // useEffect(() => {
  //   dispatch({ type: GET_CHANNEL_DETAILS_OF_SELECTED_VIDEO, payload: channelId })
  // }, [channelId])

  return (
      <div className='my-3 d-flex flex-row justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
              <div className='d-flex align-items-center'>
                <div className='channel-icon' style={{width: '20%'}}>
                      <img 
                      src={snippet?.thumbnails?.default?.url}
                      // src='https://yt3.ggpht.com/6PH1WzlO3YCX_8fLQ0DhEaMG5I6c7MjGgxYjA4z4X1jXTlXhPWJ5_a6PmGvQgcEKhfgL7YKUnw=s48-c-k-c0x00ffffff-no-rj'
                      className='img-fluid rounded-circle' 
                       alt='icon'
                      />
                </div>
                <div className='channel-info py-1 mx-2 d-flex flex-column'>
                      <span className='fw-bold ' style={{ fontSize: '13px' }}>
                        { snippet?.localized?.title } 
                      </span>
                    <span className='text-muted' style={{fontSize: '11px'}}>
                      {statistics?.subscriberCount} 
                      Subscribers
                    </span>
                </div>
            </div>
            {/* need to work here of subscribed or not */}
            <div className='d-flex jutify-content-between' style={{fontSize: '12px'}}>
                  <span className='border bg-dark py-1 px-2 rounded-pill fw-bold'>Join</span> &nbsp; &nbsp;
                  <span className='border bg-dark py-1 px-2 rounded-pill fw-bold text-dark bg-white'>Subscribe</span>
            </div> 
        </div>
          <div className='d-flex flex-row align-items-center' style={{ fontSize: '12px' }}>
        <div className='border py-1 px-2 rounded-pill mx-1 align-middle' >
                  <span className='px-1'><UilThumbsUp size={15} color="#dee2e6" /> {numeral(likeCount).format('0.a')} </span> 
                  <span className="border-end"></span>
                  <span className='px-1'><UilThumbsDown size={15} color="#dee2e6" /></span>
            </div>
              <div className=' border py-1 px-2 rounded-pill mx-1'>
                  <span className='d-flex align-items-center'><UilShare size={15} color="#dee2e6" />&nbsp;Share</span>
            </div>
              <div className=' border py-1 px-2 rounded-pill mx-1'>
                  <span className='d-flex align-items-center'><UilImport size={15} color="#dee2e6" /> &nbsp;Download </span>
              </div>
              <div className=' border py-2 px-1 rounded-circle mx-1'>
                  <span className='d-flex align-items-center' style={{ fontSize: '7px' }}>&#x2022; &#x2022; &#x2022; </span>
              </div>
        </div>
    </div>
  )
}
