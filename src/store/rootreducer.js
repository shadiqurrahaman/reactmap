import authreducer from './auth.reducer';
import Placereducer from './place.resucer';
import { combineReducers } from 'redux';

export default combineReducers({
    auth:authreducer,
    place:Placereducer
})