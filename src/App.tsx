import React, { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'vi'>('en');

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
        agentId="YOUR_DIALOGFLOW_AGENT_ID"
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