import ACTION_TYPES from './actionTypes'


export const createActionIncrement = () => {
    return ({
        type: ACTION_TYPES.INCREMENT
    })
}
export const createActionDecrement = () => {
    return ({
        type: ACTION_TYPES.DECREMENT
    })
}
export const setNumberAction = (value) => {
    return({
        type: ACTION_TYPES.SET_NUMBER,
        value: value
    })
}
export const requestCounterFetching = (counter) => {
    return ({
        type: ACTION_TYPES.REQUEST_COUNTER_FETCHING,
        counter
    })
}
export const requestCounterSuccess = (data) => {
    return ({
        type: ACTION_TYPES.REQUEST_COUNTER_SUCCESS,
        data
    })
}
export const requestCounterError = (error) => {
    return ({
        type: ACTION_TYPES.REQUEST_COUNTER_ERROR,
        error
    })
}
