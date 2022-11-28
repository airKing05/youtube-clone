import moment from 'moment';
import numeral from 'numeral';
import React, { useState, useEffect } from 'react';
import apiRequest from '../../api';
import FavIcon from '../FavIcon';

export default function VideoCard3() {
    

    return (
        <>
            <div className='col-md-3 col-ms-4 position-relative m-3' style={{ maxWidth: '260px', padding: '1px' }}>
                <img src="https://i.ytimg.com/vi/JtYeYWz5RNA/mqdefault.jpg" className='img-fluid ' alt='thumbnail' style={{ borderRadius: '12px' }} />
                <span className='bg-dark px-1 position-absolute rounded' style={{ top: '50%', right: '2%', fontSize: '12px' }}>00:12</span>
                <span className="position-absolute" style={{ top: '1%', right: '7%' }}><FavIcon /></span>
                <div className='row my-auto mt-3 p-0'>
                    <div className='col-3 '>
                        <img src=
                            "https://yt3.ggpht.com/-4VBFNQzTghiJUwOn6-XcRqnBZxeCr0E-l6JgkE_W5WBn_N_7FGojA192b3Sgj5BJOiPquxNQGY=s88-c-k-c0x00ffffff-no-rj" 
                            className='img-fluid rounded-circle' alt='thumbnail' />
                    </div>
                    <div className='col-9 text-start text-muted '>
                        <h6 className='text-wrap fs-6' >ye title hai </h6>
                        <span style={{ fontSize: '12px' }} className="pt-0 text-muted">Love babbar</span>
                        <div style={{ fontSize: '10px' }} ><span className="text-muted">12k views</span> &#x2022; <span className="text-muted">1 day ago</span></div>
                    </div>
                </div>
            </div>
        </>
    )
};