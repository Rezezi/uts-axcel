import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat bg-[url('/utss.jpg')]">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative container mx-auto flex flex-col md:flex-row items-center h-screen px-4">
        <div className="flex-1 flex items-center justify-center md:items-start md:justify-start">
          <div className="text-left max-w-lg">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
              Instant <span className="text-blue-400">collaboration</span> for remote <span className="text-blue-400">teams</span>
            </h1>
            <p className="text-white text-base md:text-lg mb-6">
              All-in-one place for your remote team to chat, collaborate, and track project progress.
            </p>
            
            <form className="flex flex-col md:flex-row gap-2 items-center">
              <input 
                type="email" 
                placeholder="Email" 
                className="px-4 py-2 w-full md:w-64 rounded-md text-black focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">Get Early Access</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
