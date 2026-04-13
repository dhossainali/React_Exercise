import { useState } from "react"
import './Input.css'
export function Input( {chatArrayData, setChatArrayData}) {
    
    const [message1, setMessage1]=useState('')
              
        
    function input1 (event) {
        setMessage1(event.target.value)
        
    }
     
    function sendMessage() {
        if (!message1.trim()) return;
        setChatArrayData((previous)=>[...previous, {id: crypto.randomUUID(), sender:'user', message: message1}])
        setMessage1('')
    }

    function sendMessage2() {
        if (!message1.trim()) return;
        setChatArrayData((previous)=>[...previous, {id: crypto.randomUUID(), sender:'chatbot', message: message1}])
        setMessage1('')
    }

    return(
        <div className="input-container">
            <button className="send1" type="submit" onClick={sendMessage}>Send 1</button>
            <input className="input" placeholder="Type your message here" onChange={input1} value={message1} size={50}/>
            <button className="send2" type="submit" onClick={sendMessage2}>Send 2</button>
        </div>
    )
}