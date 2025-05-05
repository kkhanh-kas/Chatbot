import React from 'react';
import { FaGraduationCap, FaBriefcase, FaHandshake } from 'react-icons/fa';

interface FeaturesProps {
  language: 'en' | 'vi';
}

const Features: React.FC<FeaturesProps> = () => {
  const content = {
    sections: [
      {
        title: "Chương Trình Đào Tạo Tiên Tiến",
        description: [
          "Kiến thức toàn diện về TMĐT và công nghệ",
          "Thực hành với dự án thực tế",
          "Giảng viên là chuyên gia trong ngành"
        ],
        icon: FaGraduationCap
      },
      {
        title: "Cơ Hội Nghề Nghiệp",
        description: [
          "Chuyên viên tại doanh nghiệp TMĐT",
          "Quản trị Marketing số",
          "Khởi nghiệp kinh doanh số"
        ],
        icon: FaBriefcase
      },
      {
        title: "Đối Tác Doanh Nghiệp",
        description: [
          "Thực tập tại công ty TMĐT hàng đầu",
          "Cơ hội việc làm sau tốt nghiệp",
          "Mạng lưới cựu sinh viên rộng lớn"
        ],
        icon: FaHandshake
      }
    ]
  };

  return (
    <div className="features">
      {content.sections.map((section, index) => (
        <div key={index} className="feature">
          <div className="feature-icon">
            <section.icon />
          </div>
          <h3>{section.title}</h3>
          {section.description.map((line, i) => (
            <p key={i}>• {line}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Features; 