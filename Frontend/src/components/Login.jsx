import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:4001/user/login", data);
      console.log("login successful:", response.data);
      if (response) {
        localStorage.setItem("users", JSON.stringify(response.data));
        document.getElementById('my_modal_3').close();
        window.location.reload();
      }
      alert("login successful");
    } catch (error) {
      if (error.response) {
        console.log(error); 
        alert("Error: " + error.response.data.message);
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button for the modal */}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById('my_modal_3').close()}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg text-center">Login</h3>
            <div className="mt-4 space-y-4">
              <span className="mx-3">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500">Email is required</span>}
            </div>

            <div className="mt-4 space-y-4">
              <span className="mx-3">Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-red-500">Password is required</span>}
            </div>
            <div className="flex justify-around mt-4">
              <button type="submit" className="bg-purple-500 px-4 rounded-md py-2 text-white">
                Login
              </button>
              <p>
                Not registered? <Link to="/Signup" className="text-purple-500">Signup</Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
