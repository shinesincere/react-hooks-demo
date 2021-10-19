import React, {useReducer} from 'react'

function UseReducerDemo() {
  const reducer = (state, action) => {
    switch(action.type) {
      case "INCREMENT": 
        return {number: state.number + 1, show: state.show}
      case "TOGGLE":    
        return {number: state.number, show: !state.show}
      default:
        return state  
    }
  }
  const [state, dispatch] = useReducer(reducer, {number: 0, show: true})
  return (
    <div>
      <h4>Use Reducer Demo</h4>
      <b>{state.show && state.number} </b> 
      <button onClick={() => {dispatch({type: "INCREMENT"}); dispatch({type: "TOGGLE"})}}><b>Change</b></button>
      <br/><br/><hr/>
    </div>
  )
}

export default UseReducerDemo