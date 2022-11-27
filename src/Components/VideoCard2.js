import React from 'react';
import FavIcon from './FavIcon';

export default function VideoCard2() {
    return (
        <>
            <div className='col-md-3 col-ms-4 position-relative m-3' style={{maxWidth: '260px', padding: '1px'}}>
                <img src='https://bit.ly/3RwGiKD' className='img-fluid ' alt='thumbnail' style={{borderRadius: '12px' }} /> 
                <span className="position-absolute" style={{top: '1%', right: '7%'}}><FavIcon /></span> 
                    <div className='row my-auto mt-3 p-0'>
                    <div className='col-3'>
                        <img src='https://yt3.ggpht.com/FV96jtbTTM2lxPFUhwVRWxZXVn3vq8S8ucvgHTt-efT1C8PwI-jvguuLfjzadvkh00iks7l79tI=s68-c-k-c0x00ffffff-no-rj' className='img-fluid rounded-circle' alt='thumbnail' />
                        </div>
                    <div className='col-9 text-start text-muted '>
                        <h6 className='text-wrap fs-6' >Learn Data Structures and Algorithms </h6>
                        <span style={{ fontSize: '12px' }} className="pt-0 text-muted">Love Babbar</span> 
                        <div style={{ fontSize: '10px' }} ><span className="text-muted">87K views</span> &#x2022; <span className="text-muted">1 day ago</span></div> 
                        </div>
                    </div>               
            </div>
        </>
    )
}
