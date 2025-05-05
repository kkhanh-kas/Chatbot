import React from 'react';

interface HeroProps {
  language: 'en' | 'vi';
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const content = {
    en: {
      title: "UEH E-commerce Program",
      subtitle: "Shape Your Digital Business Future",
      description: "Join UEH's comprehensive e-commerce program to master digital business strategies, technology, and market analysis. Prepare for a successful career in the rapidly evolving digital economy.",
      cta: "Learn More"
    },
    vi: {
      title: "Chương Trình Thương Mại Điện Tử UEH",
      subtitle: "Định Hình Tương Lai Kinh Doanh Số",
      description: "Tham gia chương trình thương mại điện tử toàn diện của UEH để làm chủ chiến lược kinh doanh số, công nghệ và phân tích thị trường. Chuẩn bị cho sự nghiệp thành công trong nền kinh tế số đang phát triển nhanh chóng.",
      cta: "Tìm Hiểu Thêm"
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-[#005f69] to-[#007a86] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {content[language].title}
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-[#f26f33]">
            {content[language].subtitle}
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12">
            {content[language].description}
          </p>
          <button className="bg-[#f26f33] hover:bg-[#e55d21] text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            {content[language].cta}
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </div>
  );
};

export default Hero; 