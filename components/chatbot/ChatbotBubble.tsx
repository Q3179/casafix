'use client';

import { MessageCircle } from 'lucide-react';

interface ChatbotBubbleProps {
  onClick: () => void;
  showBadge?: boolean;
}

export function ChatbotBubble({ onClick, showBadge = true }: ChatbotBubbleProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] bg-[#1E3A5F] rounded-full shadow-lg flex items-center justify-center hover:bg-[#15294A] transition-colors"
      aria-label="Abrir chat de consultas"
    >
      <MessageCircle size={28} className="text-white" />
      {showBadge && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#F4A261] rounded-full flex items-center justify-center text-white text-xs font-bold">
          1
        </span>
      )}
    </button>
  );
}
