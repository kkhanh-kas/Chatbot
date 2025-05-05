import React, { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ChatWidget from './components/ChatWidget';

interface DialogflowError extends CustomEvent {
  detail: {
    error: any;
  };
}

const App: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'vi'>('vi');

  React.useEffect(() => {
    const dfMessenger = document.querySelector('df-messenger');
    
    if (dfMessenger) {
      dfMessenger.addEventListener('df-messenger-loaded', () => {
        console.log('Dialogflow messenger loaded successfully');
      });
      
      dfMessenger.addEventListener('df-error', ((event: Event) => {
        const error = event as DialogflowError;
        console.error('Dialogflow messenger error:', error.detail.error);
      }) as EventListener);
    }
  }, []);

  return (
    <div className="app">
      <Hero language={language} />
      <Features language={language} />
      <ChatWidget
        agentId="80db7ea8-5c14-4ee3-a5f0-7b36a558024c"
        language={language}
      />
    </div>
  );
};

export default App; 