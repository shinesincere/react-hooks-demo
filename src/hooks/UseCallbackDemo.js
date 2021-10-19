import React, {useCallback, useEffect, useState} from 'react';

function Child({getComment}) {
  useEffect(() => {
    console.log('function was called')
  }, [getComment]);   // dynamic data
  return (
    <div>{getComment('Amy')}</div>   // 'Amy' is given as a dynamic data
  );
}

function UseCallbackDemo() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Please subscribe to this channel!");
  const getComment = useCallback((name) => {
    return `${text} ${name}`;
  }, [text])  // to prevent redundant calls.

  return (
    <div>
      <h4>Use Callback Demo</h4>
      <Child getComment={getComment}/>
      <br/><br/>
      <button onClick={() => setShow(!show)}>{!show ? 'Show': 'Hide'}</button>
      {show && <b> Hi</b>}
      <br/><br/><hr/>
    </div>
  );
}

export default UseCallbackDemo;