const Header = () => {
  return (
    <header className="bg-white shadow px-16">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">My Blog</div>
        <nav className="space-x-4">
          <a className="text-gray-800 hover:text-gray-600" href="#">
            Home
          </a>
          <a className="text-gray-800 hover:text-gray-600" href="#">
            About
          </a>
          <a className="text-gray-800 hover:text-gray-600" href="#">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
