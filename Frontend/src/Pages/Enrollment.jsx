import React, { useState, useContext } from "react";
import { User, Mail, Phone, BookOpen, Calendar, Send } from "react-feather";
import { RegistrationContext } from "../Contextapi/RegistrationContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const COURSES = [
  "Full Stack Web Development",
  "Full Stack App Development",
  "Manual Testing",
  "Testing Automation",
  "AWS & DevOps",
];

const BATCHES = [
  { value: "Weekdays (Monday - Friday)", label: "Weekdays (Monday - Friday)" },
  { value: "Weekend (Saturday - Sunday)", label: "Weekend (Saturday - Sunday)" },
];

function Enrollment() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    course: "",
    batch: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const { submitRegistration, loading } = useContext(RegistrationContext) || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));

    setErrors((prev) => {
      const next = { ...prev };
      const validate = () => {
        if (name === "fullname") {
          if (!value.trim()) return "Full name is required";
          if (!/^[A-Za-z\s]+$/.test(value)) return "Enter a valid name";
          if (value.length > 50) return "Name must be under 50 characters";
        }
        if (name === "email") {
          if (!value.trim()) return "Email is required";
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email";
        }
        if (name === "phone") {
          if (!value.trim()) return "Phone number is required";
          if (!/^\d{10}$/.test(value)) return "Phone must be 10 digits";
        }
        if (name === "course") {
          if (!value.trim()) return "Please select a course";
        }
        if (name === "batch") {
          if (!value.trim()) return "Please select a batch";
        }
        return null;
      };
      const err = validate();
      if (err) next[name] = err;
      else delete next[name];
      return next;
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullname.trim()) newErrors.fullname = "Full name is required";
    else if (!/^[A-Za-z\s]+$/.test(formData.fullname)) newErrors.fullname = "Enter a valid name";
    else if (formData.fullname.length > 50) newErrors.fullname = "Name must be under 50 characters";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone must be 10 digits";

    if (!formData.course.trim()) newErrors.course = "Please select a course";

    if (!formData.batch.trim()) newErrors.batch = "Please select a batch";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const data = new FormData();
    data.append("fullname", formData.fullname);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("course", formData.course);
    data.append("batch", formData.batch);
    if (formData.message) data.append("message", formData.message);

    try {
      if (!submitRegistration) {
        toast.warning("Submit function not available. Please contact us directly.");
      } else {
        await submitRegistration(data);
        toast.success("Enrollment submitted successfully! We'll contact you soon.");
        setFormData({ fullname: "", email: "", phone: "", course: "", batch: "", message: "" });
        setErrors({});
      }
    } catch (err) {
      toast.error("Enrollment failed: " + (err?.message || "Please try again or contact us."));
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "10px",
    border: "1px solid #e2e8f0",
    fontSize: "1rem",
    transition: "border-color 0.2s ease",
  };

  const errorInputStyle = (field) => ({
    ...inputStyle,
    borderColor: errors[field] ? "#ef4444" : "#e2e8f0",
  });

  return (
    <section style={{
      fontFamily: 'var(--font-sans, "Poppins", sans-serif)',
      background: "linear-gradient(180deg, var(--color-bg-subtle) 0%, var(--color-bg-muted) 100%)",
      minHeight: "100vh",
      paddingTop: "100px",
      paddingBottom: "4rem",
    }}>
      <ToastContainer position="top-right" autoClose={4000} />

      <div className="container">
        {/* Header */}
        <div className="text-center mb-5" style={{ paddingTop: "clamp(2rem, 4vw, 4rem)" }}>
          <p style={{
            fontSize: "clamp(0.85rem, 1vw, 0.95rem)",
            fontWeight: 600,
            color: "#0ea5e9",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}>
            Student Enrollment
          </p>
          <h1 className="mb-3" style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "#0f172a",
            letterSpacing: "-0.02em",
          }}>
            Enroll in EDU PRAVAHAA Courses
          </h1>
          <p style={{
            fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
            color: "#64748b",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            Fill in your details below. Our team will verify and get back to you shortly.
          </p>
        </div>

        {/* Form Card */}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <div className="p-4 p-md-5 rounded-4" style={{
              background: "#fff",
              boxShadow: "var(--shadow-xl)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
            }}>
              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-4">
                  <div className="col-12 col-md-6">
                    <label className="d-flex align-items-center gap-2 mb-2" style={{ fontWeight: 600, color: "#334155" }}>
                      <User size={18} style={{ color: "#0ea5e9" }} /> Full Name
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      style={errorInputStyle("fullname")}
                    />
                    {errors.fullname && <span className="d-block mt-1" style={{ fontSize: "0.85rem", color: "#ef4444" }}>{errors.fullname}</span>}
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="d-flex align-items-center gap-2 mb-2" style={{ fontWeight: 600, color: "#334155" }}>
                      <Mail size={18} style={{ color: "#0ea5e9" }} /> Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={errorInputStyle("email")}
                    />
                    {errors.email && <span className="d-block mt-1" style={{ fontSize: "0.85rem", color: "#ef4444" }}>{errors.email}</span>}
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="d-flex align-items-center gap-2 mb-2" style={{ fontWeight: 600, color: "#334155" }}>
                      <Phone size={18} style={{ color: "#0ea5e9" }} /> Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      style={errorInputStyle("phone")}
                    />
                    {errors.phone && <span className="d-block mt-1" style={{ fontSize: "0.85rem", color: "#ef4444" }}>{errors.phone}</span>}
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="d-flex align-items-center gap-2 mb-2" style={{ fontWeight: 600, color: "#334155" }}>
                      <BookOpen size={18} style={{ color: "#0ea5e9" }} /> Course Interested
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      style={errorInputStyle("course")}
                    >
                      <option value="">Select a course</option>
                      {COURSES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    {errors.course && <span className="d-block mt-1" style={{ fontSize: "0.85rem", color: "#ef4444" }}>{errors.course}</span>}
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="d-flex align-items-center gap-2 mb-2" style={{ fontWeight: 600, color: "#334155" }}>
                      <Calendar size={18} style={{ color: "#0ea5e9" }} /> Preferred Batch
                    </label>
                    <select
                      name="batch"
                      value={formData.batch}
                      onChange={handleChange}
                      style={errorInputStyle("batch")}
                    >
                      <option value="">Select a batch</option>
                      {BATCHES.map((b) => (
                        <option key={b.value} value={b.value}>{b.label}</option>
                      ))}
                    </select>
                    {errors.batch && <span className="d-block mt-1" style={{ fontSize: "0.85rem", color: "#ef4444" }}>{errors.batch}</span>}
                  </div>

                  <div className="col-12">
                    <label className="d-flex align-items-center gap-2 mb-2" style={{ fontWeight: 600, color: "#334155" }}>
                      Message / Qualifications (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Brief about your background, qualifications, or any questions..."
                      rows={4}
                      style={inputStyle}
                    />
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-100 d-flex align-items-center justify-content-center gap-2 border-0"
                      style={{
                        padding: "0.9rem 2rem",
                        background: "linear-gradient(135deg, #f97316, #ea580c)",
                        color: "white",
                        fontWeight: 600,
                        borderRadius: "var(--radius-full)",
                        fontSize: "1.05rem",
                        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                        boxShadow: "0 8px 28px rgba(249, 115, 22, 0.35)",
                      }}
                      onMouseEnter={(e) => {
                        if (loading) return;
                        e.currentTarget.style.transform = "scale(1.02)";
                        e.currentTarget.style.boxShadow = "0 12px 36px rgba(249, 115, 22, 0.45)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "0 8px 28px rgba(249, 115, 22, 0.35)";
                      }}
                    >
                      {loading ? "Submitting..." : (
                        <>
                          <Send size={20} /> Submit Enrollment
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Enrollment;
