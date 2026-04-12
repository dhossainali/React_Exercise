import { useState } from "react"
import { CounterDisplay } from "./CounterDisplay";

export function Counter ({intialValue, countNumber}) {
    const [counter, setCounter]=useState(0)

    function increment() {
        setCounter((c)=>c+countNumber);
    }


    function decrement() {
        setCounter((c)=>c-countNumber);
    }
     
    function reset() {
        setCounter(intialValue);
    }

    return (
        <div>
            <CounterDisplay counter={counter}/>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

}