import React, { useState, useEffect } from "react";
import { Triangle } from "react-feather";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400 ) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        className="btn btn-primary d-none d-lg-block position-fixed"
        onClick={scrollToTop}
        style={{
          bottom: '20px',
          right: '20px',
          borderRadius: '12px',
          padding: '0.6rem 1.2rem',
          background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
          border: 'none',
          boxShadow: '0 6px 20px rgba(14, 165, 233, 0.4)',
          transition: 'all 0.2s ease',
          zIndex: 1000
        }}
      >
        Back To Top <Triangle size={16} color="white" />
      </button>
    )
  );
}

export default BackToTop;
