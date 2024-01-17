import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import apiRequest from "../../api";
import { GET_RELATED_VIDEOS_OF_SELECTED_VIDEO, RELATED_VIDEOS_FAIL_OF_SELECTED_VIDEO, RELATED_VIDEOS_SUCCESS_OF_SELECTED_VIDEO} from "../constants/constants";

// console.log("saga od selected video")
async function getApiData(channelId) {
    // now we are using the another approch, will show the random videos of current playing videos channel
    const res = await apiRequest('/search', {
        params: {
            part: 'snippet',
            // relatedToVideoId: videoId,
            channelId,
            maxResults: 5,
            type: 'video'   
        }
    })
    return res;
}
function* fetchRelatedVideosByVideoId(action) {
    try {
        const {data} = yield call(getApiData, action.payload);
        yield put({ type: RELATED_VIDEOS_SUCCESS_OF_SELECTED_VIDEO, payload: data.items });
    } catch (error) {
        yield put({ type: RELATED_VIDEOS_FAIL_OF_SELECTED_VIDEO, payload: error.message });
    }
}
function* relatedVideosSaga() {
    yield takeLatest(GET_RELATED_VIDEOS_OF_SELECTED_VIDEO, fetchRelatedVideosByVideoId)
};

export default relatedVideosSaga;


