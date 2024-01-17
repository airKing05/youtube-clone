

import { GET_VIDEOS_BY_CATEGORY, HOME_VIDEOS_SUCCESS, HOME_VIDEOS_FAIL } from "../constants/constants";
import { put, call, takeLatest } from "redux-saga/effects";
import apiRequest from "../../api";


async function getApiData(keyword) {
    const res = await apiRequest('/search', {
        params: {
            part: 'snippet',
            q: keyword,
            type: 'video',
            maxResults: 5,
            pageToken: '',
        }
    })
    return res;
}

// this is worker saga
function* fetchCategoryVideos(action) {
    try {
        const { data } = yield call(getApiData, action.payload);
        yield put({ type: HOME_VIDEOS_SUCCESS, payload: { videos: data, activeCategory: action.payload }}); 
    } catch (error) {
        yield put({ type: HOME_VIDEOS_FAIL, payload: error.message });
    }
}


// this is watcher saga
function* categoryVideosSaga() {
    yield takeLatest(GET_VIDEOS_BY_CATEGORY, fetchCategoryVideos);
}


export default categoryVideosSaga;