// components/Profile.jsx
import React, { useState } from 'react';

const Profile = () => {
  const [user] = useState({
    name: 'Ragnarök',
    level: 12,
    xp: 750,
    maxXp: 1000,
    streak: 7,
    avatar: 'https://i.pravatar.cc/150?img=7',
    watchedEpisodes: 156,
    watchTime: '124 soat',
    favoriteGenre: 'Cyberpunk',
    watchPreference: 'Tungi',
    badges: [
      { id: 1, name: 'First Anime', icon: '🗡️', unlocked: true, color: 'blue' },
      { id: 2, name: '10 Episodes in One Day', icon: '🔥', unlocked: true, color: 'orange' },
      { id: 3, name: 'Night Watcher', icon: '🌙', unlocked: true, color: 'purple' },
      { id: 4, name: 'Cyberpunk Fan', icon: '🌌', unlocked: true, color: 'cyan' },
      { id: 5, name: 'Anime Master', icon: '👑', unlocked: false, color: 'yellow' },
      { id: 6, name: 'Legend', icon: '⭐', unlocked: false, color: 'rainbow' },
    ]
  });

  const getFrameColor = (level) => {
    if (level >= 50) return 'from-red-500 to-pink-500';
    if (level >= 20) return 'from-purple-500 to-indigo-500';
    if (level >= 5) return 'from-blue-400 to-cyan-400';
    return 'from-gray-400 to-gray-300';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 pb-24">
      {/* Background stars */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="stars"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="relative mb-8">
          {/* Level-based background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
          
          <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
            <div className="flex items-center gap-6">
              {/* Avatar with frame */}
              <div className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${getFrameColor(user.level)} rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 ${user.level >= 50 ? 'animate-pulse' : ''}`}></div>
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white/20">
                  <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                </div>
                {/* Level badge */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 rounded-full border-2 border-cyan-400 text-xs font-bold text-white">
                  Lv.{user.level}
                </div>
              </div>

              {/* User info */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-2">{user.name}</h2>
                
                {/* XP Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-gray-300">
                    <span>XP Progress</span>
                    <span>{user.xp} / {user.maxXp}</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-500"
                      style={{ width: `${(user.xp / user.maxXp) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-cyan-400">{user.streak}</div>
                    <div className="text-xs text-gray-400">🔥 Streak</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-purple-400">{user.watchedEpisodes}</div>
                    <div className="text-xs text-gray-400">📺 Episodes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-pink-400">{user.watchTime}</div>
                    <div className="text-xs text-gray-400">⏱️ Watch time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
            <h3 className="text-sm text-gray-400 mb-2">❤️ Sevimli janr</h3>
            <p className="text-lg font-bold text-white">{user.favoriteGenre}</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
            <h3 className="text-sm text-gray-400 mb-2">🌙 Ko'p tomosha</h3>
            <p className="text-lg font-bold text-white">{user.watchPreference}</p>
          </div>
        </div>

        {/* Badges */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-4">🏆 Badges</h3>
          <div className="grid grid-cols-3 gap-3">
            {user.badges.map((badge) => (
              <div
                key={badge.id}
                className={`
                  relative group p-4 rounded-2xl text-center transition-all duration-300
                  ${badge.unlocked 
                    ? `bg-gradient-to-br from-${badge.color}-500/20 to-${badge.color}-600/20 border border-${badge.color}-400/50 hover:scale-105` 
                    : 'bg-gray-800/30 border border-gray-700/50 opacity-50'
                  }
                `}
              >
                {/* Glow effect */}
                {badge.unlocked && (
                  <div className={`absolute inset-0 bg-${badge.color}-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all`}></div>
                )}
                
                {/* Icon */}
                <div className="relative text-3xl mb-2 filter drop-shadow-lg">
                  {badge.icon}
                </div>
                
                {/* Name */}
                <p className="relative text-xs font-medium text-white">
                  {badge.name}
                </p>
                
                {/* Lock indicator */}
                {!badge.unlocked && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 rounded-2xl backdrop-blur-sm">
                    <span className="text-2xl">🔒</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Graph */}
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
          <h3 className="text-sm text-gray-400 mb-4">📊 Haftalik aktivlik</h3>
          <div className="flex items-end justify-between h-24 gap-1">
            {['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'].map((day, i) => (
              <div key={day} className="flex-1 flex flex-col items-center gap-1">
                <div 
                  className="w-full bg-gradient-to-t from-cyan-400 to-purple-400 rounded-t-lg transition-all duration-500 hover:from-cyan-300 hover:to-purple-300"
                  style={{ height: `${Math.random() * 60 + 20}%` }}
                ></div>
                <span className="text-xs text-gray-400">{day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent url('https://i.imgur.com/YKY28eT.png') repeat;
          animation: stars 200s linear infinite;
          opacity: 0.3;
        }

        @keyframes stars {
          from { transform: translateY(0); }
          to { transform: translateY(-2000px); }
        }
      `}</style>
    </div>
  );
};

export default Profile;
