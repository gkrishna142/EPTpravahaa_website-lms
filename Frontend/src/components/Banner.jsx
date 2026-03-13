import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { BookOpen, Truck, ArrowRight } from "react-feather";

function Banner() {
  const navigate = useNavigate();

  return (
    <>
      {/* Single hero — clean and focused */}
      <section
        className="position-relative overflow-hidden"
        style={{
          minHeight: "clamp(560px, 85vh, 720px)",
          marginTop: "80px",
          display: "flex",
          alignItems: "center",
          fontFamily: 'var(--font-sans, "Poppins", sans-serif)',
          background: "var(--gradient-hero)",
        }}
      >
        {/* Background shapes */}
        <div
          className="position-absolute"
          style={{
            top: "-30%",
            right: "-15%",
            width: "60%",
            height: "80%",
            background: "radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="position-absolute"
          style={{
            bottom: "-20%",
            left: "-10%",
            width: "45%",
            height: "50%",
            background: "radial-gradient(circle, rgba(249, 115, 22, 0.12) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="position-absolute"
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
            backgroundSize: "32px 32px",
            pointerEvents: "none",
          }}
        />

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center g-4 g-lg-5 py-5">
            <div className="col-lg-7">
              <p
                style={{
                  fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.85)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                EDU TECH SOLUTIONS
              </p>
              <h1
                className="text-white mb-4"
                style={{
                  fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  marginBottom: "1.25rem",
                }}
              >
                Learn Smarter.
                <br />
                <span style={{ color: "#38bdf8" }}>Move Better.</span>
              </h1>
              <p
                className="mb-4"
                style={{
                  fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
                  color: "rgba(255, 255, 255, 0.88)",
                  lineHeight: 1.7,
                  maxWidth: "480px",
                }}
              >
                Edupravahaa powers your learning with live classes and hands-on practice. Rudra Ride makes every journey safe and simple.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => navigate("/edupravahaa")}
                  className="d-inline-flex align-items-center gap-2 border-0"
                  style={{
                    padding: "0.75rem 1.75rem",
                    background: "linear-gradient(135deg, #f97316, #ea580c)",
                    color: "#fff",
                    fontWeight: 600,
                    borderRadius: "var(--radius-full)",
                    fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)",
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
                  Explore Courses <ArrowRight size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/rudra-rides")}
                  className="d-inline-flex align-items-center gap-2 border-0"
                  style={{
                    padding: "0.75rem 1.75rem",
                    background: "rgba(255,255,255,0.12)",
                    color: "#fff",
                    fontWeight: 600,
                    borderRadius: "var(--radius-full)",
                    fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  }}
                >
                  Rudra Ride
                </button>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block">
              <div className="d-flex flex-column gap-3">
                <div
                  className="d-flex align-items-center gap-3 p-4 rounded-3"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    backdropFilter: "blur(10px)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onClick={() => navigate("/edupravahaa")}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.14)";
                    e.currentTarget.style.transform = "translateX(8px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3"
                    style={{
                      width: 56,
                      height: 56,
                      background: "linear-gradient(135deg, #0ea5e9, #0284c7)",
                      color: "#fff",
                    }}
                  >
                    <BookOpen size={28} />
                  </div>
                  <div>
                    <div className="text-white fw-bold" style={{ fontSize: "1.1rem" }}>Edupravahaa</div>
                    <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.8)" }}>Courses · Internship · Placements</div>
                  </div>
                  <ArrowRight size={20} className="ms-auto text-white-50" />
                </div>
                <div
                  className="d-flex align-items-center gap-3 p-4 rounded-3"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    backdropFilter: "blur(10px)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onClick={() => navigate("/rudra-rides")}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.14)";
                    e.currentTarget.style.transform = "translateX(8px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3"
                    style={{
                      width: 56,
                      height: 56,
                      background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                      color: "#fff",
                    }}
                  >
                    <Truck size={28} />
                  </div>
                  <div>
                    <div className="text-white fw-bold" style={{ fontSize: "1.1rem" }}>Rudra Ride</div>
                    <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.8)" }}>Smart mobility · Safe rides</div>
                  </div>
                  <ArrowRight size={20} className="ms-auto text-white-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short intro strip */}
      <section
        className="text-center py-4"
        style={{
          background: "#fff",
          borderBottom: "1px solid var(--color-border)",
          fontFamily: 'var(--font-sans, "Poppins", sans-serif)',
        }}
      >
        <div className="container">
          <p className="mb-0" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)", color: "#64748b", lineHeight: 1.7, maxWidth: "720px", margin: "0 auto" }}>
            <Link to="/edupravahaa" className="text-decoration-none fw-semibold" style={{ color: "#0ea5e9" }}>Edupravahaa</Link> for learning and growth.{" "}
            <span className="fw-semibold" style={{ color: "#0ea5e9" }}>Rudra Ride</span> for everyday travel. One platform, endless possibilities.
          </p>
        </div>
      </section>
    </>
  );
}

export default Banner;
