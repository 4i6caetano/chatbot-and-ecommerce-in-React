import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useChat } from './useChat.jsx'

function ChatInput({inputTextFromUser, saveInputText, sendMessage, handleKeyDown}){ //responsible for the "Input" component

    return (
      <>
        <input 
        placeholder="Chat with the Chatbox here" 
        size = "30"
        onChange={saveInputText}
        value = {inputTextFromUser}
        onKeyDown = {handleKeyDown}
        />
        <button onClick={sendMessage}
        >Send Message</button>
      </>
    );
  }

  function ChatItem({ sender, message }){ //responsible for the "bot and user chat" component
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
        <div className={`message-wrapper-${sender}`}>
          {sender === 'user' ? (
            <>
              {message}
              <img src ={configuration.img} alt={configuration.alt} width="50"/>
            </>
          )
          : ( 
            <>
              <img src ={configuration.img} alt={configuration.alt} width="50"/>
              {message}
            </>
          )}
        </div>
      );
}


  
function DisplayChat( {chatMessages} ){

  return (
 	<div className="chat-container">
    {chatMessages.user.map((item, index) => (
      <>
        <ChatItem  message={item.message} sender="user"/>
        {chatMessages.chatbot[index] && (
        <ChatItem message={chatMessages.chatbot[index].message} sender="chatbot" /> )}
      </>
    ))}
	</div>
	);
}

function App(props) {

  const { inputTextFromUser, saveInputText, sendMessage, handleKeyDown, chatMessages} = useChat();

return (
  <div className='app-container'>
    <h1 className='title'>{"Chatbot"}</h1>
    <ChatInput 
    inputTextFromUser={inputTextFromUser}
    saveInputText={saveInputText}
    sendMessage={sendMessage}
    handleKeyDown={handleKeyDown}
    />
    <DisplayChat 
    chatMessages={chatMessages}/>
  </div>
)


  }

export default App
