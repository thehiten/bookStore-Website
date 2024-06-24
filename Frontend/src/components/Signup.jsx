import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate instead of Navigate
import axios from "axios";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate(); // Use useNavigate hook to programmatically navigate

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:4001/user/signup", data);
      console.log("Signup successful:", response.data);

      if (response) {
        localStorage.setItem("users", JSON.stringify(response.data));
      }

      alert("Signup successful");
      navigate("/"); // Navigate to home page after successful signup
    } catch (error) {
      if (error.response) {
        console.log(error);
        alert("Error: " + error.response.data.message);
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center border-20">
      <div className="w-[400px] relative p-6 bg-white shadow-md rounded-md">
        <Link
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </Link>
        <h3 className="font-bold text-lg text-center mb-4">Signup</h3>
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
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-1 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
          </div>
          <div className="flex justify-between items-center">
            <button className="bg-purple-500 text-white rounded-md px-4 py-2 hover:bg-purple-700 duration-200">
              Signup
            </button>
            <p>
              Have account?{" "}
              <a
                className="bg-black text-white p-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                onClick={() => {
                  document.getElementById("my_modal_3").showModal();
                }}
              >
                Login
              </a>
              {/* It's better to not render Login component here directly */}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
