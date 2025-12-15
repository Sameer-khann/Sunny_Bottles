import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";



const Contact = () => {
  
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    postalCode: "",
    file: null,
  });
  const navigate = useNavigate();

  function changeHandler(event) {
    const { name, value, files, type } = event.target;

    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }

  async function submitHandler(event) {
    event.preventDefault();

    if (loading) return; // prevent double click
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("postalCode", formData.postalCode);

    if (formData.file) {
      formDataToSend.append("file", formData.file);
    }

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          postalCode: "",
          file: null,
        });
      } else {
        toast.error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }


  // async function submitHandler(event) {
  //   event.preventDefault();

  //   const formDataToSend = new FormData();
  //   formDataToSend.append("firstName", formData.firstName);
  //   formDataToSend.append("lastName", formData.lastName);
  //   formDataToSend.append("email", formData.email);
  //   formDataToSend.append("message", formData.message);
  //   formDataToSend.append("postalCode", formData.postalCode);

  //   if (formData.file) {
  //     formDataToSend.append("file", formData.file);
  //   }

  //   try {
  //     const response = await fetch("http://localhost:5000/send-email", {
  //       method: "POST",
  //       body: formDataToSend,
  //     });

  //     const data = await response.json();

  //     if (data.success) {
  //       alert(`✅ ${data.message}`);
  //     } else {
  //       alert(`❌ ${data.message}`);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("⚠️ Something went wrong. Check console for details.");
  //   }
  // }

  return (
    <div className="flex flex-col items-center py-16 px-6 bg-[#FDF2D2] min-h-screen">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#FF5203] font-jockey text-center leading-tight">
        LET’S TALK FLAVOUR
      </h1>

      <p className="text-center text-gray-600 mt-3 mb-10 text-sm sm:text-lg max-w-xl">
        Got a question, craving, or collaboration idea? We’d love to hear from you. At Sunny’s in a Bottle,
        we’re all about conversations that start with food and end with smiles.
      </p>

      {/* Form */}
      <form
        onSubmit={submitHandler}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl"
      >
        {/* First & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF5203] outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF5203] outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF5203] outline-none"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={changeHandler}
            rows={5}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF5203] outline-none"
          />
        </div>

        {/* File Upload */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Attach File
          </label>
          <input
            type="file"
            name="file"
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 cursor-pointer focus:ring-2 focus:ring-[#FF5203] outline-none"
          />
        </div>

        {/* Postal Code */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Postal Code
          </label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF5203] outline-none"
          />
        </div>

        {/* Submit */}

        <button
          type="submit"
          disabled={loading}
          className={`flex items-center justify-center gap-2 bg-[#FF5203] text-white text-lg px-8 py-3 rounded-full transition-all duration-200 ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-orange-600 active:scale-95"}`}
        >
          {loading ? (
            <>
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Sending...
            </>
          ) : (
            "Submit"
          )}
        </button>


        {/* <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#FF5203] text-white text-lg px-8 py-3 rounded-full hover:bg-orange-600 transition"
          >
            Submit
          </button>
        </div> */}
      </form>
      <p className="text-center text-gray-600 mt-10 mb-4 text-base sm:text-lg max-w-xl">
        Bring Sunny’s home. Bring the flavour home.
      </p>
      <button
        onClick={() => navigate("/products")}
        className="mt-2 px-6 py-2 border-2 border-[#FF5203] text-[#FF5203] hover:bg-[#FF5203] hover:text-white transition flex items-center gap-2 rounded-md"
      >
        Shop Now
      </button>

    </div>
  );
};

export default Contact;
