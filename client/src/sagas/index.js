import {takeLatest} from 'redux-saga/effects'
import ACTION_TYPES from '../actions/actionTypes'
import {createServerSaga, clickerServerSaga} from './createServerSaga'

export function* rootSaga(){
    yield takeLatest(ACTION_TYPES.REQUEST_COUNTER_FETCHING, createServerSaga)
    yield takeLatest(ACTION_TYPES.CLICKER_FETCHING,clickerServerSaga)
}