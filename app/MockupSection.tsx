import Image from 'next/image'; // Import Image dari next/image

const ChatsForYou: React.FC = () => {
  return (
    <div className="bg-gray-50 p-8 flex flex-col-reverse lg:flex-row justify-between items-center">
      {/* Left Section with Text */}
      <div className="max-w-lg text-center lg:text-left lg:mr-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Chats for your distributed teams
        </h1>
        <p className="text-gray-600 mb-6">
          Team combines the immediacy of real-time chat with an email threading model.
          With Team, you can catch up on important conversations while ignoring irrelevant ones.
        </p>
        <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">
          Learn more →
        </a>
      </div>

      {/* Right Section with Image - Larger on desktop, moves to the top on mobile */}
      <div className="mb-8 lg:mb-0 w-full lg:w-auto">
        <Image
          src="/mockup.png" // Path gambar harus sesuai dengan path di public folder
          alt="Chats UI"
          width={400} // Ganti dengan ukuran yang sesuai
          height={300} // Ganti dengan ukuran yang sesuai
          className="rounded-lg shadow-lg w-full lg:max-w-md mx-auto lg:mx-0"
        />
      </div>
    </div>
  );
};

export default ChatsForYou;
