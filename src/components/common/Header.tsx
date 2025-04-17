"use client";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="#" className="text-2xl font-bold text-gray-800">
            <span className="text-blue-600">MERN</span>Blogs
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="#" className="text-gray-600 hover:text-gray-800">
              Blogs
            </Link>
            <Link to="#" className="text-gray-600 hover:text-gray-800">
              Authors
            </Link>
            <Link to="#" className="text-gray-600 hover:text-gray-800">
              Chat
            </Link>
            <img
              src="https://storage.googleapis.com/a1aa/image/SaeWNNVPDd7yONGOOmVmPodqlUtLq_A6RUQOe524Lb8.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
              <i className="fas fa-moon"></i>
            </button>
          </div>

          {/* Mobile Icons */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
              <i className="fas fa-moon"></i>
            </button>
            <button
              onClick={() => setDrawerOpen(true)}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {drawerOpen && (
        <>
          <div
            onClick={() => setDrawerOpen(false)}
            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity duration-3000 ease-in-out"
          ></div>

          {/* Drawer */}
          <div
            className={`fixed inset-y-0 right-0 w-64 bg-white shadow-md p-4 z-50 transform transition-transform duration-300 ease-in-out ${
              drawerOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => setDrawerOpen(false)}
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                <i className="fas fa-times"></i>
              </button>
              <img
                src="https://storage.googleapis.com/a1aa/image/SaeWNNVPDd7yONGOOmVmPodqlUtLq_A6RUQOe524Lb8.jpg"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <Link
              to="#"
              className="block px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Blogs
            </Link>
            <Link
              to="#"
              className="block px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Authors
            </Link>
            <Link
              to="#"
              className="block px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Chat
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
