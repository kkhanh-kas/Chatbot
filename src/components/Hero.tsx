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
    <div className="hero">
      <h1>{content[language].title}</h1>
      <h2>{content[language].subtitle}</h2>
      <p>{content[language].description}</p>
    </div>
  );
};

export default Hero; 