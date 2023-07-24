import React from 'react'
import { connect } from 'react-redux'
import {clickerFetchingAction} from './actions/actionCreator'

function Clicker(props) {

    const clickHandler = () => {
        props.clickerFetchingAction()
    }


  return (
    <div style={{width: '100px', height: '100px', backgroundColor: 'red'}} onClick={clickHandler}>
        <p>Click me</p>
    </div>
  )
}

const mapDispatchToProps = {
    clickerFetchingAction
}

const WrappedClicker = connect(null, mapDispatchToProps)(Clicker)

export default WrappedClicker