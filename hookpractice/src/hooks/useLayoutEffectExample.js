import React, {useState , useEffect, useRef, useLayoutEffect}   from 'react';

const UseLayoutEffectExample = () => {

  const [toggle, setToggle] = useState(false)
  const textRef = useRef()

  //useEffect lags a little because it does it after component is loaded onto DOM in comarison to layoufeffect that runs before DOM is loaded
 
//   useEffect( () => {
//     if(textRef.current != null){
//         const dimension = textRef.current.getBoundingClientRect();
//         textRef.current.style.paddingTop = `${dimension.height}px`
//         console.log("useEffect");
//     }
//   },[toggle])

  useLayoutEffect( () => {
    if(textRef.current != null){
        const dimension = textRef.current.getBoundingClientRect();
        textRef.current.style.paddingTop = `${dimension.height}px`
        console.log("useEffect");
    }
  },[toggle])


  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h4 ref={textRef}>Code bless you</h4>}
    </div>
  );

}

export {UseLayoutEffectExample}