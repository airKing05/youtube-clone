import React from 'react';
//import { DateTime } from "luxon";
import { UilCheckCircle } from '@iconscout/react-unicons';
import FavIcon from "./FavIcon";



export default function VideoCard1({snippet}) {
    const { channelTitle, description, publishTime, thumbnails, title } = snippet;

   // const day = DateTime.now().diff(DateTime.local(1982, 5, 25), ['days', 'hours'])
   // console.log("day")
    return (
        <>
            <div className='row my-3'>
                <div className='col-md-4 position-relative'>
                    <img src={thumbnails.high.url} className='img-fluid' alt='thumbnail' />
                    <span className='position-absolute' style={{ top: '1%', right: '5%' }}>
                        <FavIcon/>
                    </span>
                </div>
                <div className='col-md-8 text-start d-none d-md-block'>
                    <h4 className='fs-5 fw-bolder'>{title}</h4>

                    <div className='text-muted '>
                        <span>87K views</span> &#x2022; <span>1 day ago</span>
                    </div>
                    <div className='text-muted '>
                        <img src='https://bit.ly/3RwGiKD' className='img-fluid rounded-circle' style={{ maxWidth: '30px', height: '30px' }} alt='thumbnail' /> &nbsp;
                        <span>{channelTitle}</span> &nbsp;
                        <span><UilCheckCircle size={18} /></span>
                    </div>
                    <div className=''>
                        <p className='fs-6 normal text-wrap text-muted'>{description}</p>
                    </div>
                </div>
                <div className='col-md-8 d-block d-md-none mt-3'>
                    <div className='row my-auto'>
                        <div className='col-2' >
                            <img src='https://bit.ly/3RwGiKD' className='img-fluid rounded-circle' style={{ maxWidth: '50px', height: '50px' }} alt='thumbnail' />
                        </div>
                        <div className='col-10 text-start text-muted'>
                            <h6 className='fs-6 fw-bolder'>{description}</h6>
                            <span>{channelTitle}</span> &#x2022;  <span>87K views</span> &#x2022; <span>1 day ago</span>
                        </div>
                    </div>
                   
                </div>
            </div>
           
            
        </>
    )
}
