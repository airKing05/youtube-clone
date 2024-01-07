import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import apiRequest from "../../api";
import { COMMENTS_FAIL_OF_SELECTED_VIDEO, COMMENTS_SUCCESS_OF_SELECTED_VIDEO, SELECTED_VIDEO_FAIL, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS } from "../constants/constants";

// console.log("saga od selected video")
async function getApiData(videoId) {
    const res = await apiRequest('/commentThreads', {
        params: {
            part: 'snippet',
            videoId
        } 
    })
    return res;
}
function* fetchVideoCommentsByVideoId(action) {
    try {
     const {data} = yield call(getApiData, action.payload);
        yield put({ type: COMMENTS_SUCCESS_OF_SELECTED_VIDEO, payload: data.items});
    } catch (error) {
      yield  put({ type: COMMENTS_FAIL_OF_SELECTED_VIDEO, payload: 'error msg' });
    }

}
function* videoCommentsSaga() {
    yield takeLatest('GET_COMMENTS_OF_SELECTED_VIDEO', fetchVideoCommentsByVideoId)
};

export default videoCommentsSaga;


