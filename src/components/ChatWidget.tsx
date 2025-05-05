import React, { useEffect } from 'react';

interface ChatWidgetProps {
  agentId: string;
  language: 'en' | 'vi';
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'df-messenger': any;
    }
  }
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ agentId, language }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <df-messenger
      intent="WELCOME"
      chat-title={language === 'en' ? "UEH E-commerce Assistant" : "Trợ Lý TMĐT UEH"}
      agent-id={agentId}
      language={language === 'en' ? 'en' : 'vi'}
      chat-icon="https://example.com/path-to-your-chat-icon.png"
    ></df-messenger>
  );
};

export default ChatWidget; 