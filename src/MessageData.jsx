export function MessageData() {
    const messageData = [
    { id:'03421', sender: 'user', message: 'Hello' },
    { id:'03432', sender: 'chatbot', message: 'Hello, How can I help you?' },
    { id:'03443', sender: 'user', message: 'How will be the weather tomorrow' },
    { id:'03454', sender: 'chatbot', message: 'The weather will be couldy for tomorrow' },
    { id:'03465', sender: 'user', message: 'Will it rain?' },
    { id:'03476', sender: 'chatbot', message: 'Probably not'}
    ]   

    return (
        messageData
        // <div>
        //     {messageData.map((chatData, index) => (
        //         <Message
        //             key={index} 
        //      '     '  sender={ch'atDat'a.sender}
        //             message={chatData.message}
        //         />
        //     ))}
        // </div>
    );
}