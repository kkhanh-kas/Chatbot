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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <nav className="bg-[#005f69] text-white p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-xl font-bold">UEH E-commerce</div>
          <button
            onClick={() => setLanguage(lang => lang === 'en' ? 'vi' : 'en')}
            className="bg-[#f26f33] hover:bg-[#e55d21] px-4 py-2 rounded-lg transition duration-300"
          >
            {language === 'en' ? 'Tiếng Việt' : 'English'}
          </button>
        </div>
      </nav>

      <main>
        <Hero language={language} />
        <Features language={language} />
      </main>

      <ChatWidget
        agentId="80db7ea8-5c14-4ee3-a5f0-7b36a558024c"
        language={language}
      />

      <footer className="bg-[#005f69] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 UEH E-commerce Program. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App; 