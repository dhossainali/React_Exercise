import AlertClock from "./AlertClock"




function App() {

  return (
    <div>
      <AlertClock alertHanler={()=>alert((new Date()).toLocaleTimeString())}/>
      
    </div>
  )
}


export default App
