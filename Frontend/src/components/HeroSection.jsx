import React from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Truck, ArrowRight, Play } from "react-feather";
import "../styles/HeroSection.css";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__glow hero__glow--right" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__subtitle">EDU TECH SOLUTIONS</p>
          <h1 className="hero__title">
            Learn Smarter.
            <br />
            <span className="hero__title-highlight">Build Better.</span>
          </h1>
          <p className="hero__desc">
            Live courses, hands-on practice, and placement support. Get job-ready with expert-led training and a guaranteed internship program.
          </p>
          <div className="hero__cta-wrap">
            <button
              type="button"
              className="hero__btn-primary"
              onClick={() => navigate("/edupravahaa")}
            >
              Explore Courses <ArrowRight size={18} />
            </button>
            <button
              type="button"
              className="hero__btn-secondary"
              onClick={() => navigate("/edupravahaa")}
            >
              <Play size={18} /> Watch Demo
            </button>
          </div>
        </div>

        <div className="hero__cards">
          <a
            href="/edupravahaa"
            className="hero__card"
            onClick={(e) => {
              e.preventDefault();
              navigate("/edupravahaa");
            }}
          >
            <div className="hero__card-icon hero__card-icon--edu">
              <BookOpen size={24} />
            </div>
            <div className="hero__card-text">
              <strong>Edupravahaa</strong>
              <span>Courses · Internship · Placements</span>
            </div>
            <ArrowRight size={18} className="hero__card-arrow" />
          </a>
          <a
            href="/rudra-rides"
            className="hero__card"
            onClick={(e) => {
              e.preventDefault();
              navigate("/rudra-rides");
            }}
          >
            <div className="hero__card-icon hero__card-icon--rudra">
              <Truck size={24} />
            </div>
            <div className="hero__card-text">
              <strong>Rudra Ride</strong>
              <span>Smart mobility · Safe rides</span>
            </div>
            <ArrowRight size={18} className="hero__card-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
