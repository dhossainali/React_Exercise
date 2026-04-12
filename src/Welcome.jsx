import Age from "./Age"
import Message from "./Message"

function Welcome({ name, age }) {
    return (
        <>
            <p>Hello, <strong>{name}</strong>! </p>
            <Message/>
            {age>18 && <Age age={age}/>}
            {age && <Age age={age}/>}
            {age>18 && age<65 && <Age age={age}/>}
            {age> 18 && name==='John' && <Age age={age}/>}
            <Age age={age}/>
        </>)
}

export default Welcome