import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Section: Logo */}
        <div>
        <Link href="/">
          <img
            src="/sheham-logo.png" // Replace with the path to your logo in the public folder
            alt="Sheham Mohammed Logo"
            className="w-32 h-auto" // Adjust size as needed
          />
          </Link>
        </div>

        {/* Right Section: Menu */}
        <div className="flex gap-4">
          {/* Home */}
          <div className="w-24 h-10 flex items-center justify-center border border-gray-500 rounded-md">
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </div>
          {/* About */}
          <div className="w-24 h-10 flex items-center justify-center border border-gray-500 rounded-md">
            <Link href="/about" className="hover:text-gray-400">
              About
            </Link>
          </div>
          {/* Projects */}
          <div className="w-24 h-10 flex items-center justify-center border border-gray-500 rounded-md">
            <Link href="/projects" className="hover:text-gray-400">
              Projects
            </Link>
          </div>
          {/* Contact */}
          <div className="w-24 h-10 flex items-center justify-center border border-gray-500 rounded-md">
            <Link href="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;