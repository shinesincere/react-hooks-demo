import React, {useLayoutEffect, useEffect, useRef} from 'react'

function UseLayoutEffectDemo() {
  const commentRef = useRef(null)
  const onChange = (e) => {
    console.log(e.target.value)  // no value prop, all the typed letters, with value prop, one single letter
    console.log(commentRef.current.value)
  }
  useLayoutEffect(() => console.log(commentRef.current.value), [])  // good 
  useEffect(() => {  
    commentRef.current.value = 'great'
  }, [])  // next
  return (
    <div>
      <h4>Use Layout Effect Demo</h4>
      <input onChange={onChange} ref={commentRef} value='good' placeholder='Leave your comment here'/>
      <br/><br/><hr/>
    </div>
  )
}

export default UseLayoutEffectDemo