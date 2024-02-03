import { call, put, takeLatest } from "redux-saga/effects";
import { GET_CHANNEL_SUBSCRIPTIONS_STATUS, SET_CHANNEL_SUBSCRIPTION_STATUS } from "../constants/constants";
import apiRequest from "../../api";

async function getApiData(fetchBy) {
  const { channelId, accessToken } = fetchBy;
  try {
    if (!accessToken) {
      return null;
    }

    const res = await apiRequest('/subscriptions', {
      params: {
        part: 'snippet,contentDetails',
        mine: true,
        forChannelId: channelId
      },
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    return res;
  } catch (error) {
    console.log("Error of API:", error)
  }
}

// this is worker saga
function* fetchSubscriptionStatusOfChannelByChannelId(action) {
  try {
    const { data } = yield call(getApiData, action.payload);
    yield put({ type: SET_CHANNEL_SUBSCRIPTION_STATUS, payload: data.items.length > 0 })
  } catch (error) {
    console.log("Error of fetch worker saga:", error)
  }
}

function* subscriptionStatusOfChannelByChannelIdSaga() {
  yield takeLatest(GET_CHANNEL_SUBSCRIPTIONS_STATUS, fetchSubscriptionStatusOfChannelByChannelId)
}

export default subscriptionStatusOfChannelByChannelIdSaga;