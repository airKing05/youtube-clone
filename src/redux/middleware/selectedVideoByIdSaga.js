import { call, put, takeEvery } from "redux-saga/effects";
import apiRequest from "../../api";
import { SELECTED_VIDEO_FAIL, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS } from "../constants/constants";

async function getApiData(){
    const res = await apiRequest('/videos', {
        params: {
            part: 'statistics,snippet',
            // id: id
        }
    })
    console.log(res)
    return res;
}
function* fetchSelectedVideoById(){
    try {
        const video = yield call(getApiData);
        put({ type: SELECTED_VIDEO_SUCCESS, paylaod: video[0] });
    } catch (error) {
        const video = yield call(getApiData);
        put({ type: SELECTED_VIDEO_FAIL, paylaod: error.message });
    }

}
function* selectedVideoByIdSaga(){
    takeEvery({type: SELECTED_VIDEO_REQUEST, fetchSelectedVideoById})
};

export default selectedVideoByIdSaga;


