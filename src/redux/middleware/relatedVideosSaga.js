import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import apiRequest from "../../api";
import { GET_RELATED_VIDEOS_OF_SELECTED_VIDEO, RELATED_VIDEOS_FAIL_OF_SELECTED_VIDEO, RELATED_VIDEOS_SUCCESS_OF_SELECTED_VIDEO} from "../constants/constants";

// console.log("saga od selected video")
async function getApiData(videoId) {
    const res = await apiRequest('/search', {
        params: {
            part: 'snippet',
            relatedToVideoId: videoId,
            maxResults: 15,
            type: 'video'   
        }
    })
    console.log("res res rres", )
    return res;
}
function* fetchRelatedVideosByVideoId(action) {
    console.log("videoId", action.payload)
    try {
        const res = yield call(getApiData, action.payload);
        console.log("related videos called", res)
        yield put({ type: RELATED_VIDEOS_SUCCESS_OF_SELECTED_VIDEO, payload: ['VIDEOS'] });
    } catch (error) {
        yield put({ type: RELATED_VIDEOS_FAIL_OF_SELECTED_VIDEO, payload: 'error msg' });
    }
}
function* relatedVideosSaga() {
    yield takeLatest(GET_RELATED_VIDEOS_OF_SELECTED_VIDEO, fetchRelatedVideosByVideoId)
};

export default relatedVideosSaga;


