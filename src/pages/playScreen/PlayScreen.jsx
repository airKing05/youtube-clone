import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import apiRequest from '../../api';
import ChannelLinks from '../../Components/channel/ChannelLinks';
import Comments from '../../Components/comments/Comments';
import Navbar from '../../Components/Navbar';
import VideoCardHorizontal from '../../Components/videoCards/VideoCardHorizontal';
import VideoMetaData from '../../Components/videoMetaData/VideoMetaData';
import { getVideoById } from '../../redux/actions/mostPopulareVideosAction';
import { GET_RELATED_VIDEOS_OF_SELECTED_VIDEO } from '../../redux/constants/constants';
import HomeSkeletonCard from '../../Components/skeletons/HomeSkeletonCard';

export default function PlayScreen() {
    const [videoDataById, setVideoDataById] = useState(null);

    const { id } = useParams();
    const { state } = useLocation();

    const { relatedVideos, loading, error } = useSelector(state => state.relatedVideos);

    const dispatch = useDispatch();
    // useEffect(()=>{dispatch(getVideoById(id))}, [id, dispatch]);

    async function getVideoMoreDetails() {
        const res = await apiRequest('/videos', {
            params: {
                part: 'snippet,statistics',
                id: id
            }
        });
        setVideoDataById(res.data.items[0])
    }


    // useEffect(() => {
    //     getVideoMoreDetails()
    // }, [id])


    // for the related videos
    const currentVideoChannelId = state?.channelData?.id
    useEffect(() => {
        dispatch({
            type: GET_RELATED_VIDEOS_OF_SELECTED_VIDEO, payload: currentVideoChannelId
        })
    }, [id])

    return (
        <React.Fragment>
                <div className='row m-2 gap-0'>
                    <div className='col-md-8  p-0'>
                        <div className='mb-2' style={{ width: '100%', height: '70vh' }}>
                            <iframe
                                src={`https://www.youtube.com/embed/${id}`}
                                width="100%"
                                height="100%"
                                allowFullScreen
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                frameBorder='0'
                                title="abcd" >
                            </iframe>
                        </div>
                        {/* <h5>{videoDataById && videoDataById.snippet?.title}</h5> */}
                        <ChannelLinks
                            channelData={state.channelData}
                            channelDataLoading={state.channelDataLoading}
                            videoDataLoading={state.videoDataLoading}
                            videoData={state.videoData}
                            loading={loading}
                        />
                        <VideoMetaData
                            videoData={state.videoData}
                            loading={loading}
                        />
                        <Comments
                            videoData={state.videoData}
                            videoId={id}
                            loading={loading}
                        />
                    </div>
                    <div className='col-md-4 p-0'>
                        {
                            !loading ? relatedVideos.map((video, index) => <React.Fragment key={video.id.videoId}>
                                <VideoCardHorizontal videoData={video} />
                            </React.Fragment>)
                                : [...Array(20).fill(0)].map((_, index) => {
                                    return <React.Fragment key={index}>
                                        <HomeSkeletonCard />
                                    </React.Fragment>
                                })
                        }
                    </div>
                </div>
        </React.Fragment>
    )
}
