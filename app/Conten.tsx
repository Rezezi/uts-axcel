import React from 'react';
import Image from 'next/image'; // Assuming you're using Next.js for optimized image loading

const Section = () => {
  return (
    <section className="bg-white py-16 px-4 lg:px-24">
      <div className="grid grid-cols-1 gap-12"> {/* Updated grid to stack vertically */}
        {/* First block */}
        <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-4">
          <div className="lg:w-1/2 lg:order-1"> {/* Image on the left */}
            <Image 
              src="/f1.png" // Replace with your image path
              alt="Woman working on laptop"
              width={600} // Adjusted size for larger image
              height={500} 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:order-2"> {/* Text on the right */}
            <h2 className="text-3xl font-bold text-gray-800">Chats for your distributed teams</h2>
            <p className="mt-4 text-gray-600">
              Team combines the immediacy of real-time chat with an email threading model. With Team, 
              you can catch up on important conversations while ignoring irrelevant ones.
            </p>
            <a href="#" className="mt-4 text-blue-600 hover:underline flex items-center">
              Learn more <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        {/* Second block */}
        <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-4">
          <div className="lg:w-1/2 lg:order-2"> {/* Image on the right */}
            <Image 
              src="/f2.png" // Replace with your image path
              alt="Person working with distributed tools"
              width={600} // Adjusted size for larger image
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:order-1"> {/* Text on the left */}
            <h2 className="text-3xl font-bold text-gray-800">Choose how you want to work</h2>
            <p className="mt-4 text-gray-600">
              In Team, you've got all the flexibility to work when, where, and how it's best for you.
              You can easily chat, send audio and video clips, or hop on a huddle to talk things out live.
            </p>
            <a href="#" className="mt-4 text-blue-600 hover:underline flex items-center">
              Learn more <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
