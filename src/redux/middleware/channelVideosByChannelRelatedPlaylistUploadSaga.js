import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import apiRequest from "../../api";
import { CHANNEL_VIDEOS_FAIL, CHANNEL_VIDEOS_SUCCESS, GET_CHANNEL_VIDEOS} from "../constants/constants";

async function getApiData(playlistId) {
    const res = await apiRequest('/playlistItems', {
        params: {
            part: 'contentDetails, snippet',
            playlistId,
            maxResults: 5
        }
    })
    return res;
}

function* fetchChannelVideos(action) {
    try {
        const { data } = yield call(getApiData, action.payload);
        yield put({ type: CHANNEL_VIDEOS_SUCCESS, payload: data.items });
    } catch (error) {
        yield put({ type: CHANNEL_VIDEOS_FAIL, payload: error });
    }

}
function* channelVideosByChannelRelatedPlaylistUploadSaga() {
    yield takeLatest(GET_CHANNEL_VIDEOS, fetchChannelVideos)
};

export default channelVideosByChannelRelatedPlaylistUploadSaga;


