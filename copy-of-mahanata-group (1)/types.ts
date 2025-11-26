export interface Colony {
  id: number;
  name: string;
  description: string;
  image: string;
  features: string[];
  gallery?: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export type ImageSize = '1K' | '2K' | '4K';

export interface ImageGenerationConfig {
  prompt: string;
  size: ImageSize;
}

// Augment window for the AI Studio key selection
declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }
}