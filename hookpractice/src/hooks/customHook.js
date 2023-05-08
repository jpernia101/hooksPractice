import React ,{ useEffect, useState } from "react"

const useFetch = (url) => {
    const [responce , setResponce] = useState([]);
    useEffect( () => {
        fetch(url)
        .then((res) => res.json())
        .then( (data) => setResponce(data));
    })

    return responce
}

export default useFetch 