import { Button } from "@/components/ui/button";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative top border */}

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

      <div className="relative">
        {/* Main Footer Content */}

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">M</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    © 2024 MERN Ecosystem
                  </span>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <a
                    href="#"
                    className="hover:text-blue-600 transition-colors font-medium hover:underline"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="hover:text-blue-600 transition-colors font-medium hover:underline"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    className="hover:text-blue-600 transition-colors font-medium hover:underline"
                  >
                    Cookie Policy
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center text-sm text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                  <span className="font-medium">Made with</span>
                  <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
                  <span className="font-medium">
                    by developers, for developers
                  </span>
                </div>

                <Button
                  onClick={scrollToTop}
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <ArrowUp className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
