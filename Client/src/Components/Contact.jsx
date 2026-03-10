import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";

const Contact = () => {
  const [topic, setTopic] = useState("General");
  const topics = ["General", "Order Issue", "Book Request", "Partnership"];

  // 1. Extract isSubmitting from formState to handle button loading state
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // 2. Updated Submit Handler using toast.promise
  const onSubmit = async (data) => {
    const contactData = {
      ...data,
      topic: topic
    };

    // We pass the promise directly to toast.promise
    const sendRequest = axios.post("book-store-26of903cz-gaurav-0301s-projects.vercel.app/contact/email", contactData);

    toast.promise(
      sendRequest,
      {
        loading: 'Sending your message...',
        success: (res) => {
          reset(); // Clear the form only on success
          return "Check your inbox! We sent you a confirmation.";
        },
        error: (err) => {
          const errorMessage = err.response?.data?.message || err.message;
          return `Failed: ${errorMessage}`;
        },
      },
      {
        // This ensures the toast styling matches your pink theme
        success: {
          duration: 5000,
          icon: '🚀',
        },
      }
    );
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28 pb-10">
      {/* NOTE: Remove <Toaster /> from here if you already have it in App.jsx */}
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold">
          Let's Start a <span className="text-pink-500">Conversation</span>
        </h1>
        <p className="mt-4 text-gray-500">Select a topic and we'll get back to you within 24 hours.</p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side: Topic Selection */}
        <div className="w-full lg:w-1/3 space-y-6">
          <h3 className="text-xl font-semibold">What's on your mind?</h3>
          <div className="flex flex-wrap gap-3">
            {topics.map((t) => (
              <button
                key={t}
                type="button"
                disabled={isSubmitting} // Prevent changing topic during send
                onClick={() => setTopic(t)}
                className={`px-6 py-2 rounded-full border-2 transition-all duration-300 ${
                  topic === t 
                  ? "border-pink-500 bg-pink-500 text-white shadow-lg scale-105" 
                  : "border-gray-200 hover:border-pink-300 dark:border-slate-70"
                } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {t}
              </button>
            ))}
          </div>
          
          <div className="p-6 bg-pink-50 dark:bg-slate-800 rounded-2xl border-l-4 border-pink-500">
            <p className="italic text-sm text-gray-600 dark:text-gray-300">
              "Books are a uniquely portable magic." — Stephen King
            </p>
          </div>
        </div>

        {/* Right Side: The Form */}
        <motion.div 
          className="w-full lg:w-2/3 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-800"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Name Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium ml-1 dark:text-white">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent outline-none focus:ring-2 focus:ring-pink-500 transition-all dark:text-white"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium ml-1 dark:text-white">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent outline-none focus:ring-2 focus:ring-pink-500 transition-all dark:text-white"
                {...register("email", { 
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                })}
              />
              {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
            </div>

            {/* Message Textarea */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium ml-1 dark:text-white">Message ({topic})</label>
              <textarea 
                rows="5" 
                disabled={isSubmitting}
                placeholder={`Tell us more about your ${topic.toLowerCase()} inquiry...`}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-transparent outline-none focus:ring-2 focus:ring-pink-500 transition-all resize-none dark:text-white"
                {...register("message", { required: "Please enter a message" })}
              ></textarea>
              {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
            </div>

            {/* Submit Button with Loading State */}
            <motion.button 
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className={`md:col-span-2 py-4 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 ${
                isSubmitting 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-pink-500 hover:bg-pink-600 active:bg-pink-700"
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;