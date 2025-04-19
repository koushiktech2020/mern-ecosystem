const Footer = () => {
  return (
    <footer className="bg-white shadow ">
      <div className="container mx-auto px-5 py-4 flex justify-between items-center">
        <div className="text-gray-800">
          © 2023 My Blog. All rights reserved.
        </div>
        <div className="space-x-4">
          <a className="text-gray-800 hover:text-gray-600" href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="text-gray-800 hover:text-gray-600" href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="text-gray-800 hover:text-gray-600" href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
