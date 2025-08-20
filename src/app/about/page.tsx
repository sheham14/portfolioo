"use client"
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div>

      

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white pt-20">
        {/* Animated Title */}
        <motion.h1
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Mee
        </motion.h1>

        {/* Two-Column Layout */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Personal Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <div>
                <h3 className="text-xl font-semibold">Who Am I?</h3>
                <p className="text-gray-400">
                  I’m Sheham, an aspiring Software Developer passionate about building innovative solutions and solving real-world problems with code.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253"
                />
              </svg>
              <div>
                <h3 className="text-xl font-semibold">Education</h3>
                <p className="text-gray-400">
                  Currently pursuing a B.Sc. in Computer Science at [University Name]. Relevant coursework includes Python, JavaScript, and Machine Learning.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src="/profile.jpg" // Replace with your image path
              alt="Profile"
              className="w-64 h-64 rounded-full object-cover border-4 border-blue-500 shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        </div>

{/* Technical Skills Section */}
<motion.div
  className="max-w-4xl mx-auto mt-12 space-y-6"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1 }}
>
  <h2 className="text-2xl font-bold text-center mb-6">Technical Skills</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Java */}
    <details className="group bg-gray-800 p-4 rounded-lg shadow-md flex flex-col space-y-2 cursor-pointer">
      <summary className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
        <span className="text-lg font-medium text-white">Java</span>
      </summary>
      <div className="mt-2 text-gray-400">
        <p>Where I Learned It: [Fill in details]</p>
        <p>How I Implemented It: [Fill in details]</p>
      </div>
    </details>

    {/* JavaScript */}
    <details className="group bg-gray-800 p-4 rounded-lg shadow-md flex flex-col space-y-2 cursor-pointer">
      <summary className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
        <span className="text-lg font-medium text-white">JavaScript</span>
      </summary>
      <div className="mt-2 text-gray-400">
        <p>Where I Learned It: [Fill in details]</p>
        <p>How I Implemented It: [Fill in details]</p>
      </div>
    </details>

    {/* Python */}
    <details className="group bg-gray-800 p-4 rounded-lg shadow-md flex flex-col space-y-2 cursor-pointer">
      <summary className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
        <span className="text-lg font-medium text-white">Python</span>
      </summary>
      <div className="mt-2 text-gray-400">
        <p>Where I Learned It: [Fill in details]</p>
        <p>How I Implemented It: [Fill in details]</p>
      </div>
    </details>

    {/* HTML */}
    <details className="group bg-gray-800 p-4 rounded-lg shadow-md flex flex-col space-y-2 cursor-pointer">
      <summary className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-orange-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
        <span className="text-lg font-medium text-white">HTML</span>
      </summary>
      <div className="mt-2 text-gray-400">
        <p>Where I Learned It: [Fill in details]</p>
        <p>How I Implemented It: [Fill in details]</p>
      </div>
    </details>

    {/* CSS */}
    <details className="group bg-gray-800 p-4 rounded-lg shadow-md flex flex-col space-y-2 cursor-pointer">
      <summary className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
        <span className="text-lg font-medium text-white">CSS</span>
      </summary>
      <div className="mt-2 text-gray-400">
        <p>Where I Learned It: [Fill in details]</p>
        <p>How I Implemented It: [Fill in details]</p>
      </div>
    </details>

    {/* React */}
    <details className="group bg-gray-800 p-4 rounded-lg shadow-md flex flex-col space-y-2 cursor-pointer">
      <summary className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
        <span className="text-lg font-medium text-white">React</span>
      </summary>
      <div className="mt-2 text-gray-400">
        <p>Where I Learned It: [Fill in details]</p>
        <p>How I Implemented It: [Fill in details]</p>
      </div>
    </details>

    {/* Next.js */}
    <details className="group bg-gray-800 p-4 rounded-lg shadow-md flex flex-col space-y-2 cursor-pointer">
      <summary className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
        <span className="text-lg font-medium text-white">Next.js</span>
      </summary>
      <div className="mt-2 text-gray-400">
        <p>Where I Learned It: [Fill in details]</p>
        <p>How I Implemented It: [Fill in details]</p>
      </div>
    </details>

    {/* Angular */}
    <details className="group bg-gray-800 p-4 rounded-lg shadow-md flex flex-col space-y-2 cursor-pointer">
      <summary className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
        <span className="text-lg font-medium text-white">Angular</span>
      </summary>
      <div className="mt-2 text-gray-400">
        <p>Where I Learned It: [Fill in details]</p>
        <p>How I Implemented It: [Fill in details]</p>
      </div>
    </details>

    {/* SQL */}
    <details className="group bg-gray-800 p-4 rounded-lg shadow-md flex flex-col space-y-2 cursor-pointer">
      <summary className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
        <span className="text-lg font-medium text-white">SQL</span>
      </summary>
      <div className="mt-2 text-gray-400">
        <p>Where I Learned It: [Fill in details]</p>
        <p>How I Implemented It: [Fill in details]</p>
      </div>
    </details>

    {/* APIs */}
    <details className="group bg-gray-800 p-4 rounded-lg shadow-md flex flex-col space-y-2 cursor-pointer">
      <summary className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-purple-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
        <span className="text-lg font-medium text-white">APIs</span>
      </summary>
      <div className="mt-2 text-gray-400">
        <p>Where I Learned It: [Fill in details]</p>
        <p>How I Implemented It: [Fill in details]</p>
      </div>
    </details>

    {/* AWS */}
    <details className="group bg-gray-800 p-4 rounded-lg shadow-md flex flex-col space-y-2 cursor-pointer">
      <summary className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-orange-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
        <span className="text-lg font-medium text-white">AWS</span>
      </summary>
      <div className="mt-2 text-gray-400">
        <p>Where I Learned It: [Fill in details]</p>
        <p>How I Implemented It: [Fill in details]</p>
      </div>
    </details>

    {/* Tailwind CSS */}
    <details className="group bg-gray-800 p-4 rounded-lg shadow-md flex flex-col space-y-2 cursor-pointer">
      <summary className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-teal-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
        <span className="text-lg font-medium text-white">Tailwind CSS</span>
      </summary>
      <div className="mt-2 text-gray-400">
        <p>Where I Learned It: [Fill in details]</p>
        <p>How I Implemented It: [Fill in details]</p>
      </div>
    </details>

    {/* Java Spring */}
    <details className="group bg-gray-800 p-4 rounded-lg shadow-md flex flex-col space-y-2 cursor-pointer">
      <summary className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
        <span className="text-lg font-medium text-white">Java Spring</span>
      </summary>
      <div className="mt-2 text-gray-400">
        <p>Where I Learned It: [Fill in details]</p>
        <p>How I Implemented It: [Fill in details]</p>
      </div>
    </details>

    {/* Express */}
    <details className="group bg-gray-800 p-4 rounded-lg shadow-md flex flex-col space-y-2 cursor-pointer">
      <summary className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-indigo-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
        <span className="text-lg font-medium text-white">Express</span>
      </summary>
      <div className="mt-2 text-gray-400">
        <p>Where I Learned It: [Fill in details]</p>
        <p>How I Implemented It: [Fill in details]</p>
      </div>
    </details>

    {/* Node.js */}
    <details className="group bg-gray-800 p-4 rounded-lg shadow-md flex flex-col space-y-2 cursor-pointer">
      <summary className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
        <span className="text-lg font-medium text-white">Node.js</span>
      </summary>
      <div className="mt-2 text-gray-400">
        <p>Where I Learned It: [Fill in details]</p>
        <p>How I Implemented It: [Fill in details]</p>
      </div>
    </details>

    {/* MongoDB */}
    <details className="group bg-gray-800 p-4 rounded-lg shadow-md flex flex-col space-y-2 cursor-pointer">
      <summary className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
        <span className="text-lg font-medium text-white">MongoDB</span>
      </summary>
      <div className="mt-2 text-gray-400">
        <p>Where I Learned It: [Fill in details]</p>
        <p>How I Implemented It: [Fill in details]</p>
      </div>
    </details>

    {/* ORMs */}
    <details className="group bg-gray-800 p-4 rounded-lg shadow-md flex flex-col space-y-2 cursor-pointer">
      <summary className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-purple-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
        <span className="text-lg font-medium text-white">ORMs</span>
      </summary>
      <div className="mt-2 text-gray-400">
        <p>Where I Learned It: [Fill in details]</p>
        <p>How I Implemented It: [Fill in details]</p>
      </div>
    </details>

    {/* Git */}
    <details className="group bg-gray-800 p-4 rounded-lg shadow-md flex flex-col space-y-2 cursor-pointer">
      <summary className="flex items-center space-x-2">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
        <span className="text-lg font-medium text-white">Git</span>
      </summary>
      <div className="mt-2 text-gray-400">
        <p>Where I Learned It: [Fill in details]</p>
        <p>How I Implemented It: [Fill in details]</p>
      </div>
    </details>
  </div>
</motion.div>

        {/* Soft Skills Section */}
        <motion.div
          className="max-w-4xl mx-auto mt-12 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="text-2xl font-bold text-center mb-6">Soft Skills</h2>
          <div className="space-y-4">
            {/* Adaptable */}
            <details className="group bg-gray-800 p-4 rounded-lg shadow-md flex items-center space-x-4 cursor-pointer">
              <summary className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <span className="text-lg font-medium text-white">Adaptable</span>
              </summary>
              <div className="mt-2 text-gray-400">
                <p>Where I Developed It: [Fill in details]</p>
                <p>How I Use It: [Fill in details]</p>
              </div>
            </details>

            {/* Organized */}
            <details className="group bg-gray-800 p-4 rounded-lg shadow-md flex items-center space-x-4 cursor-pointer">
              <summary className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-lg font-medium text-white">Organized</span>
              </summary>
              <div className="mt-2 text-gray-400">
                <p>Where I Developed It: [Fill in details]</p>
                <p>How I Use It: [Fill in details]</p>
              </div>
              </details>

{/* Able to Work in Teams and Independently */}
<details className="group bg-gray-800 p-4 rounded-lg shadow-md flex items-center space-x-4 cursor-pointer">
  <summary className="flex items-center space-x-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-blue-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
    <span className="text-lg font-medium text-white">Able to Work in Teams and Independently</span>
  </summary>
  <div className="mt-2 text-gray-400">
    <p>Where I Developed It: [Fill in details]</p>
    <p>How I Use It: [Fill in details]</p>
  </div>
</details>

{/* Verbal and Written Communication */}
<details className="group bg-gray-800 p-4 rounded-lg shadow-md flex items-center space-x-4 cursor-pointer">
  <summary className="flex items-center space-x-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-yellow-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
      />
    </svg>
    <span className="text-lg font-medium text-white">Verbal and Written Communication</span>
  </summary>
  <div className="mt-2 text-gray-400">
    <p>Where I Developed It: [Fill in details]</p>
    <p>How I Use It: [Fill in details]</p>
  </div>
</details>

{/* Curious */}
<details className="group bg-gray-800 p-4 rounded-lg shadow-md flex items-center space-x-4 cursor-pointer">
  <summary className="flex items-center space-x-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-indigo-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
      />
    </svg>
    <span className="text-lg font-medium text-white">Curious</span>
  </summary>
  <div className="mt-2 text-gray-400">
    <p>Where I Developed It: [Fill in details]</p>
    <p>How I Use It: [Fill in details]</p>
  </div>
</details>
</div>
</motion.div>

{/* Hobbies Section */}
<motion.div
className="max-w-4xl mx-auto mt-12 space-y-6"
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1, delay: 1 }}
>
<h2 className="text-2xl font-bold text-center mb-6">Hobbies & Interests</h2>
<div className="space-y-4">
{/* Sports */}
<details className="group bg-gray-800 p-4 rounded-lg shadow-md flex items-center space-x-4 cursor-pointer">
  <summary className="flex items-center space-x-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-red-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14l9-5-9-5-9 5 9 5z"
      />
    </svg>
    <span className="text-lg font-medium text-white">Sports</span>
  </summary>
  <div className="mt-2 text-gray-400">
    <p>Why I Enjoy It: [Fill in details]</p>
    <p>Notable Experience: [Fill in details]</p>
  </div>
</details>

{/* Hiking */}
<details className="group bg-gray-800 p-4 rounded-lg shadow-md flex items-center space-x-4 cursor-pointer">
  <summary className="flex items-center space-x-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-green-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14l9-5-9-5-9 5 9 5z"
      />
    </svg>
    <span className="text-lg font-medium text-white">Hiking</span>
  </summary>
  <div className="mt-2 text-gray-400">
    <p>Why I Enjoy It: [Fill in details]</p>
    <p>Notable Experience: [Fill in details]</p>
  </div>
</details>

{/* Working Out */}
<details className="group bg-gray-800 p-4 rounded-lg shadow-md flex items-center space-x-4 cursor-pointer">
  <summary className="flex items-center space-x-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-blue-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14l9-5-9-5-9 5 9 5z"
      />
    </svg>
    <span className="text-lg font-medium text-white">Working Out</span>
  </summary>
  <div className="mt-2 text-gray-400">
    <p>Why I Enjoy It: [Fill in details]</p>
    <p>Notable Experience: [Fill in details]</p>
  </div>
</details>

{/* Gaming */}
<details className="group bg-gray-800 p-4 rounded-lg shadow-md flex items-center space-x-4 cursor-pointer">
  <summary className="flex items-center space-x-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-purple-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14l9-5-9-5-9 5 9 5z"
      />
    </svg>
    <span className="text-lg font-medium text-white">Gaming</span>
  </summary>
  <div className="mt-2 text-gray-400">
    <p>Why I Enjoy It: [Fill in details]</p>
    <p>Notable Experience: [Fill in details]</p>
  </div>
</details>
</div>
</motion.div>

{/* Call-to-Action */}
<motion.div
className="mt-12 text-center"
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1, delay: 1.5 }}
>
<Link href="/contact">
<button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300">
  Let’s Connect!
</button>
</Link>
</motion.div>
</div>
</div>
);
}