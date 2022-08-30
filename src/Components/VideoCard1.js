import React, {useEffect, useState} from 'react';
//import { DateTime } from "luxon";
import { UilCheckCircle } from '@iconscout/react-unicons';
import FavIcon from "./FavIcon";
import { addToFavourite, removeToFavourite } from "../redux/actions/favouriteActions";
import { useDispatch } from "react-redux";
import { UilHeartAlt } from '@iconscout/react-unicons';




export default function VideoCard1({ videoData, isDeleteActionEnabled }) {
    const [statistics, setStatistics] = useState({});

    
    //console.log("videoDatavideoDatavideoData", videoData);

    const { channelTitle, description, publishTime, thumbnails, title } = videoData.snippet;
    const videoId = videoData.id.videoId;
    const dispatch = useDispatch();

  
    useEffect(() => {
        getStatistics()
    }, [videoData])


    // get video statics
    function getStatistics() {
        const KEY = process.env.REACT_APP_API_KEY;
        const BASE_URL = 'https://www.googleapis.com/youtube/v3';
        const partVideo = "statistics";
        const videoDataApiUrl = BASE_URL + "/videos" + "?key=" + KEY + "&part=" + partVideo + "&id=" + videoId;
        //console.log("videoDataApiUrl-------------", videoDataApiUrl)
        fetch(videoDataApiUrl).then(async (res) => {
            const data = await res.json();
            setStatistics(data.items[0].statistics)
        });
    }
   

    let dataToFav = [{statistics, videoData}];
    //console.log("dataToFav", dataToFav)
    const manageFavouriteVideo = (action_type) => {
        switch (action_type) {
            case 'ADD':
                dispatch(addToFavourite(dataToFav ))
                //dispatch(addToFavourite(statistics))
                break;
            case 'DELETE':
                dispatch(removeToFavourite(videoId))
                break;
            default:
                break;
        }
    }

 
//console.log("stasjafhcnsuifhgks ljgiehvs", statistics)
   
    return (
        <>
            <div className='row my-3'>
                <div className='col-md-4 position-relative'>
                    <img src={thumbnails.high.url} className='img-fluid' alt='thumbnail' />
                    <span className='position-absolute'  style={{ top: '3%', right: '6%' }}>
                        { isDeleteActionEnabled
                            ? <button  className='btn btn-danger  ' onClick={() => manageFavouriteVideo('DELETE')}>Remove</button>
                            : <button className='btn btn-success ' onClick={() => manageFavouriteVideo('ADD')}>Add</button>
                        }
                    </span>
                </div>
                <div className='col-md-8 text-start d-none d-md-block'>
                   
                    <h4 className='fs-5 fw-bolder'>{title}</h4>

                    <div className='text-muted '>
                        <span>{(statistics.viewCount) / 1000}K Views</span> &#x2022; <span>{(statistics.likeCount) / 1000} Likes</span> &#x2022; <span>{(statistics.commentCount)} Comments</span>
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
                            <h6 className='fs-6 fw-bolder'>{title}</h6>
                            <span>{channelTitle}</span> &#x2022;  <span>{(statistics.viewCount) / 1000}K Views</span> &#x2022; <span>{(statistics.likeCount) / 1000} Likes</span> &#x2022; <span>{(statistics.commentCount)} Comments</span>
                        </div>
                    </div>
                   
                </div>
            </div>
           
            
        </>
    )
}
