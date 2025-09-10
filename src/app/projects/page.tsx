"use client";

import { useState } from "react";

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"user" | "admin">("user");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold">My Projects</h1>

      {/* Project Card */}
      <div className="mt-8 w-full max-w-3xl">
        <div
          className="bg-black p-6 rounded-lg shadow-lg cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <h2 className="text-2xl font-semibold flex justify-between items-center">
            Capstone Project
            <span>{open ? "▲" : "▼"}</span>
          </h2>
          <p className="mt-2">
            An insurance quoting application with Admin and User interfaces.
            Built with Spring Boot backend and React frontend. Deployed on AWS
            EC2 and Amplify. Click the top right corner to see a preview.
          </p>
          <a
            href="https://github.com/sheham14/Capstone2025"
            target="_blank"
            className="text-blue-500 mt-4 inline-block"
          >
            View on GitHub
          </a>
                    <a
            href="https://main.dojq4677oq2fu.amplifyapp.com/"
            target="_blank"
            className="text-blue-500 mt-4 inline-block"
          >
            Live Demo (For admin login use Email: repman@example.com | Password: adminpass)
          </a>
        </div>

        {/* Expanded Content */}
        {open && (
          <div className="bg-gray-800 mt-4 p-6 rounded-lg">
            {/* Tabs */}
            <div className="flex space-x-4 border-b border-gray-600 mb-6">
              <button
                onClick={() => setActiveTab("user")}
                className={`pb-2 ${
                  activeTab === "user"
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-400"
                }`}
              >
                User Flow
              </button>
              <button
                onClick={() => setActiveTab("admin")}
                className={`pb-2 ${
                  activeTab === "admin"
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-400"
                }`}
              >
                Admin Flow
              </button>
            </div>

            {/* User Flow */}
            {activeTab === "user" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">1. Register & Login</h3>
                  <img
                    src="/screenshots/Customer Login Page.png"
                    alt="User login screen"
                    className="rounded-lg mt-2"
                  />
                </div>
                                <div>
                  <h3 className="text-xl font-semibold">2. Homepage</h3>
                  <img
                    src="/screenshots/Customer Dashboard.png"
                    alt="User Homepage screen"
                    className="rounded-lg mt-2"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">3. Request a Home Quote</h3>
                  <img
                    src="/screenshots/Home Quote.png"
                    alt="User quote request"
                    className="rounded-lg mt-2"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">4. Request an Auto Quote</h3>
                  <img
                    src="/screenshots/Car Quote.png"
                    alt="Purchase screen"
                    className="rounded-lg mt-2"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">5. View Active Policies</h3>
                  <img
                    src="/screenshots/My Policies (Home and Auto).png"
                    alt="Active policies"
                    className="rounded-lg mt-2"
                  />
                </div>
                                <div>
                  <h3 className="text-xl font-semibold">6. Contact</h3>
                  <img
                    src="/screenshots/Contact Page.png"
                    alt="Contact Page"
                    className="rounded-lg mt-2"
                  />
                </div>
                                <div>
                  <h3 className="text-xl font-semibold">7. About</h3>
                  <img
                    src="/screenshots/About Page.png"
                    alt="About Page"
                    className="rounded-lg mt-2"
                  />
                </div>
              </div>
            )}

            {/* Admin Flow */}
            {activeTab === "admin" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">1. Admin Login</h3>
                  <img
                    src="/screenshots/Admin Login Page.png"
                    alt="Admin login screen"
                    className="rounded-lg mt-2"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">2. Admin Dashboard</h3>
                  <img
                    src="/screenshots/Admin Homepage.png"
                    alt="Admin login screen"
                    className="rounded-lg mt-2"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">3. Manage Users</h3>
                  <img
                    src="/screenshots/Customers.png"
                    alt="Manage users"
                    className="rounded-lg mt-2"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">4. Renew / Cancel Policies</h3>
                  <img
                    src="/screenshots/Admin User Policies.png"
                    alt="Policy management"
                    className="rounded-lg mt-2"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">5. View Policies by Category</h3>
                  <img
                    src="/screenshots/Admin Policies Category.png"
                    alt="Policy by Category"
                    className="rounded-lg mt-2"
                  />
                </div>
              </div>
            )}
          </div>
        )}
        </div>
            <div className="mt-12 text-center text-gray-400">
            <p className="italic">✨ More projects coming soon... ✨</p>
        </div>
    </div>
  );
}
