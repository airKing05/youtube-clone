import videoDataSaga from "./videosSaga";
import mostPopulareVideoSaga from "./mostPopulareVideosSaga";
import { all, fork } from "redux-saga/effects";
import selectedVideoByIdSaga from "./selectedVideoByIdSaga";


export default function* storeSaga(){
    yield all([
        // fork(videoDataSaga),
        fork(mostPopulareVideoSaga),
        fork(selectedVideoByIdSaga)
    ])
}