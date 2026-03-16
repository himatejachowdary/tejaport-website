import React, { useEffect, useState } from 'react';
import { WeatherTheme } from '../pages/Index';

interface Particle {
  id: number;
  x: number;
  y?: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  drift?: number;
}

interface WeatherBackgroundProps {
  theme: WeatherTheme;
}

const WeatherBackground: React.FC<WeatherBackgroundProps> = ({ theme }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles depending on the theme
    const activeParticles: Particle[] = [];
    const count = theme === 'rain' ? 100 : theme === 'night' ? 80 : 0; 
    // Morning doesn't use particles, it uses a large sun element

    for (let i = 0; i < count; i++) {
        activeParticles.push({
            id: i,
            x: Math.random() * 100, // %
            y: theme === 'night' ? Math.random() * 100 : -20, // Night stars are spread out randomly
            size: theme === 'night' ? Math.random() * 2 + 1 : Math.random() * 2 + 1, // Rain drops are thin, stars are small
            duration: theme === 'rain' ? Math.random() * 0.5 + 0.5 : Math.random() * 3 + 4, // Rain falls fast
            delay: Math.random() * (theme === 'rain' ? -2 : -5), // Start at different times
            opacity: theme === 'rain' ? Math.random() * 0.4 + 0.2 : Math.random() * 0.7 + 0.3, 
            drift: theme === 'rain' ? Math.random() * 5 + 2 : 0, // Rain falls at an angle
        });
    }

    setParticles(activeParticles);
  }, [theme]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {theme === 'morning' && (
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-tr from-yellow-300 to-orange-500 opacity-60 blur-3xl animate-pulse" />
      )}

      {theme === 'rain' && (
        <div className="w-full h-full relative">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute bg-blue-200"
              style={{
                left: `${p.x}%`,
                top: `-20px`,
                width: `2px`,
                height: `${p.size * 10}px`,
                opacity: p.opacity,
                transform: `rotate(15deg)`,
                animation: `rainfall ${p.duration}s linear infinite`,
                animationDelay: `${p.delay}s`,
                background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.7))'
              }}
            />
          ))}
        </div>
      )}

      {theme === 'night' && (
        <div className="w-full h-full relative">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute bg-white rounded-full"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                opacity: p.opacity,
                boxShadow: `0 0 ${p.size * 2}px rgba(255,255,255,0.8)`,
                animation: `twinkle ${p.duration}s ease-in-out infinite`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherBackground;
