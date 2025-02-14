import { motion } from 'framer-motion';
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8"> {/* Added py-20 */}
        {/* Profile Picture and Introduction */}
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Profile Picture */}
          <img
            src="/headshot.png" // Correct path to your image in the public folder
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 shadow-lg mb-6 transition-transform duration-300 hover:scale-105"
          />

          {/* Animated h1 */}
          <motion.h1
            className="text-4xl font-bold text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm Sheham, an aspiring Software Developer.
          </motion.h1>

          {/* Animated p */}
          <motion.p
            className="text-lg mt-2 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Learning to code since 2022
          </motion.p>
        </motion.div>

        {/* Buttons Section */}
        <motion.div
  className="mt-12 space-y-6 text-center"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1 }}
>
  {/* About Button */}
  <div>
    <Link href="/about">
      <button className="w-64 px-8 py-4 bg-blue-500 text-white font-semibold rounded-md shadow-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
        <span>About</span>
      </button>
    </Link>
    <p className="text-gray-400 mt-2">Learn more about me</p>
  </div>

  {/* Projects Button */}
  <div>
    <Link href="/projects">
      <button className="w-64 px-8 py-4 bg-green-500 text-white font-semibold rounded-md shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
        <span>Projects</span>
      </button>
    </Link>
    <p className="text-gray-400 mt-2">Explore my work</p>
  </div>

  {/* Contact Button */}
  <div>
    <Link href="/contact">
      <button className="w-64 px-8 py-4 bg-red-500 text-white font-semibold rounded-md shadow-lg hover:bg-red-600 transition duration-300 flex items-center justify-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <span>Contact</span>
      </button>
    </Link>
    <p className="text-gray-400 mt-2">Let’s connect!</p>
  </div>
</motion.div>
      </div>
    </div>
  );
}