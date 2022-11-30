import numeral from 'numeral';
import React, { useState } from 'react';


export default function VideoMetaData({ videoDataById }) {
  const [showMore, setShowMore] = useState(false);

  const { snippet: { description }, statistics: { viewCount } } = videoDataById;
  const dynamicCSS = () =>( {
  'overflow': 'hidden',
  'display': `-webkit-box`,
  '-webkit-line-clamp': `${showMore ? 3: 100}`,
  '-webkit-box-orient': `vertical`
  });
  
  return (

    <div className='d-flex flex-column justify-content-start border  rounded p-2 overflow-hidden' style={{ backgroundColor: '#282828',  }}>
      <span className='d-flex justify-content-start bg-transparent fs-6 fw-bold my-2'>
        <span className='bg-transparent'>{numeral(viewCount).format('0.a').toUpperCase} views</span> &nbsp; &nbsp; <span className='bg-transparent'>3 days ago</span>
      </span>

      <div className='bg-transparent overflow-hidden' 
      style={{fontSize: ''}}
      >
        <sapn className='bg-transparent' style={dynamicCSS()}>
          {description}
        </sapn>
        <span 
          className='bg-transparent text-primary'
        onClick={() => setShowMore(!showMore)}>{showMore ? "...More" : "Show less"}</span> 
        {/* </ShowMoreText> */}
      </div>

    </div>

  )
}
