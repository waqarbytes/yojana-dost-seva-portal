
import React, { useState, useEffect } from 'react';

interface Stat {
  title: string;
  value: number;
  suffix: string;
  increment: number;
  icon: string;
}

const LiveStats = () => {
  const [stats, setStats] = useState<Stat[]>([
    { 
      title: "Departments (Central)",
      value: 0, 
      suffix: "+",
      increment: 92,
      icon: "🏛️"
    },
    { 
      title: "Departments (State)",
      value: 0, 
      suffix: "+",
      increment: 358,
      icon: "🏢"
    },
    { 
      title: "Services Available",
      value: 0, 
      suffix: "+",
      increment: 5437,
      icon: "🔍"
    },
    { 
      title: "Total Registrations",
      value: 0, 
      suffix: "M+",
      increment: 12.5,
      icon: "👥"
    }
  ]);

  useEffect(() => {
    const incrementStats = () => {
      setStats(prevStats => prevStats.map(stat => {
        // If the value hasn't reached its final value, increment it
        if (stat.title === "Total Registrations") {
          const increment = stat.increment / 20;
          return {
            ...stat,
            value: stat.value + increment >= stat.increment ? stat.increment : parseFloat((stat.value + increment).toFixed(1))
          };
        } else {
          const increment = Math.ceil(stat.increment / 20);
          return {
            ...stat,
            value: stat.value + increment >= stat.increment ? stat.increment : stat.value + increment
          };
        }
      }));
    };

    // Start incrementing when component mounts
    const interval = setInterval(incrementStats, 100);

    // Clear interval when all stats reach their final values
    if (stats.every(stat => stat.value === stat.increment)) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [stats]);

  return (
    <section className="py-12 bg-white">
      <div className="gov-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gov-blue">Live Statistics</h2>
          <p className="mt-2 text-gray-600">Real-time data about our services and usage</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="service-card text-center p-6 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 flex justify-center">
                <span role="img" aria-label={stat.title}>{stat.icon}</span>
              </div>
              <h3 className="text-4xl font-bold text-gov-teal mb-2">
                {stat.title === "Total Registrations" ? stat.value.toFixed(1) : stat.value}{stat.suffix}
              </h3>
              <p className="text-gray-600">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
