

import { SUBSCRIPTIONS_REQUEST, SUBSCRIPTIONS_SUCCESS, SUBSCRIPTIONS_FAIL, GET_SUBSCRIPTIONS } from "../constants/constants";
import { put, call, takeLatest } from "redux-saga/effects";
import apiRequest from "../../api";


async function getApiData(accessToken) {
    try {
        if (!accessToken) {
            return null;
        }

        const res = await apiRequest('/subscriptions', {
            params: {
                part: 'snippet,contentDetails',
                mine: true
            },
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return res;
    } catch (error) {
        console.error("Error fetching data:", error.response ? error.response.data : error.message);
        return null;
    }
}

// this is worker saga
function* fetchSubscriptionsOfAuthUser(action) {
    try {
        yield put({ type: SUBSCRIPTIONS_REQUEST});
        const { data } = yield call(getApiData, action.payload);
        yield put({
            type: SUBSCRIPTIONS_SUCCESS, payload: data.items });
    } catch (error) {
        yield put({ type: SUBSCRIPTIONS_FAIL, payload: error });
    }
}


// this is watcher saga
function* subscriptionsOfAuthUserSaga() {
    yield takeLatest(GET_SUBSCRIPTIONS, fetchSubscriptionsOfAuthUser);
}


export default subscriptionsOfAuthUserSaga;