import React from 'react';
import UseStateDemo from './hooks/UseStateDemo';
import UseReducerDemo from './hooks/UseReducerDemo';
import UseEffectDemo from './hooks/UseEffectDemo';
import UseLayoutEffectDemo from './hooks/UseLayoutEffectDemo';
import UseRefDemo from './hooks/UseRefDemo';
import UseImperativeHandleDemo from './hooks/UseImperativeHandleDemo';
import UseContextDemo from './hooks/UseContextDemo';
import UseMemoDemo from './hooks/UseMemoDemo';
import UseCallbackDemo from './hooks/UseCallbackDemo';
import "./App.css";

const App = () => ( 
  <div className="App">
    <UseCallbackDemo/>
    <UseMemoDemo/>
    <UseEffectDemo/>
    <UseContextDemo/>
    <UseImperativeHandleDemo/>
    <UseLayoutEffectDemo/>
    <UseRefDemo/>
    <UseStateDemo/>
    <UseReducerDemo/>
  </div>
);  

export default App;
