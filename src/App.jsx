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

  function ChatConfig({ sender, message }){
      const senderConfig = {
        chatbot: {
          img: "/mikupog.png",
          alt: "Bot Avatar",
        },
        user: {
          img: "/sparxiepog.png",
          alt: "User Avatar",
        }
      }

      const configuration = senderConfig[sender] || senderConfig.user;

      return(
        <div className={`message-wrapper ${sender}`}>
          <p>{message}</p>
          <img src ={configuration.img} alt={configuration.alt} width="50"/>
        </div>
      );
    }

    function getMessages(sender){
      const allMessages = {
        user: [
          {message: 'Hi there, pal!',},
          {message: 'do you like fnaf?',},
      ],
      chatbot: [
        {message: 'hello maam!',},
        {message: 'nah, not really',}
      ]
    }
    return allMessages[sender] || [];
  }

  
  function displayChat(sender){
    const selectedList = getMessages(sender) || [];
    return(
      <>
      <div className="chat-container">
        {selectedList.map((item, index) => (
          <>
            <ChatConfig 
            sender={sender}
            message={item.message}
            key={index}
            />
          </>
        )
        )
        }
      </div>
      </>
    );
}

return (
  <div className='app-container'>
    <h1>{props.titulo}</h1>
    <ChatInput />
    {displayChat('user')}
    <hr />
    {displayChat('chatbot')}
  </div>
)



}

export default App
