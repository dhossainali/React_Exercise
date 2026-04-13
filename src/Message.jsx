import user from "./user.png" 
import chatbot from "./chatbot.jpg"
import './Message.css'

export function Message ({message, sender}) {
    return (
        <div className={sender==='user'? 'user-message': 'chatbot-message'}>
            {sender==='user' && <img src={user} alt='User' width={25} />}
            <div className="message">
                {message}
            </div>
            {sender==='chatbot' && <img src={chatbot} alt='Chatbot' width={25} />}
        </div>
    )
}