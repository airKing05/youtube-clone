import React, {useState} from 'react';
//import { DateTime } from "luxon";
import { UilCheckCircle } from '@iconscout/react-unicons';
import FavIcon from "./FavIcon";
import { addToFavourite, removeToFavourite } from "../redux/actions/favouriteActions";
import { useDispatch } from "react-redux";




export default function VideoCard1({ videoData, isDeleteActionEnabled }) {
    const KEY = process.env.REACT_APP_API_KEY;
    const BASE_URL = 'https://www.googleapis.com/youtube/v3';
    console.log("videoDatavideoDatavideoData", videoData);
    const { channelTitle, description, publishTime, thumbnails, title } = videoData.snippet;
    const videoId = videoData.id.videoId;
    const dispatch = useDispatch();
   //console.log(snippet)
    const [isAdded, setCount] = useState(true);
    const [stats, setStats] = useState({});
    const [color, setColor] = useState('');
    const [fav, setFav] = useState(false)
   
    const manageFavouriteVideo = (action_type) => {
        switch (action_type) {
            case 'ADD':
                dispatch(addToFavourite(videoData))
                break;
            case 'DELETE':
                dispatch(removeToFavourite(videoId))
                break;
            default:
                break;
        }
    }

    // get video statics
    const partVideo = "statistics";
    const videoDataApiUrl = BASE_URL + "/videos" + "?key=" + KEY + "&part=" + partVideo + "&id=" + videoId;
    console.log("videoDataApiUrl-------------", videoDataApiUrl)
    fetch(videoDataApiUrl).then(async (res) => {
        const data = await res.json();
        console.log(data);
        setStats(data);
    });



    return (
        <>
            <div className='row my-3'>
                <div className='col-md-4 position-relative'>
                    <img src={thumbnails.high.url} className='img-fluid' alt='thumbnail' />
                    <span className='position-absolute'  style={{ top: '1%', right: '5%' }}>
                        { isDeleteActionEnabled
                            ? <button onClick={() => manageFavouriteVideo('DELETE')}>remove</button>
                            :<button onClick={() => manageFavouriteVideo('ADD')}>add</button>
                        }
                        {/* <button onClick={() => dispatch(addToFavourit(snippet))}>add</button> */}
                     
                        {/* <FavIcon 
                        clickHandler={managerFavouriteVideo} 
                        bgColor={color}
                        /> */}
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
                            <h6 className='fs-6 fw-bolder'>{title}</h6>
                            <span>{channelTitle}</span> &#x2022;  <span>87K views</span> &#x2022; <span>1 day ago</span>
                        </div>
                    </div>
                   
                </div>
            </div>
           
            
        </>
    )
}
