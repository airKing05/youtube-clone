import { SEARCH_CHANNEL, SET_VIDEOS_LIST, VIDEOS_LIST } from "../constants/constants";
import { takeEvery, put } from "redux-saga/effects";

const KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

function* searchChannel(searchInput){
    const type = "video";
    const part = "snippet";
    let query = encodeURI(searchInput.payload).toLowerCase();
    let url = BASE_URL + "/search" + "?key=" + KEY + "&q=" + query + "&type=" + type + "&part=" + part
    console.log("URL ___________", url);
    let searchResult = yield fetch(url);
    searchResult = yield searchResult.json();
 
    yield put({ type: SET_VIDEOS_LIST, payload: searchResult.items })
}

function* videoDataSaga(){
    yield takeEvery(SEARCH_CHANNEL, searchChannel)
}

// function* searchProducts(searchItem) {
//     let searchResult = yield fetch(`http://localhost:3001/products?q=${searchItem.payload}`);
//     searchResult = yield searchResult.json();
//     console.log("api called in saga for searchResult", searchResult)
//     yield put({ type: SET_PRODUCT_LIST, payload: searchResult })
// }

// function* productSaga() {
//     yield takeEvery(PRODUCT_LIST, getProducts);
//     yield takeEvery(SEARCH_PRODUCT, searchProducts)
// };


export default videoDataSaga;