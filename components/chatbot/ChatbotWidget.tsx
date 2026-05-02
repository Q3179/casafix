'use client';

import { useState } from 'react';
import { ChatbotBubble } from './ChatbotBubble';
import { ChatbotPanel } from './ChatbotPanel';

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <ChatbotPanel onClose={() => setIsOpen(false)} />}
      <ChatbotBubble onClick={() => setIsOpen((prev) => !prev)} showBadge={!isOpen} />
    </>
  );
}
