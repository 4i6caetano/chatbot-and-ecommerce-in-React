import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {
  function ChatInput(){
    return (
      <>
        <input 
        placeholder="Chat with the Chatbox here" size="30"
        />
        <button>Send</button>
      </>
    )
  }

  function ChatMessage({message, sender}){
      const senderConfig = {
        chatbot: {
          img: "../../utils/images/mikupog.png",
          alt: "Bot Avatar"
        },
        user: {
          img: "../../utils/images/sparxiepog.png",
          alt: "user Avatar"
        }
      }

      const config = senderConfig[sender] || senderConfig.user;
      return(
        <div>
          {message}
          <img src ={config.img} width="50"/>
        </div>
      );
    }

  return (
    <div>
      <ChatInput /> 
      {/* Component syntax, our own HTML element */}
      <ChatMessage 
        message="hello chatbot" 
        sender="user"
      />
      <ChatMessage 
        message="hi there!" 
        sender="chatbot"
      />
    </div>
  );
}

export default App
