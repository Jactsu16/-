import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { Message } from '../types';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Simple parser to handle bold text (**text**)
  const renderMessageText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold">{part.slice(2, -2)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    setHasStarted(true);
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Prepare history for API
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      // Create placeholder for stream
      const botMessageId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, {
        id: botMessageId,
        role: 'model',
        text: '',
        timestamp: new Date()
      }]);

      // Call API
      const streamResult = await sendMessageToGemini(userMessage.text, history);

      let accumulatedText = "";
      
      // Iterate directly over the result (which is iterable in the new SDK)
      for await (const chunk of streamResult) {
        // Access .text property directly
        const chunkText = chunk.text;
        if (chunkText) {
          accumulatedText += chunkText;
          setMessages(prev => prev.map(msg => 
            msg.id === botMessageId 
              ? { ...msg, text: accumulatedText }
              : msg
          ));
        }
      }

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: 'Lo siento, he tenido un problema conectando con mi cerebro digital. ¿Podrías intentar de nuevo?',
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="pt-24 md:pt-[110px] pb-12 px-4 md:px-6 max-w-[1080px] mx-auto min-h-screen flex flex-col items-center">
      
      {/* Header Badge */}
      <div className="mb-8 animate-fade-in text-center">
        <div className="inline-flex items-center gap-2 bg-white dark:bg-dark-card border border-[#f2f6ff] dark:border-dark-border px-6 py-2 rounded-full shadow-sm mb-4">
           <svg className="w-5 h-5 text-[#005e91] dark:text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
           </svg>
           <span className="text-xs md:text-sm font-bold text-[#005e91] dark:text-brand-primary tracking-widest uppercase">Chatbot Jactsu</span>
        </div>
        <h2 className="text-3xl font-bold text-[#001d26] dark:text-white tracking-tight">Asistente especializado</h2>
        <p className="text-[#0076c7] dark:text-brand-primary mt-2 text-sm md:text-base">Consulta sobre perfil, experiencias, portafolio y más.</p>
      </div>

      {/* Main Chat Container */}
      <div className="w-full bg-white dark:bg-dark-card rounded-[32px] border border-[#f2f6ff] dark:border-dark-border shadow-xl overflow-hidden flex flex-col h-[600px] max-h-[75vh] animate-slide-up relative">
        
        {/* Messages Area */}
        <div ref={scrollContainerRef} className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 scrollbar-hide">
          
          {!hasStarted && (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 opacity-60">
               <div className="w-16 h-16 text-[#0087fc] mb-4">
                 <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.327 24.327 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                 </svg>
               </div>
               <p className="text-[#005e91] dark:text-brand-primary font-bold text-lg">¡Hola, Soy Jactsu! Asistente de Jamileth Guerra.</p>
               <p className="text-[#0076c7] dark:text-brand-secondary text-sm mt-1">¿En qué puedo ayudarte hoy?</p>
            </div>
          )}

          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] md:max-w-[75%] px-6 py-4 rounded-2xl text-sm md:text-base leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#0087fc] text-white rounded-br-none' 
                    : 'bg-[#f2f6ff] dark:bg-dark-bg text-[#001d26] dark:text-white rounded-bl-none'
                }`}
              >
                {renderMessageText(msg.text)}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#f2f6ff] dark:bg-dark-bg px-6 py-4 rounded-2xl rounded-bl-none flex items-center gap-1.5">
                <div className="w-2 h-2 bg-[#0076c7]/60 dark:bg-brand-primary rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[#0076c7]/60 dark:bg-brand-primary rounded-full animate-bounce delay-75"></div>
                <div className="w-2 h-2 bg-[#0076c7]/60 dark:bg-brand-primary rounded-full animate-bounce delay-150"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 md:p-6 border-t border-[#f2f6ff] dark:border-dark-border bg-white dark:bg-dark-card">
          <div className="relative flex items-center">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe tu mensaje..."
              disabled={isLoading}
              className="w-full bg-[#f8fbff] dark:bg-dark-bg border border-[#f2f6ff] dark:border-brand-dark text-[#001d26] dark:text-white rounded-full py-4 pl-6 pr-14 focus:outline-none focus:ring-2 focus:ring-[#0087fc]/20 focus:border-[#0087fc] transition-all text-sm md:text-base disabled:opacity-50 placeholder-[#0076c7]/50 dark:placeholder-brand-secondary"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#0087fc] text-white rounded-full hover:bg-[#005e91] transition-colors disabled:opacity-50 disabled:hover:bg-[#0087fc]"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ChatInterface;