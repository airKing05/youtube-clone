import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import apiRequest from "../../api";
import { GET_SELECTED_VIDEO, SELECTED_VIDEO_FAIL, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS } from "../constants/constants";

// console.log("saga od selected video")
async function getApiData(videoId){
    const res = await apiRequest('/videossss', {
        params: {
            part: 'snippet,contentDetails,statistics',
            id: videoId
        }
    })
  
    return res;
}
function* fetchSelectedVideoByVideoId(action){
    try {
        const { data } = yield call(getApiData, action.payload);
        yield put({ type: SELECTED_VIDEO_SUCCESS, payload: data.items[0] });
    } catch (error) {
        yield put({ type: SELECTED_VIDEO_FAIL, payload: error.message });
    }

}
function* selectedVideoByVideoIdSaga(){
    yield takeLatest(GET_SELECTED_VIDEO, fetchSelectedVideoByVideoId)
};

export default selectedVideoByVideoIdSaga;


