
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import VideoCard2 from '../Components/videoCards/VideoCard2';
import VideoCard3 from '../Components/videoCards/VideoCard3';
import { getMostPopularVideos } from './../redux/actions/mostPopulareVideosAction';
import InfiniteScroll from 'react-infinite-scroll-component';
import HomeSkeletonCard from '../Components/skeletons/HomeSkeletonCard';
import Skeleton from 'react-loading-skeleton';



export default function Home() {
    const dispatch = useDispatch();

    const mostPopularVideos = useSelector((state) => state.mostPopularVideos);
    console.log("mostPopularVideos",mostPopularVideos)
    
    useEffect(() => {
        dispatch({ type: 'HOME_VIDEOS_REQUEST'});
    }, [dispatch]);

    const fetchData = () => {
        // dispatch(getMostPopularVideos());
        //loading logic
    };
    return (
        <div className='home-container'>
            <div style={{ height: '7.5vh' }}>
                <Navbar />
            </div>
            <div style={{ height: '92.5vh' }}>
                <Sidebar />
            </div>
            <div className='continaer home-video-container position-absolute '>
                <InfiniteScroll
                    dataLength={mostPopularVideos.videos.length}
                    next={fetchData}
                    hasMore={true}
                    loader={
                        <div className='spinner-border text-primary positon-absolute d-flex  top-100' style={{left: '40%'}}></div>
                    }
                    className="row"
                >
                    {
                        mostPopularVideos.loading ? 
                        [...Array(20)].map(() => <HomeSkeletonCard/>)  
                        : mostPopularVideos.videos.map((video) => <VideoCard2 key={video.id} videoData={video} />)
                    }
                </InfiniteScroll>
            </div>


        </div>
    )
}
