import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {

  //dynamic html on the site

  const [ inputTextFromUser, setInputTextFromUser ] = useState('');

  const [chatMessages, setChatMessages] = useState({
        user: [
          {message: 'Hi there, pal!', id: crypto.randomUUID()},
          {message: 'do you like fnaf?', id: crypto.randomUUID()},
      ],
      chatbot: [
        {message: 'hello maam!', id: crypto.randomUUID()},
        {message: 'nah, not really', id: crypto.randomUUID()}
      ]
    })

    //Logic functions

    function saveInputText(event){
      setInputTextFromUser(event.target.value);
    }

    function sendMessage(){
      setChatMessages({
        ...chatMessages,
        user: [
          ...chatMessages.user,
          { message: inputTextFromUser, id: crypto.randomUUID()}
        ]
    });

    setInputTextFromUser('');
  }

  //Components

  function ChatInput(){ //responsible for the "Input" component

    return (
      <>
        <input 
        placeholder="Chat with the Chatbox here" 
        size="30"
        onChange={saveInputText}
        value={inputTextFromUser}
        />
        <button onClick={sendMessage}>Send Message</button>
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
              {message},
              <img src ={configuration.img} alt={configuration.alt} width="50"/>
            </>
          )
          : (
            <>
              <img src ={configuration.img} alt={configuration.alt} width="50"/>,
              {message}
            </>
          )}
        </div>
      );
}


  
function displayChat(){

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

return (
  <div className='app-container'>
    <h1>{props.titulo}</h1>
    <ChatInput />
    {displayChat()}
  </div>
)


  }

export default App

//colocar 1 elemento de um, depois um elemento de outro. Com for
