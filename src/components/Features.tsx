import React from 'react';
import { FaGraduationCap, FaBriefcase, FaTools } from 'react-icons/fa';

interface FeaturesProps {
  language: 'en' | 'vi';
}

const Features: React.FC<FeaturesProps> = ({ language }) => {
  const content = {
    en: {
      sections: [
        {
          title: "Comprehensive Curriculum",
          description: "Master e-commerce fundamentals, digital marketing, supply chain management, and data analytics through our industry-aligned curriculum.",
          icon: FaGraduationCap
        },
        {
          title: "Career Opportunities",
          description: "Prepare for roles in e-commerce management, digital marketing, business analysis, and entrepreneurship with real-world projects and internships.",
          icon: FaBriefcase
        },
        {
          title: "Industry Skills",
          description: "Develop practical skills in digital platforms, analytics tools, and business strategies needed in today's digital marketplace.",
          icon: FaTools
        }
      ]
    },
    vi: {
      sections: [
        {
          title: "Chương Trình Đào Tạo Tiên Tiến",
          description: "- Kiến thức toàn diện về TMĐT và công nghệ\n- Thực hành với dự án thực tế\n- Giảng viên là chuyên gia trong ngành",
          icon: FaGraduationCap
        },
        {
          title: "Cơ Hội Nghề Nghiệp",
          description: "- Chuyên viên tại doanh nghiệp TMĐT\n- Quản trị Marketing số\n- Khởi nghiệp kinh doanh số",
          icon: FaBriefcase
        },
        {
          title: "Đối Tác Doanh Nghiệp",
          description: "- Thực tập tại công ty TMĐT hàng đầu\n- Cơ hội việc làm sau tốt nghiệp\n- Mạng lưới cựu sinh viên rộng lớn",
          icon: FaTools
        }
      ]
    }
  };

  return (
    <div className="features">
      {content[language].sections.map((section, index) => (
        <div key={index} className="feature">
          <div className="feature-icon">
            <section.icon />
          </div>
          <h3>{section.title}</h3>
          {section.description.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Features; 