

import { HOME_VIDEOS_SUCCESS, HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST } from "../constants/constants";
import { takeEvery, put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import apiRequest from "../../api";

const KEY = process.env.REACT_APP_API_KEY || 'AIzaSyAvudCPRsAqikw6eTPHaPAi7fm29-aig-8';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';


// async function getApiData() {
//     const part = encodeURI('snippet,contentDetails,statistics');
//     const chart = 'mostPopular';
//     const regionCode = "IN";
//     const maxResults = 20;
//     const pageToken = ''    // right now dont have pagetoken bcoz first query
//     const url = `${BASE_URL}/videos?part=${part}&chart=${chart}&regionCode=${regionCode}&maxResults=${maxResults}&key=${KEY}`;
//     // https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY]

//     //const url = 'https://jsonplaceholder.typicode.com/users';
//     const videos =  await fetch(url).then(r => r.json());
//     return videos;
  
// }

async function getApiData() {
    const res = await apiRequest('/videos', {
        params: {
            part: 'snippet,contentDetails,statistics',
            chart: 'mostPopular',
            regionCode: 'IN',
            maxResults: 20,
            pageToken: ''
        }
    })
    console.log("resssssss", res.data)
    return res.data;
}

// this is worker saga
function* fetchVideosHome() {
    try {      
        const videos = yield call(getApiData);
        yield put({ type: HOME_VIDEOS_SUCCESS, payload: videos }); // videos: videos
    } catch (error) {
        yield put({ type: HOME_VIDEOS_FAIL, payload: error.message }); // message: videos
    }
}


// this is watcher saga
function* mostPopulareVideoSaga() {
    console.log("called mostPopulareVideoSaga ffff",)
    yield takeLatest('HOME_VIDEOS_REQUEST', fetchVideosHome);
    console.log("called mostPopulareVideoSaga",)
}


export default mostPopulareVideoSaga;