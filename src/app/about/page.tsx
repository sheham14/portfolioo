"use client"
import Link from 'next/link';

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
          About Me
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

              <div>
                <h3 className="text-xl font-semibold">Who Am I?</h3>
                <p className="text-gray-400">
                    I’m a software developer who focuses on solving problems effectively, continuously improving, 
                    and adapting quickly to new challenges. 
                    I thrive in dynamic environments where I can contribute, learn, and grow.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              
              <div>
                <h3 className="text-xl font-semibold">Education</h3>
                <p className="text-gray-400">
                    As a recent Software Development graduate from the College of the North Atlantic, 
                    I’ve spent the past three years building my skills through coursework and practical work terms. 
                    I’m now excited to apply what I’ve learned and grow further as part of a collaborative team.
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
              src="/headshot.png" // Replace with your image path
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
        <p>
            Built backend services and APIs using Java. 
            Capstone project includes a backend controller using Sping Boot
        </p>
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
        <p>
            Used JavaScript for frontend interactivity and dynamic web functionality in multiple projects, 
            including form handling, asynchronous API calls, and DOM manipulation.
        </p>

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
        <p>
            Developed data processing scripts and inventory tools in addition 
            to using machine learning modules like Scikit and PyTorch
        </p>

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
        <p>
            Structured web pages and components with semantic HTML,
            ensuring accessibility and clean markup across portfolio and class projects.
        </p>
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
        <p>
            Styled web applications and responsive layouts using CSS, incorporating animations, 
            grids, and flexbox for polished user interfaces.
        </p>
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
        <p>
            Built interactive single-page applications using React, managing state with hooks, 
            handling API calls, and creating reusable UI components.
        </p>      
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
        <p>
            This website was built using Next.js. Hope you liked it!
        </p>
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
        <p>
            Built component-based frontends for web applications using Angular, 
            leveraging two-way data binding, services, and reactive forms.
            I learned Angular during my work term at PAL Aerospace.
        </p>
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
        <p>
            Designed and queried relational databases using SQL, writing complex queries for data retrieval, 
            aggregation, and maintaining relational integrity.
        </p>
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
        <p>
            Integrated REST APIs in both frontend and backend projects, handling authentication, data exchange,
            and third-party service integration.
        </p>
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
        <p>
            Deployed applications on AWS, including EC2-hosted backends, RDS databases, 
            and Amplify-hosted frontends, ensuring connectivity, security, and scalability.
        </p>
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
        <p>
            This site was made with TailWind. Hope you liked it!
        </p>
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
        <p>
            Developed RESTful backend services using Java Spring, implementing controllers, services, 
            and repositories with database connectivity and authentication.
            I built my capstone project API using Spring Boot. 
        </p>
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
        <p>
            Built backend APIs using Express.js, handling routing, middleware,
            and database interactions for full-stack applications. 
            Most of my JavaScript projects were built using Express.
        </p>
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
        <p>
            Implemented server-side logic with Node.js, managing asynchronous operations, 
            file handling, and API endpoints in multiple projects. Almost all of my projects used Node.js.
        </p>  
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
        <p>
            Modeled and queried NoSQL databases with MongoDB, storing application data efficiently and performing aggregation and indexing.
        </p>
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
        <p>
            Used Object-Relational Mapping tools like Hibernate and Sequelize 
            to map application objects to relational databases, simplifying data persistence.
        </p>
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
        <p>
            Managed source code using Git, implementing version control, branching, merging, 
            and collaborative workflows during team projects.
        </p>
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
                <p>I realized during my work terms that I could learn new frameworks and software quickly. 
                    Especially during my time at PAL Aerospace where I had to learn Angular which was one of the hardest frameworks to work with.</p>
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
                <p>Being organized has helped me always complete my projects on time and be a reliable teammate. 
                    Whether its an in-class group project or my part-time job as a supervisor, 
                    I ensure my work is presentable and readable for others.  </p>
               
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
    <p>I was fortunate enough to be able to work in both formats of projects and understand my strentgths ands weaknesses. 
        Doing multiple projects of each type has helped me amend my shortcomings.</p>
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
    <p>Although I was extremely introverted at first, working on team projects more often and working a retail job has helped me become a proficient communicator.</p>
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
    <p>I enjoy playing a variety of sports such as soccer, cricket, and badminton.</p>
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
    <p>I fell in love with hiking after coming to Canada. It is impossible not to go on hikes with such beautful trails in Newfoundland.
         I wish the summers were longer so i could hike more.</p>
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
    <p>I have been a fitness enthusiast since high-school. Starting my mornings at the gym keeps me fresh throughout the day.</p>
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
    <p>I used to be an avid gamer during my teens. Although work and academics have kept me busy mostly, 
        I still enjoy an occasional gaming session to take a break from the hustle.</p>

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