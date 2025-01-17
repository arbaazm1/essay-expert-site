import React, { useState, useEffect } from 'react';
import { Calendar, Edit, GraduationCap, BookOpen, Clock, Star, X, Menu, FileText } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

// Logo Ticker Component
const LogoTicker = () => {
  const universityLogos = [
    { name: "Harvard", color: "#A51C30" },
    { name: "Stanford", color: "#8C1515" },
    { name: "Yale", color: "#00356B" },
    { name: "MIT", color: "#A31F34" },
    { name: "Princeton", color: "#EE7F2D" },
    { name: "Columbia", color: "#B9D9EB" },
    { name: "Penn", color: "#011F5B" },
    { name: "Johns Hopkins", color: "#68ACE5" }
  ];

  return (
    <div className="w-full bg-gray-100 py-8">
      <div className="relative overflow-hidden">
        <style>
          {\`
            .ticker-container {
              overflow: hidden;
              width: 100%;
              position: relative;
            }
            
            @keyframes ticker {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            
            .ticker-wrapper {
              display: flex;
              width: fit-content;
              animation: ticker 40s linear infinite;
            }
            
            .ticker-wrapper:hover {
              animation-play-state: paused;
            }
          \`}
        </style>
        <div className="ticker-container">
          <div className="ticker-wrapper">
            {universityLogos.map((logo, index) => (
              <div
                key={\`first-\${index}\`}
                className="inline-flex items-center justify-center w-24 h-24 rounded shadow-md mx-6"
                style={{ backgroundColor: logo.color }}
              >
                <span className="text-white font-bold text-sm px-2 text-center">
                  {logo.name}
                </span>
              </div>
            ))}
            {universityLogos.map((logo, index) => (
              <div
                key={\`second-\${index}\`}
                className="inline-flex items-center justify-center w-24 h-24 rounded shadow-md mx-6"
                style={{ backgroundColor: logo.color }}
              >
                <span className="text-white font-bold text-sm px-2 text-center">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};