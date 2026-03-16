
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import WeatherBackground from '../components/WeatherBackground';

export type WeatherTheme = 'morning' | 'night' | 'rain';

const Index = () => {
  const [theme, setTheme] = useState<WeatherTheme>('night');

  useEffect(() => {
    // 1. Set initial theme based on local time
    const hour = new Date().getHours();
    const isDay = hour >= 6 && hour < 18;
    const initialTheme = isDay ? 'morning' : 'night';
    setTheme(initialTheme);

    // 2. Override with weather if available
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
          const data = await res.json();
          if (data && data.current_weather) {
            const code = data.current_weather.weathercode;
            // Rain/Drizzle/Thunderstorm code check from WMO interpretation
            const rainCodes = [51, 53, 55, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99];
            if (rainCodes.includes(code)) {
              setTheme('rain');
            } else {
              setTheme(initialTheme);
            }
          }
        } catch (err) {
          console.error("Failed to fetch weather", err);
        }
      }, (err) => {
        console.error("Geolocation error", err);
      });
    }
  }, []);

  const getBackgroundGradient = () => {
    switch (theme) {
      case 'morning':
        // Dark but with a sunrise/morning vibe so text remains legible
        return "bg-gradient-to-br from-indigo-950 via-sky-900 to-orange-950";
      case 'rain':
        return "bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900";
      case 'night':
      default:
        return "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900";
    }
  };

  return (
    <div className={`min-h-screen ${getBackgroundGradient()} relative overflow-hidden transition-colors duration-1000`}>
      {/* Dynamic Weather Effect */}
      <WeatherBackground theme={theme} />

      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Blog />
      <Contact />
    </div>
  );
};

export default Index;
