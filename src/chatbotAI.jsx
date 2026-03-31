import { GoogleGenAI } from "@google/genai"
import { useChat } from "./useChat.jsx"


const genAI = new GoogleGenAI(import.meta.env.VITE_GOOGLE_API_KEY);

const { chatMessages } = useChat();

export async function generateResponse(){
  const response = await ai.models.generateContentStream
  ({
    model: "gemini-3.1-pro-preview",
    contents: {
      ...chatMessages,
      user: {
        ...chatMessages.user
      }
    }})

    let text = '';
    for await(const chunk of response){
      text += chunk.text;
    }
}