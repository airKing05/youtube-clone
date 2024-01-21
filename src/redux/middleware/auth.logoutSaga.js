

import {LOGOUT_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "../constants/constants";
import { put, call, takeLatest } from "redux-saga/effects";

import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";


function* signOutFromGoogle(){
    try {
        const result = yield call(signOut, auth);
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('userData');
        yield put({ type: LOGOUT_SUCCESS })
    } catch (error) {
        yield put({ type: LOGOUT_FAIL, payload: error })
    }
}


// this is watcher saga
function* authLogOutSaga() {
    yield takeLatest(LOGOUT_REQUEST, signOutFromGoogle);
}

export default authLogOutSaga;