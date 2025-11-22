export interface TimelineItem {
  id: number;
  date: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface Track {
  id: string;
  title: string;
  description: string;
  tech: string[];
  icon: 'globe' | 'smartphone';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}
