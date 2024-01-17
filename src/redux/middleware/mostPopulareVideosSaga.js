

import { HOME_VIDEOS_SUCCESS, HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST } from "../constants/constants";
import { put, call, takeLatest } from "redux-saga/effects";
import apiRequest from "../../api";


async function getApiData() {
    const res = await apiRequest('/videos', {
        params: {
            part: 'snippet,contentDetails,statistics',
            chart: 'mostPopular',
            regionCode: 'IN',
            maxResults: 5,
            pageToken: ''
        }
    })
    return res;
}

// this is worker saga
function* fetchVideosHome() {
    try {      
        const {data} = yield call(getApiData);
        yield put({ type: HOME_VIDEOS_SUCCESS, payload: { videos: data, activeCategory: 'all'} }); 
    } catch (error) {
        yield put({ type: HOME_VIDEOS_FAIL, payload: error.message });
    }
}


// this is watcher saga
function* mostPopularVideoSaga() {
    yield takeLatest(HOME_VIDEOS_REQUEST, fetchVideosHome);
}


export default mostPopularVideoSaga;