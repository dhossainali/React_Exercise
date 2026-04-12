export function MouseClicker(){
    function showName(event) {
        console.log(event.currentTarget.name)
    }

    function showImgSrc(event) {
        console.log(event.target.src)
    }
    return <div>
        <button name="One" onClick={showName}>One</button>
        <button name= "Two" onClick={showImgSrc}>{<img src="###"
          alt="ExampleImage"></img>}</button> 
    </div>
}