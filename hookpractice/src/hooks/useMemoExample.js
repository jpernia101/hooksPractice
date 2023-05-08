import React, {useState , useEffect, useRef, useLayoutEffect, useMemo}   from 'react';

const UseMemoExample = () => {

  const [dark, setDark] = useState(false)
  const [number, setNumber] = useState(0)
  
//   const calculation = expensiveFunction(number);

function expensiveFunction(num){
    console.log('Loop started');
    for(let i = 0 ; i < 100000000 ; i++) {}
    return num;
}
  const cssStyle = {
    backgroundColor : dark ? "black" : "white",
    color : dark ? "black" : "white"
  }
  const memoCalc = useMemo( () => {
    return expensiveFunction(number);
  }, [number])

  return (
    <div style={cssStyle}>
      <input onChange={(e) => setNumber(e.target.valueAsNumber)} type='number' value={number}/>
      <h2>Calculation {memoCalc}</h2>
      {/* <h2>Calculation {calculation}</h2> */}
      <button onClick={() => setDark(!dark)}>toggle</button>
      
    </div>
  );

}




export {UseMemoExample}