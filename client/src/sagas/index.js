import {takeLatest} from 'redux-saga/effects'
import ACTION_TYPES from '../actions/actionTypes'
import {createServerSaga} from './createServerSaga'

export function* rootSaga(){
    yield takeLatest(ACTION_TYPES.REQUEST_COUNTER_FETCHING, createServerSaga)
}