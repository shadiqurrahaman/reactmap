
import { takeLatest, put, call } from "redux-saga/effects";
import {USER_LOGIN} from './actions';

function* getUserData(action) {
  try{
    yield put({ type: "SET_TOKEN_API", value:action.token});
  }catch (e) {
    console.log(e);
  }
}

export function* loginSaga() {
  yield takeLatest(USER_LOGIN, getUserData);
}



export default loginSaga
