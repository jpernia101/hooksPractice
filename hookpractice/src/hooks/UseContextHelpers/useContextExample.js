import React, {useState, createContext} from 'react';


export const LoginContext = createContext();

//inside the provide we have to pass all children . so they are passed in as props 
const UseContextExample = ({children}) => {
  const [userDetails, setUSerDetails] = useState(true);
  return(
    <LoginContext.Provider value={userDetails}>
      {children}
    </LoginContext.Provider>

  )
  
}

export default UseContextExample;
