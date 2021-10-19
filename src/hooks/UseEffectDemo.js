import React, {useEffect, useState} from 'react'
import axios from 'axios'

function UseEffectDemo() {
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState(0)
  useEffect(() => axios
  .get('https://jsonplaceholder.typicode.com/comments')
  .then(resp => {
    setEmail(resp.data[0]['email'])
    console.log("API was called")
  }), [])  // for static data   // }), [number]) for dynamic data 
 
  return (
    <div>
      <h4>Use Effect Demo</h4>
      <b>{email}</b>
      <br/><br/>
      <b>{number} </b> 
      <button onClick={() => setNumber(number+1)}><b>Click</b></button>
      <br/><br/><hr/>
    </div>
  )
}


export default UseEffectDemo