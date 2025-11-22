import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { VIBEATHON_CONTEXT } from "../constants";

let chatSession: Chat | null = null;

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = async () => {
  const ai = getAiClient();
  if (!ai) return null;

  try {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: VIBEATHON_CONTEXT,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    return null;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    return "Error: AI System Offline. Please check API Key configuration.";
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({
      message,
    });
    return response.text || "No response received.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "System Malfunction. Please try again later.";
  }
};
