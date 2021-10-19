import React, {useRef} from 'react'

function UseRefDemo() {
  const nameRef = useRef(null)
  const onChange = (e) => {
    console.log(e.target.value)
    console.log(nameRef.current.value)
  }
  const onClick = () => {
    console.log(nameRef.current.value)
    nameRef.current.value = ''
    nameRef.current.focus()
  }
  return (
    <div>
      <h4>Use Ref Demo</h4>
      <input onChange={onChange} ref={nameRef} placeholder='Enter your name here'/>
      <button onClick={onClick}><b>Submit</b></button>
      <br/><br/><hr/>
    </div>
  )
}


export default UseRefDemo