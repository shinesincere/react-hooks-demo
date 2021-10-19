import React, {useState, createContext, useContext} from 'react';

const AppContext = createContext(null);

function UseContextDemo() {
  const [name, setName] = useState('');
  return (
    <AppContext.Provider value={{name, setName}}>
      <h4>Use Context Demo</h4>
      <Login/>
      <User/>
      <br/><br/><hr/>
    </AppContext.Provider>
  );
}

function User(){
  const {name} = useContext(AppContext);
  return (
    <div>
      <b>User: {name}</b>
    </div>
  );
}

function Login(){
  const {setName} = useContext(AppContext);
  return (
    <div>
      <input onChange={(event) => setName(event.target.value)} placeholder='Enter your name here'/>
    </div>
  );
}

export default UseContextDemo;