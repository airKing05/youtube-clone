import React, { useState } from 'react';


export default function VideoMetaData() {
  const [showMore, setShowMore] = useState(false);

  const dynamicCSS = () =>( {
  'overflow': 'hidden',
  'display': `-webkit-box`,
  '-webkit-line-clamp': `${showMore ? 3: 100}`,
  '-webkit-box-orient': `vertical`
  });
  
  return (

    <div className='d-flex flex-column justify-content-start border  rounded p-2 overflow-hidden' style={{ backgroundColor: '#282828',  }}>
      <span className='d-flex justify-content-start bg-transparent fs-6 fw-bold my-2'>
        <span className='bg-transparent'>12k views</span> &nbsp; &nbsp; <span className='bg-transparent'>3 days ago</span>
      </span>

      <div className='bg-transparent overflow-hidden' 
      style={{fontSize: ''}}
      >
        <sapn className='bg-transparent' style={dynamicCSS()}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Ipsa suscipit possimus est accusamus voluptate fuga nisi provident dolor,
            non quasi, dignissimos vel eveniet ut repudiandae atque? Numquam quaerat dicta at
            incidunt aliquid voluptatum optio rem quam neque totam doloremque facere, recusandae
            minima ab quibusdam asperiores saepe! Eveniet suscipit a omnis explicabo molestias qui
            tempore culpa amet recusandae, quasi doloremque magni ipsam magnam quas voluptatum
            minima similique reiciendis voluptas excepturi provident optio repellendus. Assumenda,
            cumque nihil itaque veritatis sint, modi eligendi necessitatibus in eveniet natus
            perspiciatis officiis quas totam deserunt voluptates qui sapiente voluptas placeat!
            Enim eveniet aliquid nemo minima tenetur?
        </sapn>
        <span 
          className='bg-transparent text-primary'
        onClick={() => setShowMore(!showMore)}>{showMore ? "...More" : "Show less"}</span> 
        {/* </ShowMoreText> */}
      </div>

    </div>

  )
}
