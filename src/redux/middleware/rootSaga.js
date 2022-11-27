import videoDataSaga from "./videosSaga";
import mostPopulareVideoSaga from "./mostPopulareVideosSaga";
import { all, fork } from "redux-saga/effects";


export default function* storeSaga(){
    yield all([
        fork(videoDataSaga),
        fork(mostPopulareVideoSaga)
    ])
}