import React, { createContext, useState } from "react";
import axios from "axios";

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const submitRegistration = async (formData) => {
    setLoading(true);

    try {
      // API payload for enrollments endpoint
      const payload = {
        fullname: formData.get("fullname") || "",
        email: formData.get("email") || "",
        phone: formData.get("phone") || "",
        course: formData.get("course") || "",
        batch: formData.get("batch") || "",
        message: formData.get("message") || "",
      };

      // Backend is usually running on 8000 when using `py manage.py runserver`
      // const apiUrl = "http://127.0.0.1:8001/api/enrollments/";
      const apiUrl = "/api/enrollments/";
      const response = await axios.post(apiUrl, payload);
      return response.data;
    } catch (err) {


      // axios error handling
      if (err.response) {
        throw new Error(err.response.data.message || JSON.stringify(err.response.data));
      } else if (err.request) {
        throw new Error("No response from server");
      } else {
        throw err;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegistrationContext.Provider value={{ submitRegistration, loading }}>
      {children}
    </RegistrationContext.Provider>
  );
};