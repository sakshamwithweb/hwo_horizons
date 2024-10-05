"use client"
import Link from 'next/link';

const Navbar = ({ destination }) => {

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex">
            <Link href="/" className="text-lg font-bold text-gray-700 hover:text-gray-900 transition duration-300">
              HWO Horizons
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className={`text-gray-700 hover:text-gray-900 transition duration-300 `}>
              Home
            </Link>
            <Link href={`${destination}`} className={`text-gray-700 hover:text-gray-900 transition duration-300 `}>
              Go to {destination} section
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
