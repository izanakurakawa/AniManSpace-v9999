// components/IntroAnimation.jsx
import React, { useState, useEffect } from 'react';

const IntroAnimation = ({ onComplete }) => {
  const [showSkip, setShowSkip] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 2 soniyadan keyin skip tugmasi chiqadi
    const timer1 = setTimeout(() => setShowSkip(true), 2000);
    
    // 7 soniyadan keyin animatsiya tugaydi
    const timer2 = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 1000);
    }, 7000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setFadeOut(true);
    setTimeout(onComplete, 1000);
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* Kosmik chang / yulduzlar animatsiyasi */}
      <div className="absolute inset-0">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      {/* Video alternativi (agar MP4 bo'lmasa) */}
      <div className="relative z-10 text-center">
        <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
          AniManSpace
        </h1>
        
        {/* Neon chiziq */}
        <div className="relative mt-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-slide"></div>
          </div>
        </div>

        {/* Bass vibes uchun pulsatsiya */}
        <div className="mt-12">
          <div className="w-32 h-32 mx-auto rounded-full bg-cyan-500/20 animate-ping"></div>
        </div>
      </div>

      {/* Skip tugmasi */}
      {showSkip && (
        <button
          onClick={handleSkip}
          className="absolute bottom-10 right-10 z-20 px-6 py-3 text-sm font-medium text-white bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all"
        >
          Skip Intro ⏭️
        </button>
      )}

      <style jsx>{`
        .stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: black url('https://i.imgur.com/YKY28eT.png') repeat;
          animation: stars 200s linear infinite;
        }

        .twinkling {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent url('https://i.imgur.com/XYMF4ca.png') repeat;
          animation: twinkling 10s linear infinite;
        }

        @keyframes stars {
          from { transform: translateY(0); }
          to { transform: translateY(-2000px); }
        }

        @keyframes twinkling {
          0% { opacity: 0.3; }
          50% { opacity: 0.7; }
          100% { opacity: 0.3; }
        }

        @keyframes slide {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        .animate-slide {
          animation: slide 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default IntroAnimation;
