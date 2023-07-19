import React from 'react'
import { connect } from 'react-redux'
import {createActionDecrement, createActionIncrement, requestCounterFetching, setNumberAction} from './actions/actionCreator'

function Counter(props) {

    // const increment = () => {
    //     props.dispatch({type: 'COUNTER_PLUS'})
    // }

    // const decrement = () => {
    //     props.dispatch({type: 'COUNTER_MINUS'})
    // }
    console.log(props)
    const setNumber = ({target: {value}}) => {
      props.setNumberAction(value)
    }

    const buttonHandler = () => {
      props.requestCounterFetching(props.counter)
    }

  return (
    <>
    <h2>{props.counter}</h2>
    <button onClick={props.increment}>+</button>
    <button onClick={props.decrement}>-</button>
    <input type='number' onChange={setNumber}/>
    <button onClick={buttonHandler}>send to server</button>
    </>
  )
}

const mapStateToProps = (state) => {
    return state
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch(createActionIncrement()),
//         decrement: () => dispatch(createActionDecrement())
//     }
// }
const mapDispatchToProps = {
  increment: createActionIncrement,
  decrement: createActionDecrement,
  requestCounterFetching,
  setNumberAction
}

const WrappedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default WrappedCounter