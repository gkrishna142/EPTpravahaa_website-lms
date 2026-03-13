import React from "react";
import { BookOpen, Shield, Users, TrendingUp } from "react-feather";

const features = [
  {
    icon: <BookOpen size={28} />,
    title: "Quality Learning",
    description: "Expert-led courses and hands-on practice to make you job-ready.",
  },
  {
    icon: <Shield size={28} />,
    title: "Safe & Reliable",
    description: "Trusted education and mobility solutions you can count on.",
  },
  {
    icon: <Users size={28} />,
    title: "Built for You",
    description: "Student-first learning and rider-first transport experiences.",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Real Impact",
    description: "Internships, placements, and smarter travel for your growth.",
  },
];

const FeatureSection = () => {
  return (
    <section
      id="about"
      className="py-5"
      style={{
        background: "#f8fafc",
        paddingTop: "clamp(4rem, 10vw, 6rem)",
        paddingBottom: "clamp(4rem, 10vw, 6rem)",
        fontFamily: 'var(--font-sans, "Poppins", sans-serif)',
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <span
            style={{
              display: "inline-block",
              padding: "0.4rem 1.25rem",
              background: "rgba(14, 165, 233, 0.1)",
              color: "#0284c7",
              borderRadius: "var(--radius-full)",
              fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
              border: "1px solid rgba(14, 165, 233, 0.2)",
            }}
          >
            Why Us
          </span>
          <h2
            className="mb-3"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Our Strengths
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 1.3vw, 1.1rem)",
              color: "#64748b",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            We deliver excellence through innovation and focus on your success.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {features.map((item, index) => (
            <div className="col-sm-6 col-lg-3" key={index}>
              <div
                className="h-100 p-4 rounded-3 bg-white text-center"
                style={{
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-sm)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-lg)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "rgba(14, 165, 233, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "var(--color-border)";
                }}
              >
                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                  style={{
                    width: 56,
                    height: 56,
                    background: "var(--gradient-cta)",
                    color: "#fff",
                    boxShadow: "0 6px 20px rgba(14, 165, 233, 0.3)",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  className="mb-2"
                  style={{
                    fontSize: "clamp(1.1rem, 1.3vw, 1.25rem)",
                    fontWeight: 700,
                    color: "#0f172a",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="mb-0"
                  style={{
                    fontSize: "clamp(0.9rem, 1.05vw, 1rem)",
                    color: "#64748b",
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
