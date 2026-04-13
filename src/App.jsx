import { useState } from "react";
import { Input } from "./Input"
import { Message } from "./Message"
import { MessageData } from "./MessageData"
import './App.css'




function App() {
  const [chatArrayData, setChatArrayData]=useState(()=>MessageData());  
  return (
    <div className="app-Container">
      <Input chatArrayData={chatArrayData} setChatArrayData={setChatArrayData}/>
      {chatArrayData.map((e)=>{ return(
        <Message key={e.id} sender={e.sender} message={e.message}/>);
      })}
      
    </div>
  )
}


export default App
