import React , {useState, useRef, useEffect} from "react"
const UseRefExample = () => {
  const [name, setName] = useState("");
//   const [count, setCount] = useState(0);

//this helps the count no-render
  const count = useRef(0)

  useEffect(() => {
    count.current = count.current + 1
    // setCount(count + 1)

  })

  const inputEle = useRef();
  const handleClick = () => {
    console.log(inputEle.current);
    inputEle.current.style.width = "300px"
  }

  return(
    <div>
       <input type="text" onChange={(e) => {setName(e.target.value)}} /> 
      <h3> Name : {name}</h3>
      <h2> Renders : {count.current}</h2>

      <h1> Second use of useRef</h1>
      <input type="text" ref={inputEle} /> 
      <button onClick={handleClick}>Click here </button>
    </div>
  )
}

export default UseRefExample;