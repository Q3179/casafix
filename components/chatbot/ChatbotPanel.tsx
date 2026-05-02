'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
}

const SUGGESTIONS = [
  '¿Cómo funciona Protección CasaFix?',
  'Quiero ser prestador',
  'Tengo un problema con un trabajo',
];

const BOT_RESPONSE =
  'Gracias por tu consulta. Un asesor te va a responder en breve. También podés llamarnos al WhatsApp.';

interface ChatbotPanelProps {
  onClose: () => void;
}

export function ChatbotPanel({ onClose }: ChatbotPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy el asistente de CasaFix. ¿En qué puedo ayudarte?',
      sender: 'bot',
    },
  ]);
  const [input, setInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  function sendMessage(text: string) {
    const userMsg: Message = {
      id: crypto.randomUUID(),
      text,
      sender: 'user',
    };
    setMessages((prev) => [...prev, userMsg]);
    setShowSuggestions(false);
    setInput('');

    setTimeout(() => {
      const botMsg: Message = {
        id: crypto.randomUUID(),
        text: BOT_RESPONSE,
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input.trim());
  }

  return (
    <div className="fixed bottom-24 right-6 z-50 w-[340px] h-[480px] bg-white rounded-xl shadow-2xl border border-[#E8E6E1] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-[#1E3A5F] text-white px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <span className="font-semibold">CasaFix</span>
          <span className="text-white/40">&middot;</span>
          <span className="text-sm text-white/80">Consultas</span>
          <span className="w-2 h-2 bg-green-400 rounded-full" />
          <span className="text-xs text-white/60">En línea</span>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-white/10 rounded"
          aria-label="Cerrar chat"
        >
          <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FAFAF7]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={
              msg.sender === 'bot'
                ? 'bg-white rounded-lg p-3 text-sm max-w-[85%] border border-[#E8E6E1]'
                : 'bg-[#1E3A5F] text-white rounded-lg p-3 text-sm max-w-[85%] ml-auto'
            }
          >
            {msg.text}
          </div>
        ))}

        {showSuggestions && (
          <div className="flex flex-wrap gap-2 mt-2">
            {SUGGESTIONS.map((sug) => (
              <button
                key={sug}
                onClick={() => sendMessage(sug)}
                className="border border-[#1E3A5F] text-[#1E3A5F] text-xs px-3 py-1.5 rounded-full hover:bg-[#1E3A5F] hover:text-white transition-colors"
              >
                {sug}
              </button>
            ))}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="border-t border-[#E8E6E1] p-3 flex gap-2 shrink-0"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribí tu consulta..."
          className="flex-1 bg-[#F5F5F0] rounded-lg px-3 py-2 text-sm outline-none"
        />
        <button
          type="submit"
          className="w-9 h-9 bg-[#1E3A5F] rounded-lg flex items-center justify-center hover:bg-[#15294A] transition-colors shrink-0"
          aria-label="Enviar mensaje"
        >
          <Send size={16} className="text-white" />
        </button>
      </form>
    </div>
  );
}
