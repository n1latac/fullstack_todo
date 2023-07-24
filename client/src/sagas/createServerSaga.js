import {put} from 'redux-saga/effects'
import { exampleApi } from "../api/axios"
import {requestCounterSuccess, requestCounterError,
clickerErrorAction,clickerSuccessAction} from '../actions/actionCreator'

export function* createServerSaga(action){
    try {
        const result = yield exampleApi(action.counter)
        yield put(requestCounterSuccess(result))
    } catch (error) {
        yield put(requestCounterError(error))
    }
}

export function* clickerServerSaga(action){
    try {
        const result = yield exampleApi()
        yield put(clickerSuccessAction(result))
    } catch (error) {
        yield put(clickerErrorAction(error))
    }
}