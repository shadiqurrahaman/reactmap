import { all } from 'redux-saga/effects';
import authSaga from './auth.saga';
import placeSaga from './place.saga';


export default function* rootSaga(){
    yield all([authSaga(),placeSaga()])
}