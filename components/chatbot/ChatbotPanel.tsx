'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  buttons?: { label: string; intent: string }[];
}

const PROBLEMA_TRABAJO_INTENT = 'problema-trabajo';
const TRABAJO_REALIZADO_INTENT = 'trabajo-realizado';
const POR_CONTRATAR_INTENT = 'por-contratar';

const SUGGESTIONS: { label: string; intent: string }[] = [
  { label: '¿Cómo funciona Protección CasaFix?', intent: 'proteccion' },
  { label: 'Quiero ser prestador', intent: 'prestador' },
  { label: 'Tengo un problema con un trabajo', intent: PROBLEMA_TRABAJO_INTENT },
];

const DEFAULT_RESPONSE =
  'Gracias por tu consulta. Un asesor te va a responder en breve. También podés llamarnos al WhatsApp.';

const PROBLEMA_CLARIFY_TEXT =
  'Antes de seguir, ¿te referís a un trabajo que YA SE REALIZÓ y tuviste un problema con el resultado? ¿O es un trabajo que estás por contratar?';

const TRABAJO_REALIZADO_RESPONSE =
  'Entendido. Si el trabajo ya se realizó y tuviste un problema, podemos abrir un caso de mediación. Un asesor te va a contactar en breve para revisar las evidencias (fotos antes/después y descripción) y mediar entre las partes.';

const POR_CONTRATAR_RESPONSE =
  'Bien. Para contratar un servicio, podés buscar prestadores verificados en la sección Servicios. Si querés, te ayudamos: contanos qué necesitás y te orientamos a la categoría adecuada.';

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

  function pushBotMessage(text: string, buttons?: Message['buttons']) {
    setTimeout(() => {
      const botMsg: Message = {
        id: crypto.randomUUID(),
        text,
        sender: 'bot',
        buttons,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  }

  function handleIntent(intent: string, label: string) {
    const userMsg: Message = {
      id: crypto.randomUUID(),
      text: label,
      sender: 'user',
    };
    setMessages((prev) => [...prev, userMsg]);
    setShowSuggestions(false);
    setInput('');

    if (intent === PROBLEMA_TRABAJO_INTENT) {
      pushBotMessage(PROBLEMA_CLARIFY_TEXT, [
        { label: 'Trabajo ya realizado', intent: TRABAJO_REALIZADO_INTENT },
        { label: 'Estoy por contratar', intent: POR_CONTRATAR_INTENT },
      ]);
      return;
    }
    if (intent === TRABAJO_REALIZADO_INTENT) {
      pushBotMessage(TRABAJO_REALIZADO_RESPONSE);
      return;
    }
    if (intent === POR_CONTRATAR_INTENT) {
      pushBotMessage(POR_CONTRATAR_RESPONSE);
      return;
    }
    pushBotMessage(DEFAULT_RESPONSE);
  }

  function handleFreeText(text: string) {
    const userMsg: Message = {
      id: crypto.randomUUID(),
      text,
      sender: 'user',
    };
    setMessages((prev) => [...prev, userMsg]);
    setShowSuggestions(false);
    setInput('');

    // Heuristic match for "problema con un trabajo" typed manually
    const normalized = text.toLowerCase();
    if (
      normalized.includes('problema') &&
      normalized.includes('trabajo')
    ) {
      pushBotMessage(PROBLEMA_CLARIFY_TEXT, [
        { label: 'Trabajo ya realizado', intent: TRABAJO_REALIZADO_INTENT },
        { label: 'Estoy por contratar', intent: POR_CONTRATAR_INTENT },
      ]);
      return;
    }
    pushBotMessage(DEFAULT_RESPONSE);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    handleFreeText(input.trim());
  }

  return (
    <div className="fixed bottom-44 right-4 left-4 sm:bottom-24 sm:left-auto sm:right-6 z-50 sm:w-[340px] h-[480px] max-h-[calc(100vh-12rem)] sm:max-h-[calc(100vh-7rem)] bg-white rounded-xl shadow-2xl border border-[#E8E6E1] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-[#1E3A5F] text-white px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <span className="font-semibold">CasaFix</span>
          <span className="text-white/40 hidden sm:inline">&middot;</span>
          <span className="text-sm text-white/80 hidden sm:inline">Consultas</span>
          <span className="w-2 h-2 bg-green-400 rounded-full shrink-0" />
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
          <div key={msg.id} className="space-y-2">
            <div
              className={
                msg.sender === 'bot'
                  ? 'bg-white rounded-lg p-3 text-sm max-w-[85%] border border-[#E8E6E1]'
                  : 'bg-[#1E3A5F] text-white rounded-lg p-3 text-sm max-w-[85%] ml-auto'
              }
            >
              {msg.text}
            </div>
            {msg.buttons && msg.buttons.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {msg.buttons.map((btn) => (
                  <button
                    key={btn.intent}
                    onClick={() => handleIntent(btn.intent, btn.label)}
                    className="border border-[#1E3A5F] text-[#1E3A5F] text-xs px-3 py-1.5 rounded-full hover:bg-[#1E3A5F] hover:text-white transition-colors"
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {showSuggestions && (
          <div className="flex flex-wrap gap-2 mt-2">
            {SUGGESTIONS.map((sug) => (
              <button
                key={sug.intent}
                onClick={() => handleIntent(sug.intent, sug.label)}
                className="border border-[#1E3A5F] text-[#1E3A5F] text-xs px-3 py-1.5 rounded-full hover:bg-[#1E3A5F] hover:text-white transition-colors"
              >
                {sug.label}
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
