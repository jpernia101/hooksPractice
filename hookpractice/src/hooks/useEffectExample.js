import React, {useState , useEffect}   from 'react';

const UseEffectExample = () => {

  const [counter, setCounter] = useState(0)
  const [otherCounter, setOtherCounter] = useState(5)

  //without dependencies  
  // useEffect( () => {
  //   document.title = ` ${counter} new messages !`
  // })

  //with empty array the effect will only happen the first time the component render
  // useEffect( () => {
  //   document.title = ` ${counter} new messages !`
  // },[])

  //the variables in the array are the only ones to get update
  useEffect( () => {
    document.title = ` ${otherCounter} new messages !`
  },[otherCounter])

  //example showing where to put clean up reposibilities
  // useEffect( () => {
  //   console.log(`Callback  ${counter}`)

  //   return () => {
  //     console.log(`Clean up ${counter}`)
  //   }
  // })

  return (
    <div>
      <h3>{counter} new messages</h3>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <h3> Other counter {counter} </h3>
      <button onClick={() => setOtherCounter(otherCounter + 1)}>Increase</button>
    </div>
  );

}

export {UseEffectExample}