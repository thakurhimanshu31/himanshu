import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ImageSize } from "../types";

// Helper to get a fresh client (important for ensuring API key is current)
const getAiClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

/**
 * Generate a tagline using the fast model.
 */
export const generateTagline = async (): Promise<string> => {
  try {
    const ai = getAiClient();
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-lite-latest', // Fast AI responses
      contents: 'Write a short, luxurious, 5-word tagline for a premium real estate company named "MAHANATA GROUP". Return ONLY the tagline.',
    });
    return response.text?.trim() || "Crafting Future Spaces";
  } catch (error) {
    console.error("Tagline generation failed:", error);
    return "Crafting Future Spaces";
  }
};

/**
 * Chat with the bot using the Pro model for high quality responses.
 */
export const sendChatMessage = async (history: { role: string; parts: { text: string }[] }[], newMessage: string): Promise<string> => {
  const ai = getAiClient();
  const chat = ai.chats.create({
    model: 'gemini-3-pro-preview', // AI powered chatbot
    history: history,
    config: {
      systemInstruction: "You are the virtual concierge for MAHANATA GROUP, a luxury real estate developer. Be polite, professional, and concise. Help users find their dream home.",
    }
  });

  const response: GenerateContentResponse = await chat.sendMessage({ message: newMessage });
  return response.text || "I apologize, I didn't catch that.";
};

/**
 * Generate an image using the Pro Image model.
 */
export const generateDesignImage = async (prompt: string, size: ImageSize): Promise<string | null> => {
  const ai = getAiClient();
  
  // Mapping size to Gemini API imageSize enum values if necessary, 
  // currently the API accepts "1K", "2K", "4K" string literals.
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview', // Nano Banana Pro equivalent
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: {
          imageSize: size,
          aspectRatio: "16:9" 
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image generation failed:", error);
    throw error;
  }
};