// components/AnimeCard.jsx
import React, { useState } from 'react';

const AnimeCard = ({ title, image, episodes, rating }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer transition-all duration-300 ease-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      }}
    >
      {/* Neon outline */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300 ${isHovered ? 'animate-pulse' : ''}`}></div>
      
      {/* Karta */}
      <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
        {/* Rasm */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image || 'https://via.placeholder.com/300x200/1a1a2e/cyan?text=Anime'} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
          
          {/* Epizod soni */}
          <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-xs text-white">
            📺 {episodes} ep
          </div>
          
          {/* Reyting */}
          <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-xs text-yellow-400">
            ⭐ {rating}
          </div>
        </div>

        {/* Title */}
        <div className="p-3">
          <h3 className="text-white font-semibold truncate">{title}</h3>
          <p className="text-gray-400 text-xs mt-1">2024 • HD</p>
        </div>

        {/* Hover effektlari */}
        <div className={`absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none`}></div>
      </div>
    </div>
  );
};

export default AnimeCard;
