import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  BookOpen,
  Users,
  MessageSquare,
  Heart,
  ArrowUp,
} from "lucide-react";

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
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <span className="text-white font-bold text-2xl">M</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold leading-tight">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                        MERN
                      </span>
                      <span className="text-gray-800 ml-2">Ecosystem</span>
                    </h3>
                    <p className="text-gray-500 text-sm font-medium">
                      Developer Community Platform
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed text-lg">
                  Join thousands of developers mastering the MERN stack. Share
                  knowledge, discover cutting-edge practices, and build the
                  future of web development together.
                </p>

                {/* Key Features */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Expert Content
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Active Community
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Latest Trends</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Free Resources
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Connect With Us
                </h4>
                <div className="flex space-x-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <Twitter className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold mb-1 text-gray-800">
                  Quick Links
                </h4>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
              </div>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/articles"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 group hover:translate-x-1"
                  >
                    <div className="w-8 h-8 bg-blue-50 group-hover:bg-blue-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-medium">Articles & Tutorials</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/authors"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 group hover:translate-x-1"
                  >
                    <div className="w-8 h-8 bg-green-50 group-hover:bg-green-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                      <Users className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="font-medium">Expert Authors</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 group hover:translate-x-1"
                  >
                    <div className="w-8 h-8 bg-purple-50 group-hover:bg-purple-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                      <MessageSquare className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="font-medium">Community</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 group hover:translate-x-1"
                  >
                    <div className="w-8 h-8 bg-orange-50 group-hover:bg-orange-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    </div>
                    <span className="font-medium">About Us</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 group hover:translate-x-1"
                  >
                    <div className="w-8 h-8 bg-red-50 group-hover:bg-red-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <span className="font-medium">Contact</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold mb-1 text-gray-800">
                  Resources
                </h4>
                <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></div>
              </div>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-600 hover:text-green-600 transition-all duration-300 group hover:translate-x-1"
                  >
                    <div className="w-8 h-8 bg-green-50 group-hover:bg-green-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="font-medium">Getting Started</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-600 hover:text-green-600 transition-all duration-300 group hover:translate-x-1"
                  >
                    <div className="w-8 h-8 bg-blue-50 group-hover:bg-blue-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium">Documentation</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-600 hover:text-green-600 transition-all duration-300 group hover:translate-x-1"
                  >
                    <div className="w-8 h-8 bg-purple-50 group-hover:bg-purple-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <span className="font-medium">Best Practices</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-600 hover:text-green-600 transition-all duration-300 group hover:translate-x-1"
                  >
                    <div className="w-8 h-8 bg-orange-50 group-hover:bg-orange-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    </div>
                    <span className="font-medium">Code Examples</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-600 hover:text-green-600 transition-all duration-300 group hover:translate-x-1"
                  >
                    <div className="w-8 h-8 bg-red-50 group-hover:bg-red-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <span className="font-medium">FAQ</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold mb-1 text-gray-800">
                    Stay Updated
                  </h4>
                  <div className="w-28 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Get the latest MERN stack insights, tutorials, and community
                  updates delivered straight to your inbox.
                </p>

                <div className="space-y-4">
                  <div className="relative">
                    <div className="flex rounded-xl overflow-hidden shadow-lg border border-gray-200">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="bg-white border-0 text-gray-900 placeholder-gray-500 focus:ring-0 focus:border-0 rounded-r-none flex-1 px-4 py-3"
                      />
                      <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-l-none px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                        Subscribe
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-xs text-gray-500 font-medium">
                      Join 25,000+ developers • No spam, unsubscribe anytime
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h5 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Get In Touch
                </h5>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group">
                    <div className="w-8 h-8 bg-blue-50 group-hover:bg-blue-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                      <MapPin className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium">
                      San Francisco, CA
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group">
                    <div className="w-8 h-8 bg-green-50 group-hover:bg-green-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                      <Phone className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm font-medium">
                      +1 (555) 123-4567
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group">
                    <div className="w-8 h-8 bg-purple-50 group-hover:bg-purple-100 rounded-lg flex items-center justify-center mr-3 transition-colors">
                      <Mail className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-sm font-medium">
                      hello@mernecosystem.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
