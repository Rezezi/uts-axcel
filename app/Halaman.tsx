import React from "react";

const DistributedTeams: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:flex-1">
          <img
            src="aa.png"
            alt="Distributed Teams"
            className="w-full rounded-lg"
          />
        </div>
        <div className="md:flex-1 text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Chats for your distributed teams
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.
          </p>
          <a
            href="#"
            className="text-blue-600 hover:underline text-lg font-bold"
          >
            Learn more →
          </a>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold text-gray-900">
          What our users are saying
        </h3>
      </div>
    </div>
  );
};

export default DistributedTeams;
