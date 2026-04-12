import { useEffect, useState } from "react"


export function Counter ({initialValue, countNumber}) {
    const [count, setCount]=useState(initialValue)
    const [time, setTime]= useState(new Date())

    useEffect(()=>{
        console.log(count);
    },[count])
   

    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date())

        }, 1000)
    },[time])

    function increment() {
        setCount((c)=>c+countNumber);
    }
    function decrement() {
        setCount((c)=>c-countNumber);
    }
     
    function reset() {
        setCount(initialValue);
    }

    return (
        <div>
            <h2>The current time is: {time.toLocaleTimeString()}</h2>
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

}