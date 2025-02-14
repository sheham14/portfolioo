// pages/projects.tsx
import Navbar from '../components/Navbar';

export default function Projects() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <div className="mt-8 space-y-6">
          <div className="bg-black p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold">Minesweeper Game</h2>
            <p className="mt-2">A classic Minesweeper game built with JavaScript. You can find the code on my GitHub.</p>
            <a href="https://github.com/your-github-username/minesweeper" target="_blank" className="text-blue-500 mt-4 inline-block">View on GitHub</a>
          </div>
          {/* Add more projects here */}
        </div>
      </div>
    </div>
  );
}
