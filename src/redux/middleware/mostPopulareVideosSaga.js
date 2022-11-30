

import { HOME_VIDEOS_SUCCESS, HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST } from "../constants/constants";
import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";

const KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';


async function getApiData() {
    const part = encodeURI('snippet,contentDetails,statistics');
    const chart = 'mostPopular';
    const regionCode = "IN";
    const maxResults = 20;
    const pageToken = ''    // right now dont have pagetoken bcoz first query
    const url = `${BASE_URL}/videos?part=${part}&chart=${chart}&regionCode=${regionCode}&maxResults=${maxResults}&key=${KEY}`;
    // https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY]

    //const url = 'https://jsonplaceholder.typicode.com/users';
    const videos =  await fetch(url).then(r => r.json());
    // console.log("skjbvhfjbvjkd", videos)
    return videos;
    
}

function* fetchVideosHome() {
    try {      
        const videos = yield call(getApiData);
        yield put({ type: HOME_VIDEOS_SUCCESS, payload: videos }); // videos: videos
    } catch (error) {
        yield put({ type: HOME_VIDEOS_FAIL, paylaod: error.message }); // message: videos
    }
}


function* mostPopulareVideoSaga() {
    yield takeEvery(HOME_VIDEOS_REQUEST, fetchVideosHome);
}


export default mostPopulareVideoSaga;