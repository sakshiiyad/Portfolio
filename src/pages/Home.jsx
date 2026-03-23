import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 fade-up relative overflow-hidden bg-white dark:bg-[#0A0A0A] transition-colors duration-300">
      {/* Abstract Wave SVG Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 800" className="absolute w-[150%] h-[150%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] object-cover opacity-80" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d946ef" />
              <stop offset="50%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#4c1d95" />
            </linearGradient>
          </defs>
          <path d="M-100 600 C 200 600, 300 400, 500 450 C 700 500, 800 200, 1000 250 C 1200 300, 1300 100, 1500 50" fill="none" stroke="url(#waveGradient)" strokeWidth="2" />
          <path d="M-100 610 C 210 610, 310 410, 510 460 C 710 510, 810 210, 1010 260 C 1210 310, 1310 110, 1500 60" fill="none" stroke="url(#waveGradient)" strokeWidth="1.5" opacity="0.8" />
          <path d="M-100 620 C 220 620, 320 420, 520 470 C 720 520, 820 220, 1020 270 C 1220 320, 1320 120, 1500 70" fill="none" stroke="url(#waveGradient)" strokeWidth="1" opacity="0.6" />
          <path d="M-100 630 C 230 630, 330 430, 530 480 C 730 530, 830 230, 1030 280 C 1230 330, 1330 130, 1500 80" fill="none" stroke="url(#waveGradient)" strokeWidth="0.8" opacity="0.5" />
          <path d="M-100 640 C 240 640, 340 440, 540 490 C 740 540, 840 240, 1040 290 C 1240 340, 1340 140, 1500 90" fill="none" stroke="url(#waveGradient)" strokeWidth="0.5" opacity="0.4" />
          {/* Creating the dense net effect */}
          {Array.from({ length: 30 }).map((_, i) => (
            <path key={i} d={`M-100 ${580 + i * 4} C ${180 + i * 2} ${580 + i * 4}, ${280 + i * 2} ${380 + i * 3}, ${480 + i * 2} ${430 + i * 2} C ${680 + i * 2} ${480 + i * 2}, ${780 + i * 2} ${180 + i * 1.5}, ${980 + i * 2} ${230 + i * 1.5} C ${1180 + i * 2} ${280 + i}, ${1280 + i * 2} ${80 + i}, 1500 ${30 + i}`} fill="none" stroke="url(#waveGradient)" strokeWidth="0.5" opacity={0.8 - (i * 0.02)} />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Text Area */}
        <div className="flex flex-col items-start text-left pt-12 md:pt-24">
          {/* Socials above name */}
          <div className="flex gap-6 mb-4">
            <a href="https://github.com/sakshiiyad" className="text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
              <FaGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/feed/" className="text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
              <FaLinkedin size={32} />
            </a>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold mb-2 tracking-tight text-gray-900 dark:text-white drop-shadow-lg transition-colors duration-300 leading-none">
            Sakshi
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-700 dark:text-gray-200 font-medium mt-4 drop-shadow-md transition-colors duration-300">
            Full Stack Engineer
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Home;
