import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import edupravahaa from "../assets/images/traning.jpg";
import { CheckCircle, Code, Smartphone, Search, Cpu, Cloud, BookOpen, ArrowRight, Briefcase, Monitor, TrendingUp, Award, Folder, Users } from "react-feather";
import CurriculumSection from "../components/CurriculumSection";
import "../styles/Edupravahaa.css";

function EDUPravahaa() {
  const curriculumRef = useRef(null);
  const [expandedCurriculum, setExpandedCurriculum] = useState(null);

  const scrollToCurriculum = (courseId) => {
    setExpandedCurriculum(courseId);
    curriculumRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const courseColors = {
    fullstack: { bg: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)", light: "#dcfce7", border: "#22c55e" },
    fullstackapp: { bg: "linear-gradient(135deg, #eab308 0%, #ca8a04 100%)", light: "#fef9c3", border: "#eab308" },
    manual: { bg: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)", light: "#e0f2fe", border: "#0ea5e9" },
    tosca: { bg: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)", light: "#ede9fe", border: "#8b5cf6" },
    aws: { bg: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)", light: "#fffbeb", border: "#f59e0b" },
  };

  const features = [
    {
      title: "3 Months Guaranteed Internship",
      desc: "Get hands-on industry experience with our guaranteed internship program after completing your course.",
    },
    {
      title: "Online Training + Offline Practice with Instructor",
      desc: "Learn through online classes, and practice offline with your instructor at our centre for hands-on guidance.",
    },
    {
      title: "Placement Assistance",
      desc: "Resume building, mock interviews, and dedicated job support to help you land your dream role.",
    },
    {
      title: "Expert IT Trainers",
      desc: "Learn from top professionals with real-world experience in software development and IT solutions.",
    },
    {
      title: "Live Interactive Classes",
      desc: "Join engaging live sessions packed with coding challenges, discussions, and projects.",
    },
    {
      title: "Cutting-edge Courses",
      desc: "Master technologies like AI, Web Development, DevOps, and Data Science through practical training.",
    },
  ];

  return (
    <section style={{
      fontFamily: '"Poppins", sans-serif',
      background: '#ffffff',
      color: '#222',
      overflowX: 'hidden',
      paddingTop: '80px'
    }}>
      {/* Hero — Student-attractive with mesh gradient */}
      <div className="position-relative overflow-hidden" style={{
        background: 'var(--gradient-hero)',
        paddingTop: 'clamp(6rem, 14vw, 9rem)',
        paddingBottom: 'clamp(4rem, 10vw, 6rem)',
        minHeight: 'clamp(400px, 55vh, 520px)'
      }}>
        <div className="position-absolute" style={{ top: '-20%', right: '-10%', width: '55%', height: '80%', background: 'radial-gradient(ellipse, rgba(14, 165, 233, 0.2) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="position-absolute" style={{ bottom: '-15%', left: '-10%', width: '45%', height: '60%', background: 'radial-gradient(ellipse, rgba(249, 115, 22, 0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <div className="container position-relative">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-7">
              <p style={{
                fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
                fontWeight: 600,
                color: '#38bdf8',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1rem'
              }}>
                Education Platform
              </p>
              <h1 className="text-white mb-4" style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem'
              }}>
                Master Future-Ready Skills with{' '}
                <span style={{ color: '#38bdf8' }}>EDU PRAVAHAA</span>
              </h1>
              <p className="mb-4" style={{
                fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: 1.7,
                maxWidth: '520px'
              }}>
                Online training with live classes. Practice offline with your instructor at our centre for hands-on learning.
              </p>
              <div className="d-flex flex-wrap align-items-center gap-3">
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '0.5rem 1.25rem',
                  background: 'rgba(255,255,255,0.12)',
                  color: '#7dd3fc',
                  fontWeight: 600,
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(8px)'
                }}>
                  Launching April 2026
                </span>
                <Link to="/enroll" className="d-inline-flex align-items-center gap-2 text-decoration-none" style={{
                  padding: '0.7rem 1.75rem',
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  color: 'white',
                  fontWeight: 600,
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'clamp(0.9rem, 1vw, 1rem)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  border: 'none',
                  boxShadow: '0 8px 28px rgba(249, 115, 22, 0.4)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 12px 36px rgba(249, 115, 22, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 28px rgba(249, 115, 22, 0.4)';
                }}>
                  Enroll Now <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="col-lg-5 text-center text-lg-end">
              <img 
                src={edupravahaa} 
                alt="EDU PRAVAHAA Courses" 
                className="img-fluid" 
                style={{
                  maxWidth: '100%',
                  maxHeight: '320px',
                  objectFit: 'contain',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: '0 24px 56px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255,255,255,0.08)'
                }} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* What You Get — Glass cards with hover */}
      <div className="py-4 py-lg-5" style={{
        background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
        paddingTop: 'clamp(2.5rem, 5vw, 4rem)',
        paddingBottom: 'clamp(2.5rem, 5vw, 4rem)'
      }}>
        <div className="container">
          <p className="text-center mb-4" style={{
            fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.9)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>What You Get</p>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="h-100 d-flex align-items-center gap-4 p-4 rounded-4 edu-what-card" style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.22)',
                backdropFilter: 'blur(12px)',
                borderRadius: 'var(--radius-xl)'
              }}>
                <div className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{
                  width: '56px',
                  height: '56px',
                  background: 'rgba(255,255,255,0.25)',
                  color: 'white'
                }}>
                  <Briefcase size={28} />
                </div>
                <div>
                  <h3 className="text-white mb-1" style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.25rem)', fontWeight: 700 }}>3 Months Guaranteed Internship</h3>
                  <p className="mb-0" style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>Hands-on industry experience after course completion. Get an <strong>Internship Certificate</strong> on completion to boost your resume.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="h-100 d-flex align-items-center gap-4 p-4 rounded-4 edu-what-card" style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.22)',
                backdropFilter: 'blur(12px)',
                borderRadius: 'var(--radius-xl)'
              }}>
                <div className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{
                  width: '56px',
                  height: '56px',
                  background: 'rgba(255,255,255,0.25)',
                  color: 'white'
                }}>
                  <Monitor size={28} />
                </div>
                <div>
                  <h3 className="text-white mb-1" style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.25rem)', fontWeight: 700 }}>Online Training + Offline Practice</h3>
                  <p className="mb-0" style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>Learn online; practice offline with your instructor at our centre</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="h-100 d-flex align-items-center gap-4 p-4 rounded-4 edu-what-card" style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.22)',
                backdropFilter: 'blur(12px)',
                borderRadius: 'var(--radius-xl)'
              }}>
                <div className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{
                  width: '56px',
                  height: '56px',
                  background: 'rgba(255,255,255,0.25)',
                  color: 'white'
                }}>
                  <TrendingUp size={28} />
                </div>
                <div>
                  <h3 className="text-white mb-1" style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.25rem)', fontWeight: 700 }}>Placement Assistance</h3>
                  <p className="mb-0" style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>Resume building, mock interviews, job referrals & career guidance until you get placed.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="h-100 d-flex align-items-center gap-4 p-4 rounded-4 edu-what-card" style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.22)',
                backdropFilter: 'blur(12px)',
                borderRadius: 'var(--radius-xl)'
              }}>
                <div className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{
                  width: '56px',
                  height: '56px',
                  background: 'rgba(255,255,255,0.25)',
                  color: 'white'
                }}>
                  <Award size={28} />
                </div>
                <div>
                  <h3 className="text-white mb-1" style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.25rem)', fontWeight: 700 }}>Internship & Course Certificates</h3>
                  <p className="mb-0" style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>Earn industry-recognized certificates: course completion + internship certificate to stand out to employers.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="h-100 d-flex align-items-center gap-4 p-4 rounded-4 edu-what-card" style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.22)',
                backdropFilter: 'blur(12px)',
                borderRadius: 'var(--radius-xl)'
              }}>
                <div className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{
                  width: '56px',
                  height: '56px',
                  background: 'rgba(255,255,255,0.25)',
                  color: 'white'
                }}>
                  <Folder size={28} />
                </div>
                <div>
                  <h3 className="text-white mb-1" style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.25rem)', fontWeight: 700 }}>Live Projects & Lifelong LMS Access</h3>
                  <p className="mb-0" style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>Work on real-time projects and get <strong>lifelong free access</strong> to our Learning Management System (LMS)—courses, recordings & resources anytime.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="h-100 d-flex align-items-center gap-4 p-4 rounded-4 edu-what-card" style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.22)',
                backdropFilter: 'blur(12px)',
                borderRadius: 'var(--radius-xl)'
              }}>
                <div className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{
                  width: '56px',
                  height: '56px',
                  background: 'rgba(255,255,255,0.25)',
                  color: 'white'
                }}>
                  <Users size={28} />
                </div>
                <div>
                  <h3 className="text-white mb-1" style={{ fontSize: 'clamp(1.1rem, 1.3vw, 1.25rem)', fontWeight: 700 }}>Doubt Clearing & Mentorship</h3>
                  <p className="mb-0" style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>1-on-1 doubt sessions with instructors and dedicated mentorship throughout your learning journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section - Bento-style cards */}
      <div className="py-5" style={{
        background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 50%, #ffffff 100%)',
        paddingTop: 'clamp(5rem, 10vw, 8rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8rem)'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{
              display: 'inline-block',
              padding: '0.5rem 1.5rem',
              background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
              color: 'white',
              borderRadius: '100px',
              fontSize: 'clamp(0.8rem, 1vw, 0.9rem)',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              boxShadow: '0 4px 20px rgba(14, 165, 233, 0.35)'
            }}>Launching April 2026</span>
            <h2 className="mb-3" style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.03em',
              marginBottom: '1rem'
            }}>Our Courses</h2>
            <p style={{
              fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)',
              color: '#64748b',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.75
            }}>Industry-aligned programs designed to make you job-ready in high-demand tech roles</p>
            {/* Batch schedule */}
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
              <span className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill" style={{
                background: 'rgba(14, 165, 233, 0.12)',
                color: '#0284c7',
                fontWeight: 600,
                fontSize: 'clamp(0.9rem, 1vw, 1rem)',
                border: '1px solid rgba(14, 165, 233, 0.3)'
              }}>
                Weekdays batch — Monday to Friday
              </span>
              <span className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill" style={{
                background: 'rgba(14, 165, 233, 0.12)',
                color: '#0284c7',
                fontWeight: 600,
                fontSize: 'clamp(0.9rem, 1vw, 1rem)',
                border: '1px solid rgba(14, 165, 233, 0.3)'
              }}>
                Weekend batch — Saturday & Sunday
              </span>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              { icon: <Code size={32} />, title: 'Full Stack Web Development', desc: 'Master HTML5, CSS3, JavaScript, React JS, and Django REST Framework. Build production-ready web applications.', curriculumId: 'fullstack' },
              { icon: <Smartphone size={32} />, title: 'Full Stack App Development', desc: 'Learn cross-platform mobile app development with React Native. Create scalable apps for iOS and Android.', curriculumId: 'fullstackapp' },
              { icon: <Search size={32} />, title: 'Testing Manual', desc: 'Complete manual testing for Web, Mobile & API. SDLC, STLC, test design techniques, defect management.', curriculumId: 'manual' },
              { icon: <Cpu size={32} />, title: 'Testing Automation', desc: 'TOSCA automation for Web & API. Scriptless, model-based testing with Tricentis Tosca.', curriculumId: 'tosca' },
              { icon: <Cloud size={32} />, title: 'AWS & DevOps', desc: 'Cloud infrastructure on AWS, CI/CD, Docker, Kubernetes. Linux & networking foundations.', curriculumId: 'aws' }
            ].map((course, i) => {
              const colors = course.curriculumId ? courseColors[course.curriculumId] : courseColors.manual;
              return (
                <div className="col-md-6 col-lg-4" key={i}>
                  <div className="h-100 edu-course-card rounded-4 p-4 position-relative overflow-hidden" style={{
                    background: 'white',
                    border: `2px solid ${colors.border}22`,
                    minHeight: '340px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 24px 48px ${colors.border}25`;
                    e.currentTarget.style.borderColor = `${colors.border}44`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.borderColor = `${colors.border}22`;
                  }}>
                    <div className="position-absolute" style={{ top: 0, left: 0, right: 0, height: '4px', background: colors.bg }}></div>
                    <div className="d-flex align-items-start justify-content-between mb-3">
                      <div className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{
                        width: '56px',
                        height: '56px',
                        background: colors.bg,
                        color: 'white',
                        boxShadow: `0 8px 24px ${colors.border}40`
                      }}>
                        {course.icon}
                      </div>
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: colors.border,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        padding: '0.25rem 0.75rem',
                        background: colors.light,
                        borderRadius: '100px'
                      }}>April 2026</span>
                    </div>
                    <h3 className="mb-3" style={{
                      fontSize: 'clamp(1.15rem, 1.4vw, 1.3rem)',
                      color: '#0f172a',
                      fontWeight: 700,
                      lineHeight: 1.35,
                      marginBottom: '0.75rem'
                    }}>{course.title}</h3>
                    <p className="mb-4" style={{
                      fontSize: 'clamp(0.92rem, 1.05vw, 1rem)',
                      color: '#475569',
                      lineHeight: 1.7,
                      flex: 1
                    }}>{course.desc}</p>
                    {course.curriculumId && (
                      <button
                        onClick={() => scrollToCurriculum(course.curriculumId)}
                        className="btn w-100 d-flex align-items-center justify-content-center gap-2 border-0"
                        style={{
                          background: colors.light,
                          color: colors.border,
                          borderRadius: '12px',
                          padding: '0.65rem 1.25rem',
                          fontSize: '0.95rem',
                          fontWeight: 600,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <BookOpen size={18} /> View Curriculum
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Curriculum Section */}
      <div ref={curriculumRef}>
        <CurriculumSection defaultExpanded={expandedCurriculum} />
      </div>

      {/* Why Choose EDU PRAVAHAA - Redesigned */}
      <div className="py-5" style={{
        background: '#ffffff',
        paddingTop: 'clamp(5rem, 10vw, 8rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8rem)'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <p style={{
              fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
              fontWeight: 600,
              color: '#0ea5e9',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem'
            }}>Why Choose Us</p>
            <h2 className="mb-3" style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: '0.75rem'
            }}>Why Choose EDU PRAVAHAA?</h2>
            <p style={{
              fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.7
            }}>Comprehensive learning solutions designed for your success</p>
          </div>
          <div className="row g-4 justify-content-center">
            {features.map((f, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="h-100 d-flex flex-column p-4 rounded-3" style={{
                  background: '#f8fafc',
                  border: '1px solid rgba(14, 165, 233, 0.1)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#fff';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(14, 165, 233, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f8fafc';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.1)';
                }}>
                  <div className="d-flex align-items-center mb-3" style={{ gap: '12px' }}>
                    <div className="rounded-2 d-flex align-items-center justify-content-center flex-shrink-0" style={{
                      width: '48px',
                      height: '48px',
                      background: '#0ea5e9',
                      color: 'white'
                    }}>
                      <CheckCircle size={24} />
                    </div>
                    <h3 className="mb-0" style={{
                      fontSize: 'clamp(1.1rem, 1.3vw, 1.25rem)',
                      color: '#0f172a',
                      fontWeight: 700
                    }}>{f.title}</h3>
                  </div>
                  <p className="mb-0" style={{
                    fontSize: 'clamp(0.9rem, 1.05vw, 1rem)',
                    color: '#475569',
                    lineHeight: 1.65
                  }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transform Your IT Career - Redesigned CTA */}
      <div className="py-5" style={{
        background: 'linear-gradient(180deg, #0f172a 0%, #0c4a6e 100%)',
        paddingTop: 'clamp(5rem, 10vw, 8rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8rem)'
      }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <h2 className="text-white mb-4" style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.3
              }}>
                Transform Your IT Career with <span style={{ color: '#38bdf8' }}>EDU PRAVAHAA</span>
              </h2>
              <p className="mb-4" style={{
              fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
              color: 'rgba(255, 255, 255, 0.88)',
              lineHeight: 1.75
            }}>
                Edupravahaa launches in April 2026. Be the first to enroll and transform your career with industry-leading courses in Full Stack Development, Testing, and AWS DevOps.
              </p>
              <Link to="/enroll" className="d-inline-flex align-items-center gap-2 text-decoration-none edu-cta-btn" style={{
                padding: '0.75rem 1.75rem',
                background: 'linear-gradient(135deg, #f97316, #ea580c)',
                color: 'white',
                fontWeight: 600,
                borderRadius: 'var(--radius-full)',
                fontSize: 'clamp(1rem, 1.2vw, 1.1rem)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 8px 28px rgba(249, 115, 22, 0.4)'
              }}>
                Enroll Now — Launching April <ArrowRight size={18} />
              </Link>
            </div>
            <div className="col-lg-5">
              <div className="p-4 rounded-3" style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div className="row g-3 text-center">
                  <div className="col-6">
                    <div style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)', fontWeight: 700, color: '#38bdf8' }}>5+</div>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Courses</div>
                  </div>
                  <div className="col-6">
                    <div style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)', fontWeight: 700, color: '#38bdf8' }}>Apr</div>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Launch 2026</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EDUPravahaa;
