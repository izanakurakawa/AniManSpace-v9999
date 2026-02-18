// components/BottomNav.jsx
import React, { useState, useEffect } from 'react';

const BottomNav = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', icon: '🏠', label: 'Home', gradient: 'from-cyan-400 to-blue-400' },
    { id: 'anime', icon: '🎬', label: 'Anime', gradient: 'from-purple-400 to-pink-400' },
    { id: 'manhwa', icon: '📖', label: 'Manhwa', gradient: 'from-green-400 to-emerald-400' },
    { id: 'chat', icon: '💬', label: 'Chat', gradient: 'from-yellow-400 to-orange-400' },
    { id: 'profile', icon: '👤', label: 'Profile', gradient: 'from-red-400 to-rose-400' },
  ];

  const [pulseTab, setPulseTab] = useState(null);

  useEffect(() => {
    // Har 3 soniyada random tab pulsatsiya qiladi
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * tabs.length);
      setPulseTab(tabs[randomIndex].id);
      setTimeout(() => setPulseTab(null), 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent backdrop-blur-lg"></div>
      
      {/* Neon border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-gradient"></div>

      {/* Tabs */}
      <div className="relative flex justify-around items-center px-4 pb-6 pt-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const isPulsing = pulseTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="relative group flex flex-col items-center"
            >
              {/* Icon container */}
              <div
                className={`
                  relative flex items-center justify-center w-12 h-12 rounded-2xl
                  transition-all duration-300
                  ${isActive 
                    ? `bg-gradient-to-br ${tab.gradient} shadow-lg scale-110` 
                    : 'bg-gray-800/50 hover:bg-gray-700/50'
                  }
                  ${isPulsing && !isActive ? 'animate-pulse ring-2 ring-cyan-400/50' : ''}
                `}
              >
                {/* Neon glow */}
                {isActive && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${tab.gradient} rounded-2xl blur-xl opacity-50 animate-pulse`}></div>
                )}
                
                {/* Icon */}
                <span className="relative text-2xl filter drop-shadow-lg">
                  {tab.icon}
                </span>
              </div>

              {/* Label */}
              <span className={`
                mt-1 text-xs font-medium transition-all duration-300
                ${isActive ? 'text-white' : 'text-gray-400'}
              `}>
                {tab.label}
              </span>

              {/* Active indicator */}
              {isActive && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-gradient {
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </nav>
  );
};

export default BottomNav;
