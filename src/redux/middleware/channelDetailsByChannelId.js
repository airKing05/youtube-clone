import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import apiRequest from "../../api";
import { CHANNEL_DETAILS_FAIL_OF_SELECTED_VIDEO, CHANNEL_DETAILS_SUCCESS_OF_SELECTED_VIDEO, GET_CHANNEL_DETAILS_OF_SELECTED_VIDEO } from "../constants/constants";

async function getApiData(channelId) {
    const res = await apiRequest('/channels', {
        params: {
            part: 'snippet,contentDetails,statistics',
            id: channelId
        }
    })
    return res;
}
function* fetchChannelDetailsByChannelId(action) {
    try {
        const {data} = yield call(getApiData, action.payload);
        yield put({ type: CHANNEL_DETAILS_SUCCESS_OF_SELECTED_VIDEO, payload: data.items[0]});
    } catch (error) {
        yield put({ type: CHANNEL_DETAILS_FAIL_OF_SELECTED_VIDEO, payload: 'error msg' });
    }

}
function* channelDetailsSaga() {
    yield takeLatest(GET_CHANNEL_DETAILS_OF_SELECTED_VIDEO, fetchChannelDetailsByChannelId)
};

export default channelDetailsSaga;


