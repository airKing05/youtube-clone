import React from 'react';
import FavIcon from './FavIcon';

export default function VideoCard2() {
    return (
        <>
            <div className='col-lg-2 col-md-3 col-ms-4 position-relative'>
                <img src='https://bit.ly/3RwGiKD' className='img-fluid ' alt='thumbnail' /> 
                <span className="position-absolute" style={{top: '1%', right: '7%'}}><FavIcon /></span> 
                    <div className='row my-auto'>
                        <div className='col-10 text-start text-muted'>
                        <h6 className='fs-6 fw-bolder text-wrap' style={{}}>Learn Data Structures and Algorithms as Absolute Beginner to Advanced!</h6>
                            <span>Love Babbar</span> &#x2022;  <span>87K views</span> &#x2022; <span>1 day ago</span>
                        </div>
                    </div>               
            </div>
        </>
    )
}
