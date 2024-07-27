import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-blue-900">About Me</h1>
        <p className="mt-4 text-lg text-gray-700 text-center">
          Hi, I'm Saumya Srivastava, a passionate developer with a B.Tech in Mechanical Engineering from IIITDMJ, having a multidisciplinary approach including cybersecurity, AI, and ML. I am currently focused on building innovative blockchain solutions.
        </p>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-800">My Experiences</h2>
          <div className="mt-8 space-y-8">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-8">
                <h3 className="text-2xl font-bold text-blue-700">ZashPay</h3>
                <p className="mt-2 text-gray-600">
                  A platform that allows peers to lend money at mutually agreed rates of interest. Some functionalities involve identity verification, credit scoring, loan management, token handling for cryptocurrency transactions, and a registry to track all these features. The website is designed using React and MaterialUI, and the backend is created using Node and Solidity smart contracts.
                </p>
              </div>
              <div className="lg:w-1/2">
                <img src="https://via.placeholder.com/400x250" alt="ZashPay" className="rounded-lg shadow-lg" />
              </div>
            </div>
            {/* <!-- Add more experiences here in similar blocks --> */}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-800">My Team</h2>
          <div className="mt-8 space-y-8">
            {/* <!-- Team member 1 --> */}
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-8">
                <h3 className="text-2xl font-bold text-blue-700">Team Member 1</h3>
                <p className="mt-2 text-gray-600">
                  [Team Member 1's Bio]
                </p>
              </div>
              <div className="lg:w-1/2">
                <img src="https://via.placeholder.com/400x250" alt="Team Member 1" className="rounded-lg shadow-lg" />
              </div>
            </div>
            {/* <!-- Add more team members here in similar blocks --> */}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-800">Contact Me</h2>
          <p className="mt-4 text-lg text-gray-700">
            Feel free to reach out to me on GitHub, LinkedIn, or my portfolio website for any inquiries or collaborations.
          </p>
          <div className="mt-8 space-x-4 text-center">
            <a href="https://github.com/samcms1234" className="text-blue-600 hover:text-blue-800">GitHub</a>
            <a href="https://www.linkedin.com/in/saumya-srivastava-a33535201" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
            <a href="https://blockchain-portfolio-frontend-backend-integrated.vercel.app/" className="text-blue-600 hover:text-blue-800">Portfolio</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
