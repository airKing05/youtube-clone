

import { GET_LOGIN, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants/constants";
import { put, call, takeLatest } from "redux-saga/effects";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase";


async function getDataFromGoogleSignIn(){
    try {
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')
        const result = await signInWithPopup(auth, provider);
        return { result, provider }
    } catch (error) {
        console.log("ERROR:", error)
    }
   
}

function* signInWithGoogle(){
    try {
        yield put({ type: LOGIN_REQUEST })
        const { result, provider } = yield call(getDataFromGoogleSignIn)
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // need to check the logic of scope
        const token = credential.accessToken;
        const user = result.user;
        yield put({ type: LOGIN_SUCCESS, payload: { token, user }})
        sessionStorage.setItem('accessToken', token);
        sessionStorage.setItem('userData', JSON.stringify(user));
        
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        yield put({ type: LOGIN_FAIL, payload: errorMessage })
    }
}

// this is watcher saga
function* authLoginSaga() {
    yield takeLatest(GET_LOGIN, signInWithGoogle);
}


export default authLoginSaga;