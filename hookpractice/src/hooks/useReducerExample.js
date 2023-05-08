import React, {useReducer} from 'react';
const ACTIONS = {
    increase : "increase",
    decrease : "decrease"
}
const intialState = {count: 0};
const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.increase:
            return { count: state.count + 1 }
        case ACTIONS.decrease:
            return { count : state.count - 1}
        default:
            break;
    }

}
const UseReducerExample = () => {
//returns an array similar to how useState does
  const [state,dispatch] = useReducer(reducer,intialState)

  const increaseCounter = () => {
    dispatch({type: ACTIONS.increase})
  }
  const decreaseCounter = () => {
    dispatch({type: ACTIONS.decrease})

  }
  return (
    <div>
      <h2>Count : {state.count}</h2>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>decrease</button>
    </div>
  );
}

export {UseReducerExample}