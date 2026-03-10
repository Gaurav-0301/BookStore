import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomeFloat = () => {
  const [userData, setUserData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Define the check logic separately so we can call it anytime
  const syncWithLocalStorage = () => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    const storedUser = localStorage.getItem("User");

    if (loggedInStatus === "true" && storedUser) {
      try {
        const parsedData = JSON.parse(storedUser);
        const actualUser = parsedData.user ? parsedData.user : parsedData;
        if (actualUser && actualUser.name) {
          setUserData(actualUser);
          setIsVisible(true);
        }
      } catch (e) { console.error(e); }
    } else {
      // INSTANT HIDE: If storage is cleared, hide the toast
      setIsVisible(false);
      setUserData(null);
    }
  };

  useEffect(() => {
    // 1. Initial check when the page loads/refreshes
    syncWithLocalStorage();

    // 2. LISTEN: Listen for the "broadcast" from the Logout component
    window.addEventListener("auth-state-changed", syncWithLocalStorage);

    // 3. CLEANUP: Stop listening if the component unmounts
    return () => window.removeEventListener("auth-state-changed", syncWithLocalStorage);
  }, []);

  if (!userData || !userData.name) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-pink-200 p-2 pr-6 rounded-full shadow-2xl"
        >
          {/* ... (Keep your original UI styling here) ... */}
          <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold">
             {userData.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-pink-500 font-bold">Welcome Back</span>
            <span className="text-sm font-semibold dark:text-white capitalize">{userData.name}</span>
          </div>
          <button onClick={() => setIsVisible(false)} className="ml-2 text-gray-400">×</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeFloat;