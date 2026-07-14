// import React from "react";
// import { FileSearchOutlined, ArrowLeftOutlined } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";
// import "./landing.css";

// const Default = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="law-page">
//       <div
//         className="law-wrapper"
//         style={{
//           justifyContent: "center",
//           alignItems: "center",
//           minHeight: "calc(100vh - 64px)",
//         }}
//       >
//         <div
//           className="law-content-card"
//           style={{
//             maxWidth: 620,
//             width: "100%",
//             height: "auto",
//           }}
//         >
//           <div
//             className="law-scroll"
//             style={{
//               overflow: "hidden",
//               textAlign: "center",
//               padding: "60px 36px",
//             }}
//           >
//             <div
//               style={{
//                 width: 90,
//                 height: 90,
//                 margin: "0 auto 24px",
//                 borderRadius: "50%",
//                 background: "#eef2ff",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 color: "#1E40AF",
//                 fontSize: 42,
//               }}
//             >
//               <FileSearchOutlined />
//             </div>

//             <h1 className="law-title" style={{ marginBottom: 12 }}>
//               No Landing Page Available
//             </h1>

//             <p
//               className="law-tagline"
//               style={{
//                 marginBottom: 18,
//                 fontSize: 14,
//               }}
//             >
//               This service page has not been added yet.
//             </p>

//             <p
//               className="law-desc"
//               style={{
//                 maxWidth: 480,
//                 margin: "0 auto 28px",
//               }}
//             >
//               The landing page for this particular service is currently under
//               development. Please check again later or contact our team for more
//               information regarding this service.
//             </p>

//             <button
//               className="book-btn"
//               style={{
//                 maxWidth: 240,
//                 width: "100%",
//               }}
//               onClick={() => navigate(-1)}
//             >
//               <ArrowLeftOutlined className="btn-icon" />
//               Go Back
//             </button>

//             <div
//               className="footer-brand"
//               style={{
//                 justifyContent: "center",
//                 marginTop: 28,
//               }}
//             >
//               <strong>Abhinav Career Scope</strong> — Perfect Career Guide
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Default;

import React from "react";
import { useNavigate } from "react-router-dom";
import { WhatsAppOutlined, UserAddOutlined } from "@ant-design/icons";
import "./landing.css";

const services = [
  {
    icon: "🎓",
    title: "Admission Counselling",
    desc: "Expert guidance for Engineering, Medical, Law, Management and other professional courses.",
  },
  {
    icon: "📝",
    title: "Aptitude Tests",
    desc: "Scientific aptitude assessments for students from 8th to 12th Standard.",
  },
  {
    icon: "🌍",
    title: "Study Abroad",
    desc: "End-to-end counselling for students planning international education.",
  },
  {
    icon: "💼",
    title: "Career Guidance",
    desc: "Personalized counselling to help students choose the right career path.",
  },
  {
    icon: "📊",
    title: "Career Planning",
    desc: "Roadmaps and expert recommendations based on your interests and strengths.",
  },
  {
    icon: "🎯",
    title: "One-on-One Mentoring",
    desc: "Dedicated mentoring sessions with experienced career counsellors.",
  },
];

export default function Default() {
  const navigate = useNavigate();

  const phone = "+91 8484905526";

  const contactOnWhatsApp = () => {
    const message =
      "Hello CareerFront, I would like to know more about your career guidance services.";

    window.open(
      `https://wa.me/${phone.replace(
        /\D/g,
        ""
      )}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="law-page default-page">
      <div className="law-wrapper">

        {/* Left Flyer */}
        <div className="law-image-card">
          <img
            src="/Ram-Flayer.png"
            alt="CareerFront Flyer"
          />
        </div>

        {/* Right Content */}
        <div className="law-content-card">

          <div className="law-scroll">

            <h1 className="law-title">
              Welcome to CareerFront
            </h1>

            <p className="law-tagline">
              Your Future, Our Guidance
            </p>

            <p className="law-desc">
              CareerFront is your trusted career guidance platform dedicated
              to helping students make confident academic and career decisions.
              From aptitude assessments and admission counselling to study
              abroad guidance and personalized mentoring, we provide complete
              support for your future success.
            </p>

            <div className="sec-head">
              Our Services
            </div>

            <div className="benefit-grid">
              {services.map((service) => (
                <div className="b-card" key={service.title}>
                  <span className="b-icon">{service.icon}</span>

                  <h4>{service.title}</h4>

                  <p>{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="sec-head">
              Why Choose CareerFront?
            </div>

            <div className="mentor-card">

              <div className="mentor-avatar">
                PB
              </div>

              <div className="mentor-info">

                <h4>Priti Borse - Trusted Career Experts</h4>

                <p>
                  CareerFront has helped thousands of students discover the
                  right career path through personalized counselling,
                  scientific aptitude analysis, admission planning, and
                  expert mentorship.
                </p>

                <span className="award-pill">
                  ⭐ Your Career Success Partner
                </span>

              </div>

            </div>

          </div>

          {/* Footer */}
          <div className="law-footer">

            <div className="contact-section">

              <div className="contact-section-header">

                <p className="contact-eyebrow">
                  Contact Us
                </p>

                <p className="contact-copy">
                  Connect with CareerFront today and begin your journey
                  towards a brighter future with expert career guidance.
                </p>

              </div>

              <div className="contact-details">

                <div className="contact-item">

                  <span className="contact-label">
                    WhatsApp / Call
                  </span>

                  <span className="contact-value">
                    +91 8484905526
                  </span>

                </div>

                <div className="contact-item">

                  <span className="contact-label">
                    Location
                  </span>

                  <span className="contact-value">
                    Golden Arch, B1 Flat No. 4, 1st Floor,<br></br>
                    Shivangya Apt, Lane 4C, Bavdhan,<br></br>
                    Pune, Maharashtra 411021
                  </span>

                </div>

              </div>

            </div>

            <div className="btn-row">

              <button
                className="book-btn"
                onClick={contactOnWhatsApp}
              >
                <WhatsAppOutlined className="btn-icon" />
                Contact Us
              </button>

              <button
                className="register-btn"
                onClick={() => navigate("/register")}
              >
                <UserAddOutlined className="btn-icon" />
                Create Student Account
              </button>

            </div>

            <div className="footer-brand">
              🚀 <strong>CareerFront</strong> — Your Future, Our Guidance
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}