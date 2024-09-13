/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef } from 'react';

// Card Component
const ReviewCard: React.FC<{ name: string, title: string, company: string, image: string, review: string }> = ({ name, title, company, image, review }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 m-4 w-80 flex-shrink-0">
      <div className="flex items-center mb-4">
        <div className="flex space-x-1 text-yellow-500">
          {Array(5).fill(0).map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.204 3.698a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.125 2.27a1 1 0 00-.364 1.118l1.204 3.698c.3.921-.755 1.688-1.54 1.118l-3.125-2.27a1 1 0 00-1.176 0l-3.125 2.27c-.784.57-1.838-.197-1.539-1.118l1.204-3.698a1 1 0 00-.364-1.118L2.646 9.125c-.784-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.203-3.698z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{review}</p>
      <div className="flex items-center">
        <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="text-gray-900 dark:text-gray-100 font-bold">{name}</p>
          <p className="text-indigo-600 dark:text-indigo-400">{title} at {company}</p>
        </div>
      </div>
    </div>
  );
};

// Main Component
const ReviewsSlider: React.FC = () => {
  const reviews = [
    {
      name: "Chealsea Morgan",
      title: "CEO",
      company: "Subway",
      image: "/lana.png",
      review: "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl..."
    },
    {
      name: "Nick Cave",
      title: "CMO",
      company: "Nokia",
      image: "/b.png",
      review: "In a laoreet purus. Integer turpis quam, laoreet id orci nec..."
    },
    {
      name: "Lana Rosenfeld",
      title: "Senior VP",
      company: "Pinterest",
      image: "/a.png",
      review: "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero..."
    },
    {
      name: "sami athari",
      title: "Head of Marketing",
      company: "Tesla",
      image: "/sam.jpg",
      review: "Mauris nec magna a diam vehicula tristique at non urna. Proin feugiat..."
    },
    {
      name: "Rezezi Axcel",
      title: "CTO",
      company: "Apple",
      image: "/ax.jpg",
      review: "Proin sagittis, neque sit amet venenatis lacinia, quam dolor efficitur ipsum..."
    },
    {
      name: "dwi wahyu ramadhan",
      title: "Product Manager",
      company: "Google",
      image: "/wi.jpg",
      review: "Phasellus ultricies nulla a orci scelerisque, eget tincidunt magna volutpat..."
    },
    {
      name: "rifaldi ardiyansyah",
      title: "Lead Engineer",
      company: "Amazon",
      image: "/pal.png",
      review: "Curabitur fringilla enim non magna posuere, non venenatis purus blandit..."
    },
    {
      name: "ahmad dhani",
      title: "Senior Designer",
      company: "Spotify",
      image: "/dan.png",
      review: "Aenean id purus id libero dapibus tristique. In a lorem vel quam sodales..."
    },
  ];

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="px-8 py-12 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">What our users are saying</h2>
      <div className="relative">
        <div
          className="flex overflow-x-auto space-x-6 p-4 scrollbar-hide"
          ref={sliderRef}
        >
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              title={review.title}
              company={review.company}
              image={review.image}
              review={review.review}
            />
          ))}
        </div>

        {/* Arrow Buttons at the bottom */}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={scrollLeft}
            className="bg-indigo-600 dark:bg-indigo-500 text-white p-3 rounded-full focus:outline-none hover:bg-indigo-700 dark:hover:bg-indigo-400 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="bg-indigo-600 dark:bg-indigo-500 text-white p-3 rounded-full focus:outline-none hover:bg-indigo-700 dark:hover:bg-indigo-400 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSlider;
