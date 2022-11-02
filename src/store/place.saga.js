
import { takeLatest, put, call } from "redux-saga/effects";
import {GET_NEXT_PAGE_PLACE,GET_ALL_PLACE} from './actions';
import placeapi from "../api/placeapi";


function getplaceData(paginate){
  const data = placeapi.getPlace({item:paginate});
  return data;
}

function getPaginateData(url){
  const data = placeapi.placePaginate({url:url})
  return data
}

function* getallpage(action){
    const all_palce = yield call(getplaceData,action.item)
    yield put({type:"SET_PLACE_DATA",next_page:all_palce.next_page_url,previous_page:all_palce.prev_page_url,placedata:all_palce.data})
}


function* setnextpage(action) {
  try{

    const all_palce = yield call(getPaginateData,action.url);
    yield put({type:"SET_PLACE_DATA",next_page:all_palce.next_page_url,previous_page:all_palce.prev_page_url,placedata:all_palce.data})
    console.log(all_palce)
    
  }catch (e) {
    console.log(e);
  }
}




export function* placeSaga() {
  yield takeLatest(GET_NEXT_PAGE_PLACE, setnextpage);
  yield takeLatest(GET_ALL_PLACE, getallpage);
}



export default placeSaga