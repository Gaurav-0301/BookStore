import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = ({ setIsLoggedIn }) => {
 
  
  
  // Using destructuring for cleaner code
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSignup, setIsSignup] = useState(false);

const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(
        isSignup
          ? "http://localhost:2724/auth/signup"
          : "http://localhost:2724/auth/login",
        userInfo
      );

      if (res.data) {
        if (isSignup) {
          // --- SIGNUP SUCCESS FLOW ---
          toast.success('Account created! Please login to continue.');
          
          // 1. Switch the modal to Login mode automatically
          setIsSignup(false); 
          
          // 2. Clear the password field for security, but keep the email
          reset({ email: data.email, password: "" });
          
        } else {
          // --- LOGIN SUCCESS FLOW ---
          toast.success('Login successfully.');
          
          // Save data and trigger the WelcomeFloat
          localStorage.setItem("User", JSON.stringify(res.data.user));
          localStorage.setItem("isLoggedIn", "true");
          setIsLoggedIn(true);
          
          // Broadcast the event so WelcomeFloat appears instantly
          window.dispatchEvent(new Event("auth-state-changed"));

          reset(); 
          const modal = document.getElementById("my_modal_5");
          if (modal) modal.close();
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error('Error: ' + (error.response?.data?.message || error.message));
    }
  };
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white text-black">
          <h3 className="font-bold text-lg text-center">
            {isSignup ? "Create Account" : "Login"}
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            {isSignup && (
              <div className="space-y-1">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-400"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>
            )}

            <div className="space-y-1">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-400"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="space-y-1">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-400"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            <button type="submit" className="px-4 bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 duration-200 w-full">
              {isSignup ? "Signup" : "Login"}
            </button>

            <p className="text-sm text-center">
              {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
              <span onClick={() => setIsSignup(!isSignup)} className="text-pink-500 cursor-pointer hover:underline">
                {isSignup ? "Login" : "Sign Up"}
              </span>
            </p>
          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;