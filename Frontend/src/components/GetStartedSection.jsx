import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight } from "react-feather";

const GetStartedSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="py-5"
      style={{
        background: "var(--gradient-footer)",
        fontFamily: 'var(--font-sans, "Poppins", sans-serif)',
        paddingTop: "clamp(4rem, 10vw, 6rem)",
        paddingBottom: "clamp(4rem, 10vw, 6rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="position-absolute"
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 70% 30%, rgba(14, 165, 233, 0.2) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />
      <div className="container position-relative text-center">
        <h2
          className="text-white mb-3"
          style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.25,
          }}
        >
          Ready to get started?
        </h2>
        <p
          className="text-white mb-4 mx-auto"
          style={{
            fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
            maxWidth: "560px",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.9)",
          }}
        >
          Join <Link to="/edupravahaa" className="text-decoration-none fw-semibold" style={{ color: "#38bdf8" }}>Edupravahaa</Link> for courses and placements, or try{" "}
          <span className="fw-semibold" style={{ color: "#38bdf8" }}>Rudra Ride</span> for your next trip. We’re here to help.
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <button
            type="button"
            onClick={() => navigate("/enroll")}
            className="d-inline-flex align-items-center gap-2 border-0"
            style={{
              padding: "0.75rem 1.75rem",
              background: "linear-gradient(135deg, #f97316, #ea580c)",
              color: "#fff",
              fontWeight: 600,
              borderRadius: "var(--radius-full)",
              fontSize: "clamp(1rem, 1.2vw, 1.1rem)",
              boxShadow: "0 8px 28px rgba(249, 115, 22, 0.4)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.04)";
              e.currentTarget.style.boxShadow = "0 12px 36px rgba(249, 115, 22, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(249, 115, 22, 0.4)";
            }}
          >
            Enroll Now <ArrowRight size={18} />
          </button>
          <button
            type="button"
            onClick={() => navigate("/contact")}
            className="d-inline-flex align-items-center gap-2 border-0"
            style={{
              padding: "0.75rem 1.75rem",
              background: "rgba(255,255,255,0.12)",
              color: "#fff",
              fontWeight: 600,
              borderRadius: "var(--radius-full)",
              fontSize: "clamp(1rem, 1.2vw, 1.1rem)",
              border: "1px solid rgba(255,255,255,0.35)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.12)";
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
