import React, { useState } from "react";
import { ChevronDown, ChevronRight, BookOpen, Check } from "react-feather";
import { fullStackWebDev, fullStackAppDev, manualTesting, toscaAutomation, awsDevOps } from "../data/curriculumData";

const CurriculumAccordion = ({ course, isOpen, onToggle, defaultColor = "#0ea5e9" }) => {
  const color = course.color || defaultColor;

  return (
    <div
      className="curriculum-card"
      style={{
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        marginBottom: "1rem",
        boxShadow: isOpen ? "0 8px 32px rgba(0,0,0,0.1)" : "0 2px 12px rgba(0,0,0,0.06)",
        border: "1px solid rgba(0,0,0,0.06)",
        transition: "all 0.3s ease",
      }}
    >
      <button
        onClick={onToggle}
        className="w-100 border-0 d-flex align-items-center justify-content-between p-4 text-start"
        style={{
          background: isOpen ? `${color}08` : "#fff",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
      >
        <span className="d-flex align-items-center" style={{ gap: "14px" }}>
          <span
            className="d-flex align-items-center justify-content-center rounded-2"
            style={{
              width: "48px",
              height: "48px",
              background: color,
              color: "white",
            }}
          >
            <BookOpen size={22} />
          </span>
          <div>
            <span style={{ fontSize: "clamp(1.1rem, 1.4vw, 1.25rem)", fontWeight: 700, color: "#0f172a" }}>
              {course.title}
            </span>
            {course.subtitle && (
              <span style={{ display: "block", fontSize: "0.9rem", fontWeight: 500, color: "#64748b", marginTop: "2px" }}>
                {course.subtitle}
              </span>
            )}
          </div>
        </span>
        <span
          className="d-flex align-items-center justify-content-center rounded-circle"
          style={{
            width: "36px",
            height: "36px",
            background: isOpen ? `${color}20` : "rgba(0,0,0,0.05)",
            color: color,
            transition: "all 0.2s ease",
          }}
        >
          {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </span>
      </button>

      {isOpen && (
        <div
          className="p-4"
          style={{
            background: "#fafbfc",
            borderTop: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <div className="row g-4">
            {course.sections.map((section, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <div
                  className="h-100 p-3 rounded-3"
                  style={{
                    background: "#fff",
                    borderLeft: `4px solid ${color}`,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(0.9rem, 1.05vw, 1rem)",
                      fontWeight: 700,
                      color: "#0f172a",
                      marginBottom: "12px",
                      lineHeight: 1.3,
                    }}
                  >
                    {section.title}
                  </div>
                  {section.topics ? (
                    <ul className="mb-0 ps-0" style={{ listStyle: "none" }}>
                      {section.topics.map((topic, i) => (
                        <li
                          key={i}
                          className="d-flex align-items-start gap-2 mb-2"
                          style={{
                            fontSize: "clamp(0.82rem, 0.95vw, 0.95rem)",
                            color: "#475569",
                            lineHeight: 1.5,
                          }}
                        >
                          <Check size={14} style={{ color, flexShrink: 0, marginTop: "4px" }} />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  ) : section.subsections ? (
                    <div>
                      {section.subsections.map((sub, j) => (
                        <div key={j} className="mb-3">
                          <div
                            style={{
                              fontSize: "clamp(0.85rem, 0.95vw, 0.95rem)",
                              fontWeight: 600,
                              color: "#334155",
                              marginBottom: "6px",
                            }}
                          >
                            {sub.title}
                          </div>
                          <ul className="mb-0 ps-0" style={{ listStyle: "none" }}>
                            {sub.items.map((item, k) => (
                              <li
                                key={k}
                                className="d-flex align-items-start gap-2 mb-1"
                                style={{
                                  fontSize: "clamp(0.8rem, 0.9vw, 0.9rem)",
                                  color: "#64748b",
                                  lineHeight: 1.5,
                                }}
                              >
                                <span style={{ color, flexShrink: 0 }}>•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

function CurriculumSection({ defaultExpanded = null }) {
  const [openCourse, setOpenCourse] = useState(defaultExpanded);

  React.useEffect(() => {
    if (defaultExpanded) {
      setOpenCourse(defaultExpanded);
    }
  }, [defaultExpanded]);

  const courses = [
    { id: "fullstack", ...fullStackWebDev },
    { id: "fullstackapp", ...fullStackAppDev },
    { id: "manual", ...manualTesting },
    { id: "tosca", ...toscaAutomation },
    { id: "aws", ...awsDevOps },
  ];

  return (
    <div
      className="py-5"
      style={{
        background: "#f8fafc",
        paddingTop: "clamp(5rem, 10vw, 8rem)",
        paddingBottom: "clamp(5rem, 10vw, 8rem)",
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <p
            style={{
              fontSize: "clamp(0.85rem, 1vw, 0.95rem)",
              fontWeight: 600,
              color: "#0ea5e9",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Detailed Syllabus
          </p>
          <h2
            className="mb-3"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#0f172a",
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
            }}
          >
            Course Curriculum
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
              color: "#64748b",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Select a course to view the complete curriculum and topics covered
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-11 col-xl-10">
            {courses.map((course) => (
              <CurriculumAccordion
                key={course.id}
                course={course}
                isOpen={openCourse === course.id}
                onToggle={() => setOpenCourse(openCourse === course.id ? null : course.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurriculumSection;
