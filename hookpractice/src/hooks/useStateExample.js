import React, {useState} from 'react';

const UseStateExample = () => {
// const [counter, setCounter] = useState(0);
  // const [name, setName] = useState("")

  /**
   * Whenever we work with an object we have to first add all previous values  and then update what we need to update. Hence why we used the spread operator
   */
  const [details, setDetails] = useState({counter: 0, name : ""})
  const increaseCounter = () => {
    setDetails( (previousState) => ({ 
      ...previousState,
      counter: previousState.counter + 1
    }))
  }
  console.log(details)
  return (
    <div>
      <input type="text" onChange={ e => setDetails( (prev) =>  ({ ...prev ,name: e.target.value}))}/> 
      <h1>{details.name} has clicked {details.counter} times</h1>
      <button onClick={increaseCounter}>Increase</button>
    </div>
  );

}

export {UseStateExample}