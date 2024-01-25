

import {LOGOUT_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "../constants/constants";
import { put, call, takeLatest } from "redux-saga/effects";

import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";

async function asyncSignOut(){
    try {
        const res = await signOut(auth);
        console.log("res", res);
        return res;
    } catch (error) {
        console.error("Error during sign out:", error);
        throw error; // Rethrow the error to be caught by the saga
    }
}

function* signOutFromGoogle(){
    try {
        const result = yield call(asyncSignOut);
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