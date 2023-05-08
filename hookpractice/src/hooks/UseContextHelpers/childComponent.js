import React, {useContext} from "react";
import {LoginContext} from './useContextExample'

const ChildComponent = () => {
    
    const login = useContext(LoginContext);
    console.log(login)
    return(
      <h1>CHILD component with context {login.toString()}</h1>
    )
    
  }
  
  export default ChildComponent;