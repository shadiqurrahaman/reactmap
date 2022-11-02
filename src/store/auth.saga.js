
import { takeLatest, put, call } from "redux-saga/effects";
import {USER_LOGIN,REMOVE_USER_TOKEN} from './actions';
import authapi from "../api/authapi";
import history from '../history';
import { Children } from "react";


function userlogin(user){
  const data = authapi.login({email:user.email,password:user.password});
  return data;
}

function* getUserData(action) {
 
  try{
    const userdata = yield call(userlogin,action.user);
    yield put({ type: "SET_TOKEN_API", value:userdata.access_token});
    action.navigate('/homepage')
  }catch (e) {
    console.log(e);
  }
}
function logout(){
  return authapi.logout()
}
function* userlogout(action){
  // console.log('ok');
  yield call(logout);
  yield put({ type:"REMOVE_TOKEN"});
  action.navigate('/');
}


export function* authSaga() {
  yield takeLatest(USER_LOGIN, getUserData);
  yield takeLatest(REMOVE_USER_TOKEN,userlogout)
}



export default authSaga
