import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate instead of Navigate
import axios from "axios";
function Contact() {
  const navigate = useNavigate(); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:4001/contact", data);
      navigate("/"); // Navigate to home page after successful signup
    } catch (error) {
      if (error.response) {
        console.log(error);
        alert("Error: " + error.response.data.message);
      }
    }
  };
  return (
    <div className="flex h-screen items-center justify-center border-2">
      <div className="w-[400px] relative p-6 bg-white shadow-md rounded-md">
        <h3 className="font-bold text-lg text-center mb-4">Contact Us</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-1 border rounded-md outline-none"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              placeholder="Enter your message"
              className="w-full px-3 py-1 border rounded-md outline-none"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className="text-red-500">Message is required</span>
            )}
          </div>

          <div className="flex justify-between items-center">
            <button className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
