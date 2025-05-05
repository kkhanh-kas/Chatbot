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
          description: "Kiến thức toàn diện về TMĐT và công nghệ",
          icon: FaGraduationCap
        },
        {
          title: "Cơ Hội Nghề Nghiệp",
          description: "Chuyên viên tại doanh nghiệp TMĐT, Quản trị Marketing số, Khởi nghiệp kinh doanh số",
          icon: FaBriefcase
        },
        {
          title: "Đối Tác Doanh Nghiệp",
          description: "Thực tập tại công ty TMĐT hàng đầu, Cơ hội việc làm sau tốt nghiệp, Mạng lưới cựu sinh viên rộng lớn",
          icon: FaTools
        }
      ]
    }
  };

  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {content[language].sections.map((section, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                <section.icon className="w-16 h-16 text-[#005f69]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {section.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features; 