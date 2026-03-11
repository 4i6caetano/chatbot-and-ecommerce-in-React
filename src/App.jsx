import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {
  function ChatInput(){
    return (
      <div>
        <input />
        <button>Send</button>
      </div>
    )
  }
  return (
    <div>
      <h1>{props.titulo}</h1>
      <ChatInput /> {/* Component syntax, our own HTML element */}
    </div>
  );
}

export default App
