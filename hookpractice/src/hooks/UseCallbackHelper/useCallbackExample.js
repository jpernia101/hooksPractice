import React, {useState , useEffect, useRef, useLayoutEffect, useMemo, useCallback}   from 'react';
import PrintTable from './printTable';

const UseCallbackExample = () => {

  const [dark, setDark] = useState(false)
  const [number, setNumber] = useState(0)
  
const calcultateTablee = useCallback( (value) => {
    let newNum = value + number
    return [newNum * 1 , newNum * 2, newNum * 3 , newNum * 4 , newNum * 5]
} , [number])

  const cssStyle = {
    backgroundColor : dark ? "black" : "white",
    color : dark ? "white" : "black"
  }
  
  return (
    <div style={cssStyle}>
      <input onChange={(e) => setNumber(e.target.valueAsNumber)} type='number' value={number}/>
      <PrintTable calculateTable={calcultateTablee}/>
      <button onClick={() => setDark(!dark)}>toggle</button>
      
    </div>
  );

}




export {UseCallbackExample}