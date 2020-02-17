import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import ClassCounterTwo from './components/ClassCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';

function App() {
  return (
    <div className="App">
      {/* <ClassCounterOne></ClassCounterOne> */}
      <HookCounterOne></HookCounterOne>
      {/* <HookCounterFour></HookCounterFour> */}
      {/* <HookCounterThree></HookCounterThree> */}
      {/* <HookCounterTwo></HookCounterTwo> */}
      {/* <ClassCounterTwo></ClassCounterTwo> */}
      {/* <ClassCounter></ClassCounter> */}
      {/* <HookCounter></HookCounter> */}
    </div>
  );
}

export default App;
