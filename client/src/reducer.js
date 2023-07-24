import ACTION_TYPES from './actions/actionTypes'

const initialState = {
    counter: 0,
    number: 0,
    isLoading: false,
    serverResponse: null,
    error: null
}

const reducer = (state = initialState, action) => {
    console.log(state, action)
    switch(action.type){
        case ACTION_TYPES.INCREMENT: {
            return {
                ...state,
                counter: state.counter + Number(state.number)
            }
        }
        case ACTION_TYPES.DECREMENT : {
            return {
                ...state,
                counter: state.counter - Number(state.number)
            }
        }
        case ACTION_TYPES.SET_NUMBER: {
            console.log(action)
            return{
                ...state,
                number: action.value,    
            }
        }
        case ACTION_TYPES.REQUEST_COUNTER_FETCHING: {
            return{
                ...state,
                isLoading: true,
            }
        }
        case ACTION_TYPES.REQUEST_COUNTER_SUCCESS: {
            const {data} = action
            return{
                ...state,
                serverResponse: data
            }
        }
        case ACTION_TYPES.REQUEST_COUNTER_ERROR: {
            const {error} = action
            return{
                ...state,
                error
            }
        }
        case ACTION_TYPES.CLICKER_FETCHING: {
            return{
                ...state,
                isLoading: true
            }
        }
        case ACTION_TYPES.CLICKER_SUCCESS: {
            const {data} = action
            return{
                ...state,
                serverResponse: data
            }
        }
        case ACTION_TYPES.CLICKER_ERROR: {
            const {error} = action
            return{
                ...state,
                error
            }
        }
        default: {
            return state
        }
    }
}

export default reducer
