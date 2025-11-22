import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIChatModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init', role: 'model', text: "Systems Online. Ask me anything about the Vibeathon." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(input);
    
    const botMsg: ChatMessage = { 
      id: (Date.now() + 1).toString(), 
      role: 'model', 
      text: responseText 
    };
    
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-28 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-dark-bg border border-nerds-lime/30 rounded-2xl shadow-[0_0_40px_rgba(178,232,0,0.15)] flex flex-col overflow-hidden animate-float">
          {/* Header */}
          <div className="bg-nerds-primary/20 p-4 border-b border-nerds-lime/20 flex justify-between items-center backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-nerds-lime/20 flex items-center justify-center border border-nerds-lime/30">
                 <Bot className="w-5 h-5 text-nerds-lime" />
              </div>
              <span className="font-sans font-bold text-white text-sm">NERDS AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide bg-black/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm font-mono leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-nerds-blue/20 text-white border border-nerds-blue/30 rounded-br-sm'
                      : 'bg-white/5 text-gray-200 border border-white/10 rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-2xl rounded-bl-sm border border-white/10">
                  <Loader2 className="w-4 h-4 animate-spin text-nerds-lime" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-card-bg border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about prompt strategies..."
              className="flex-1 bg-black border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-nerds-lime focus:ring-1 focus:ring-nerds-lime/50 font-mono transition-all"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-nerds-lime text-nerds-primary p-3 rounded-xl hover:bg-white hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-16 h-16 bg-nerds-lime rounded-full shadow-[0_0_20px_rgba(178,232,0,0.4)] hover:scale-110 transition-all duration-300"
      >
        <div className="absolute inset-0 rounded-full animate-ping bg-nerds-lime opacity-20"></div>
        <MessageSquare className="w-7 h-7 text-nerds-primary fill-current group-hover:text-black transition-colors" />
      </button>
    </div>
  );
};