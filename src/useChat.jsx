import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

export function useChat(){
  const [ inputTextFromUser, setInputTextFromUser ] = useState('');
  
    const [chatMessages, setChatMessages] = useState({
          user: [],
        chatbot: []
      });
  
    const handleKeyDown = (event) => {
      if(event.key === 'Enter'){
        sendMessage();
      }
    }
  
    function saveInputText(event){
        setInputTextFromUser(event.target.value);
      }
  
      function sendMessage(){
        const newUserMessage = 
        {
          message: inputTextFromUser,
          id: crypto.randomUUID()
        }

        setChatMessages( prev => ({
          ...prev,
          user: [
            ...prev.user,
            newUserMessage
          ]
      }));
  
      setInputTextFromUser('');
    }

    return { inputTextFromUser, chatMessages, handleKeyDown, saveInputText, sendMessage };
}