import React,{ useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import apiRequest from '../../api';
import ChannelLinks from '../../Components/channel/ChannelLinks';
import Comments from '../../Components/comments/Comments';
import Navbar from '../../Components/Navbar';
import VideoCardHorizonatal from '../../Components/videoCards/VideoCardHorizonatal';
import VideoMetaData from '../../Components/videoMetaData/VideoMetaData';
import { getVideoById } from '../../redux/actions/mostPopulareVideosAction';

export default function PlayScreen() {
    const [videoDataById, setVideoDataById] = useState('');
   
    const{ id } = useParams();

    const dispatch = useDispatch();
    useEffect(()=>{dispatch(getVideoById(id))}, [id, dispatch]);

    async function getVideoMoreDetails( ){
     const res = await apiRequest('/videos',  {
         params: {
             part: 'snippet,statistics',
             id: id
         }
     });
        setVideoDataById(res.data.items[0])
       // console.log("ressssss", res.data.items[0])
    }

//     const { snippet: { channelTitle, description, localized: { title } }, statistics: { commentCount, viewCount, likeCount }} = videoDataById;
  //console.log("kjafbgjknk", videoDataById)
    useEffect(()=>{
getVideoMoreDetails()
    }, [id])
    return (
        <div>
            <Navbar />
            <div className='m-4'>
                <div className='row m-2'>
                    <div className='col-md-8  p-0'>
                        <div className='mb-2' style={{width: '100%', height: '70vh'}}> 
                            <iframe
                                src={`https://www.youtube.com/embed/${id}`}
                                width="100%" 
                                height="100%"
                                allowFullScreen
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                frameBorder='0'
                                title={videoDataById && videoDataById.snippet?.title} >
                            </iframe>
                        </div>
                        <h5>this is tit</h5>
                        <ChannelLinks videoDataById={videoDataById && videoDataById}  />
                        <VideoMetaData videoDataById={videoDataById && videoDataById} />
                        <Comments videoDataById={videoDataById && videoDataById} />
                    </div>
                    <div className='col-md-4 p-0'>
                        {
                            [...Array(20)].map(() => <VideoCardHorizonatal/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
