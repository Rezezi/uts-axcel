import React from 'react';
import Image from 'next/image';

const MyPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/f1.png" // Ganti dengan path yang sesuai
            alt="Image 1"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-bold mb-4">Choose how you want to work</h2>
          <p className="mb-4">
            We let teams give you all the flexibility and tools to decide where and when to work that is best for you.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Learn more →
          </a>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:order-2">
          <Image
            src="/f2.png" // Ganti dengan path yang sesuai
            alt="Image 2"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pr-8 md:order-1">
          <h2 className="text-2xl font-bold mb-4">Move faster with your Team tools</h2>
          <p className="mb-4">
            With your team working in harmony, you can move faster by tackling tasks together.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Learn more →
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
