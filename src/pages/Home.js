
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import VideoCard2 from '../Components/VideoCard2';
import { getMostPopularVideos } from './../redux/actions/mostPopulareVideosAction';


export default function Home() {
    const dispatch = useDispatch();

    const mostPopularVideos = useSelector((state) => state.mostPopularVideos);
    console.log("mostPopularVideos",mostPopularVideos)
    useEffect(() => {
        dispatch(getMostPopularVideos());
    }, [dispatch]);
    
    return (
        <div className='overflow-hidden'> 
            <div style={{ height: '7.5vh' }}>
                <Navbar />
            </div>
            <div style={{ height: '92.5vh' }}>
                <Sidebar /> 
            </div>
            <div className='continaer home-video-container position-absolute row'>
                {
                   mostPopularVideos.loading ? "DATA FATCHING" : mostPopularVideos.videos.map((video) => <VideoCard2 key={video.id} videoData = {video}/>) 
                } 
            </div>  
        </div>
    )
}
