import React, {useState} from 'react'

function UseStateDemo() {
  const [name, setName] = useState("")
  const [number, setNumber] = useState(0)
  const [show, setShow] = useState(true)
  return (
    <div>
      <h4>Use State Demo</h4>
      <b>{name} </b>
      <input onChange={(e) => setName(e.target.value)} placeholder="Enter your name"/>
      <br/><br/>
      <b>{number} </b>
      <button onClick={() => setNumber(number + 1)}><b>Increment</b></button>
      <br/><br/>
      <b>{show && number} </b>
      <button onClick={() => {setNumber(number + 1); setShow(!show)}}><b>{show ? "Hide" : "Show"}</b></button>
      <br/><br/><hr/>
    </div>
  )
}

export default UseStateDemo