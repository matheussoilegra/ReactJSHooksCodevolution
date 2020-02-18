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
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <CounterTwo></CounterTwo>
      {/* <CounterOne></CounterOne> */}
      {/* <UserContext.Provider value={'Matheus'}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC></ComponentC>
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <DataFetching></DataFetching> */}
      {/* <IntervalClassCounter></IntervalClassCounter> */}
      {/* <IntervalHookCounter></IntervalHookCounter> */}
      {/* <ClassMouse></ClassMouse> */}
      {/* <HookMouse></HookMouse> */}
      {/* <MouseContainer></MouseContainer> */}
      {/* <ClassCounterOne></ClassCounterOne> */}
      {/* <HookCounterOne></HookCounterOne> */}
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
