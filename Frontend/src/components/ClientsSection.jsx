import React from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Truck, ArrowRight } from "react-feather";
import rudraRides from "../assets/images/rudra.png";
import edupravahaa from "../assets/images/Edupravahaa.png";

const products = [
  {
    name: "Edupravahaa",
    tagline: "Learn. Practice. Get Placed.",
    logo: edupravahaa,
    description: "IT courses with live classes, offline practice with instructors, 3-month guaranteed internship, and placement support.",
    link: "/edupravahaa",
    cta: "View Courses",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
    icon: <BookOpen size={32} />,
  },
  {
    name: "Rudra Ride",
    tagline: "Smart. Safe. Simple.",
    logo: rudraRides,
    description: "Book rides easily, track in real time, and travel with confidence. Mobility built for your daily commute.",
    link: "/rudra-rides",
    cta: "Explore Rudra Ride",
    gradient: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
    icon: <Truck size={32} />,
  },
];

const ClientsSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="products"
      className="py-5"
      style={{
        background: "#fff",
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
            Our Products
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
            Two platforms. One vision.
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
            Education and mobility solutions designed to help you learn and move better.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {products.map((product, index) => (
            <div className="col-md-6 col-lg-5" key={index}>
              <div
                className="h-100 rounded-4 overflow-hidden bg-white border"
                style={{
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-md)",
                  transition: "all 0.35s ease",
                  cursor: "pointer",
                }}
                onClick={() => navigate(product.link)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-xl)";
                  e.currentTarget.style.borderColor = "rgba(14, 165, 233, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  e.currentTarget.style.borderColor = "var(--color-border)";
                }}
              >
                <div
                  className="p-4 text-white"
                  style={{
                    background: product.gradient,
                    minHeight: "120px",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <img
                    src={product.logo}
                    alt={product.name}
                    style={{
                      width: product.name === "Edupravahaa" ? 56 : 64,
                      height: product.name === "Edupravahaa" ? 56 : 64,
                      objectFit: "contain",
                      borderRadius: "12px",
                      background: "rgba(255,255,255,0.2)",
                      padding: product.name === "Edupravahaa" ? 8 : 4,
                    }}
                  />
                  <div>
                    <h3 className="mb-0 text-white" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                      {product.name}
                    </h3>
                    <p className="mb-0 opacity-90" style={{ fontSize: "0.95rem" }}>
                      {product.tagline}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <p
                    className="mb-4"
                    style={{
                      fontSize: "1rem",
                      color: "#475569",
                      lineHeight: 1.65,
                    }}
                  >
                    {product.description}
                  </p>
                  <span
                    className="d-inline-flex align-items-center gap-2 fw-semibold"
                    style={{ color: "#0ea5e9", fontSize: "0.95rem" }}
                  >
                    {product.cta} <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
