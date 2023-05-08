import logo from './logo.svg';
import './App.css';
import React, {useState, createContext} from 'react';
import {UseStateExample }from './hooks/useStateExample';
import {UseEffectExample }from './hooks/useEffectExample';
import UseContextExample from './hooks/UseContextHelpers/useContextExample';
import ParentComponent from './hooks/UseContextHelpers/parentComponent';
import UseRefExample from "./hooks/useRefExample"
import { UseReducerExample } from './hooks/useReducerExample';
import { UseLayoutEffectExample } from './hooks/useLayoutEffectExample';
import { UseMemoExample } from './hooks/useMemoExample';
import {UseCallbackExample} from './hooks/UseCallbackHelper/useCallbackExample'
import useFetch from './hooks/customHook'


const App = () => {
  const responce = useFetch("https://jsonplaceholder.typicode.com/users")
  return(
    
    
    // <UseStateExample/>
    // <UseEffectExample/> 
    // <UseContextExample>
    //   <ParentComponent/>
    // </UseContextExample>

    // <UseRefExample/>
    // <UseReducerExample/>
    // <UseLayoutEffectExample/>
    // <UseMemoExample/>
    // <UseCallbackExample/>
    responce.map((data) =>{
      return (
        <h4 key={data.id}> {data.name} ..{data.id}        </h4>
      )
    })
  )
  
}

export default App;
