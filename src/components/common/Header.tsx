import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="#" className="text-2xl font-bold text-gray-800">
          <span className="text-blue-600 me-1">MERN</span>Ecosystem
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
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center">
          {/* <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <i className="fas fa-moon"></i>
          </button> */}
          <Button className="bg-white text-gray-600 hover:bg-secondary hover:text-gray-800 focus:outline-none">
            <i className="fas fa-bars"></i>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
