import moment from 'moment';
import numeral from 'numeral';
import React, { useState } from 'react';
import { toggleShowMoreText } from '../../utils/methods/toggleShowMoreText';


export default function VideoMetaData({ videoData }) {
  const [showMore, setShowMore] = useState(true);

  const { snippet: { description, publishedAt }, statistics: { viewCount } } = videoData;
  const dynamicCSS = () => ({
    'overflow': 'hidden',
    'display': `-webkit-box`,
    '-webkit-line-clamp': `${showMore ? 3 : 100}`,
    '-webkit-box-orient': `vertical`
  });

  return (

    <div className='d-flex flex-column justify-content-start rounded p-2 overflow-hidden' style={{ backgroundColor: '#282828', }}>
      <span className='d-flex justify-content-start bg-transparent fs-6 fw-bold my-2'>
        <span className='bg-transparent'>{numeral(viewCount).format('0.a').toUpperCase()} views</span>
        &nbsp; &nbsp;
        <span className='bg-transparent'>{moment(publishedAt).fromNow()} days ago</span>
      </span>

      <div className='bg-transparent overflow-hidden'
        style={{ fontSize: '' }}
      >
        <span className='bg-transparent' style={toggleShowMoreText(showMore)}>
          {description}
        </span>
        <span
          className='bg-transparent text-primary'
          onClick={() => setShowMore(!showMore)}>{showMore ? "More" : "Show less"}</span>
      </div>
    </div>

  )
}
