import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { GoogleGenAI } from '@google/genai';

export function useChat(){
  const [ inputTextFromUser, setInputTextFromUser ] = useState('');
  
    const [chatMessages, setChatMessages] = useState([
      ]);

      //These are the STATE handlers
  
    const handleKeyDown = (event) => {
      if(event.key === 'Enter'){
        sendMessage();
      }
    }

    //simple keyboard event listener
  
    function saveInputText(event){
        setInputTextFromUser(event.target.value);
      }
  
      function sendMessage(){
        const newUserMessage = 
        {
          role: 'user',
          text: inputTextFromUser,
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

    //sends a new message

    //BELOW HERE THERE IS THE APPLICATION OF GOOGLE'S GENERATIVE AI

  const genAI = new GoogleGenAI(import.meta.env.VITE_GOOGLE_API_KEY);

  async function generateResponse(){
    const userHistory = chatMessages.user.map((item) => ({
      role: 'user',
      parts: [{ text: item.message }]
    })
  );

  const botHistory = chatMessages.model.map((item) => ( {
    role: 'model',
    parts: [{text: item.message}]
   })
  );

  const history = [...userHistory, ...botHistory];

    const response = await genAI.models.generateContentStream({
      model: "gemini-3.1-pro-preview",
      contents: history
      })

      let text = '';
      for await(const chunk of response){
        text += chunk.text;
      }
}



    return { inputTextFromUser, chatMessages, handleKeyDown, saveInputText, sendMessage };
}