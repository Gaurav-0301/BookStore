import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Globe, Award } from 'lucide-react'; // Optional: npm i lucide-react

const About = () => {
  const stats = [
    { icon: <BookOpen className="text-pink-500" />, label: "Books Shared", value: "10,000+" },
    { icon: <Users className="text-blue-500" />, label: "Happy Readers", value: "5,000+" },
    { icon: <Globe className="text-green-500" />, label: "Communities", value: "20+" },
    { icon: <Award className="text-yellow-500" />, label: "Years Experience", value: "3+" },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28 pb-2 ">
      
      {/* Hero Section */}
      <motion.div {...fadeIn} className="text-center mb-20">
        <h1 className="text-5xl font-extrabold mb-6">
          We Believe in the <span className="text-pink-500">Power of Words</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Founded in 2025, BookStore started as a simple idea to bridge the gap between 
          readers and their next great adventure. Today, we are a thriving digital sanctuary for bibliophiles.
        </p>
      </motion.div>

      {/* Interactive Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            transition={{ delay: index * 0.1 }}
            className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl text-center border border-gray-100 text-white dark:border-slate-700"
          >
            <div className="flex justify-center mb-4">{stat.icon}</div>
            <h2 className="text-3xl font-bold mb-2">{stat.value}</h2>
            <p className="text-gray-500 text-sm uppercase tracking-widest">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Content Section: Image + Text */}
      <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="w-full lg:w-1/2"
        >
          <img 
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800" 
            alt="Library" 
            className="rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
          />
        </motion.div>

        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="w-full lg:w-1/2 space-y-6"
        >
          <h3 className="text-3xl font-bold">Our Journey to <span className="text-pink-500">Innovation</span></h3>
          <p className="leading-relaxed">
            As developers, we noticed that finding specific books and tracking reading progress 
            was more difficult than it should be. We combined our technical expertise in the 
            MERN stack with our love for literature to create this platform.
          </p>
          <p className="leading-relaxed">
            Whether you're looking for academic resources or the latest thriller, our platform 
            is optimized for a fast, responsive, and "glassmorphic" user experience.
          </p>
          <button className="bg-pink-500 text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600 transition-colors shadow-lg shadow-pink-200 dark:shadow-none">
            Join the Community
          </button>
        </motion.div>
      </div>

      {/* Core Values */}
      <motion.div 
        {...fadeIn}
        className="bg-pink-500 text-white p-12 rounded-[3rem] mb-6 text-center"
      >
        <h3 className="text-3xl font-bold mb-6 italic">"A room without books is like a body without a soul."</h3>
        <p className="text-pink-100 max-w-xl mx-auto">— Cicero</p>
      </motion.div>

    </div>
  );
};

export default About;