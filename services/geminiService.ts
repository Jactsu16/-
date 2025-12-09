import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

// Retrieve API Key from environment
const apiKey = process.env.API_KEY;

let client: GoogleGenAI | null = null;

if (apiKey) {
  client = new GoogleGenAI({ apiKey });
}

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
) => {
  if (!client) {
    throw new Error("API Key not found. Please check your environment variables.");
  }

  try {
    const chat = client.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    // sendMessageStream returns a Promise that resolves to the iterable response
    const result = await chat.sendMessageStream({ message });
    return result;

  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};