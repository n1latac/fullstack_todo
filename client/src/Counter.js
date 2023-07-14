import React from 'react'
import { connect } from 'react-redux'
import {createActionDecrement, createActionIncrement} from './actions/actionCreator'

function Counter(props) {

    // const increment = () => {
    //     props.dispatch({type: 'COUNTER_PLUS'})
    // }

    // const decrement = () => {
    //     props.dispatch({type: 'COUNTER_MINUS'})
    // }
    console.log(props)

  return (
    <>
    <h2>{props.counter}</h2>
    <button onClick={props.increment}>+</button>
    <button onClick={props.decrement}>-</button>
    </>
  )
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(createActionIncrement()),
        decrement: () => dispatch(createActionDecrement())
    }
}

const WrappedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default WrappedCounter