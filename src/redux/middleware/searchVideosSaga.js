import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import apiRequest from "../../api";
import { GET_SEARCH_VIDEOS, SEARCH_VIDEOS_FAIL, SEARCH_VIDEOS_SUCCESS } from "../constants/constants";

async function getApiData(query) {
    const res = await apiRequest('/search', {
        params: {
            part: 'snippet',
            q: query,
            maxResults: 5,
            type: 'video' // 'channel'
        }
    })
    return res;
}

// getChannelDetails of first search result video
async function getApiDataForChannel(query) {
    const res = await apiRequest('/search', {
        params: {
            part: 'snippet',
            q: query,
            maxResults: 1,
            type: 'channel'
        }
    })
    return res;
}

function* fetchSearchVideos(action) {
    try {
        const { data } = yield call(getApiData, action.payload);
        const channelData = yield call(getApiDataForChannel, action.payload)
        yield put({ type: SEARCH_VIDEOS_SUCCESS, payload: [...channelData.data.items, ...data.items] });
    } catch (error) {
        yield put({ type: SEARCH_VIDEOS_FAIL, payload: error });
    }

}
function* searchVideosSaga() {
    yield takeLatest(GET_SEARCH_VIDEOS, fetchSearchVideos)
};

export default searchVideosSaga;


