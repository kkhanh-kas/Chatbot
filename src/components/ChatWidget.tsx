import React from 'react';

interface ChatWidgetProps {
  language: 'en' | 'vi';
  agentId?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'df-messenger': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'chat-icon'?: string;
        'intent'?: string;
        'chat-title'?: string;
        'agent-id'?: string;
        'language-code'?: string;
        'expand'?: string;
        'placeholder'?: string;
      };
    }
  }
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ language }) => {
  return (
    <df-messenger
      chat-icon="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23f26f33'%3E%3Ccircle cx='12' cy='12' r='11' fill='%234285f4'/%3E%3Ccircle cx='12' cy='12' r='9' fill='white'/%3E%3Ccircle cx='9' cy='12' r='1.5' fill='black'/%3E%3Ccircle cx='15' cy='12' r='1.5' fill='black'/%3E%3Cpath d='M8 16.5C9.5 18 10.8 18.5 12 18.5c1.2 0 2.5-0.5 4-2' stroke='black' fill='none' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E"
      intent="WELCOME"
      chat-title="Trợ Lý TMĐT UEH"
      agent-id="80db7ea8-5c14-4ee3-a5f0-7b36a558024c"
      language-code="vi"
      placeholder="Hỏi gì đó..."
      expand="true">
    </df-messenger>
  );
};

export default ChatWidget; 