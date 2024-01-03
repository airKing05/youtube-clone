import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import apiRequest from "../../api";
import { SELECTED_VIDEO_FAIL, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS } from "../constants/constants";

// console.log("saga od selected video")
async function getApiData(videoId){
    const res = await apiRequest('/videos', {
        params: {
            part: 'statistics,snippet',
            id: videoId
        }
    })
    console.log("singl vide request data",res)
    return res;
}
function* fetchSelectedVideoById(action){
    try {
        const video = yield call(getApiData, action.paylaod);
        put({ type: SELECTED_VIDEO_SUCCESS, paylaod: video[0] });
    } catch (error) {
        put({ type: SELECTED_VIDEO_FAIL, paylaod: error.message });
    }

}
function* selectedVideoByIdSaga(){
    yield takeLatest('SELECTED_VIDEO_REQUEST', fetchSelectedVideoById)
};

export default selectedVideoByIdSaga;


