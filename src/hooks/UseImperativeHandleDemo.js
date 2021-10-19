import React, {useRef, forwardRef, useImperativeHandle, useState} from 'react'

const Button = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    }
  }));
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <button>External</button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

function UseImperativeHandleDemo() {
  const buttonRef = useRef(null);
  return (
    <div>
      <h4>Use Imperative Handle Demo</h4>
      <button onClick={() => buttonRef.current.alterToggle()}>Internal</button>
      <br/>
      <Button ref={buttonRef}/>
      <br/><br/><hr/>
    </div>
  );
}

export default UseImperativeHandleDemo