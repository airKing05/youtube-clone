import videoDataSaga from "./videosSaga";
import mostPopularVideoSaga from "./mostPopulareVideosSaga";
import { all, fork } from "redux-saga/effects";
import videoCommentsSaga from "./videoCommnetsSaga";
import relatedVideosSaga from "./relatedVideosSaga";
import channelDetailsSaga from "./channelDetailsByChannelId";
import searchVideosSaga from "./searchVideosSaga";
import selectedVideoByVideoIdSaga from "./selectedVideoByIdSaga";
import channelVideosByChannelRelatedPlaylistUploadSaga from "./channelVideosByChannelRelatedPlaylistUploadSaga";
import categoryVideosSaga from "./categoryVideosSaga";
import authLoginSaga from "./auth.loginSaga";
import authLogOutSaga from "./auth.logoutSaga";
import subscriptionsOfAuthUserSaga from "./subscriptionsOfAuthUserSaga";


export default function* storeSaga(){
    yield all([
        // fork(videoDataSaga),
        fork(mostPopularVideoSaga),
        fork(categoryVideosSaga),
        fork(selectedVideoByVideoIdSaga),
        fork(videoCommentsSaga),
        fork(relatedVideosSaga),
        fork(channelDetailsSaga),
        fork(searchVideosSaga),
        fork(channelVideosByChannelRelatedPlaylistUploadSaga),
        fork(authLoginSaga),
        fork(authLogOutSaga),
        fork(subscriptionsOfAuthUserSaga),
    ])
}