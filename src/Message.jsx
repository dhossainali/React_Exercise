
function Message({age}){
    return(
        <p>
            {age < 18 ? "You are very Young":""}
        </p>
    );
}

export default Message