import { useEffect, useRef, useState } from "react"
import { useLocalStorageState } from "../hooks/useLocalStorageState"

import ChatSession from "./ChatSession"
import RedirectUser from "./RedirectUser";

import "../animations.css";
import styles from "./FakeChatSupport.module.css"

function FakeChatSupport({openSupport}) {
    const [userInput, setUserInput] = useState('');
    // useLocalStorageState([], "chat-feed");
    const [messages, setMessages] = useState([]);

    const latest = useRef(null);

    useEffect(() => {
        // Send initial message from bot
        setMessages([...messages, { sender: 'cat-bot', text: "How can I help you today ?" }]);
    }, []);

    // Scroll to lastest message
    useEffect(() => {
        latest.current.scrollIntoView({ behavior: "smooth" });
    }, [messages])

    function handleSubmit(e) {
        e.preventDefault()

        if(!userInput) return;

        // Simulate bot response after a delay
        setMessages(messages => [...messages, { sender: 'you', text: userInput.trim() }]);
        setUserInput('');

        setTimeout(() => {
            // Process user message and generate bot response
            const catResponse = processMessage(userInput);
            setMessages(messages => [...messages, { sender: 'cat-bot', text: catResponse }]);
        }, 1000); // Simulate delay for realism
    }

    const processMessage = (message) => {
        switch (message.toLowerCase()) {
          case 'hello':
          case 'hi':
          case 'hey':
            return 'Hi there, please write your issues while I connect you to support';
          case 'how are you ?':
            return 'I\'m doing well, thanks for asking.';
          default:
            return <RedirectUser />
        }
    };

    return (
        <div className={styles['chat-screen']}>
            <header className={styles['chat-screen-header']} onClick={() => openSupport(false)}>Artsy</header>
            <div className={styles['chats-feed']}>
                {messages.map((message, i) => {
                    if(message.sender === "cat-bot") {
                        return <ChatSession catBot={message.text} key={i} />
                    }

                    if(message.sender === "you") {
                        return <ChatSession user={message.text} key={i}/>
                    }
                })}
                <div ref={latest}></div>
            </div>
            <form className='chat-screen-form' onSubmit={handleSubmit}>
                <input type="text" placeholder="write..." className='chat-screen-input' value={userInput}
                    onChange={(e) => setUserInput(e.target.value) }
                />
                <button type="submit" className='chat-screen-send-btn'>Send</button>
            </form>
        </div>
    )
}

export default FakeChatSupport

