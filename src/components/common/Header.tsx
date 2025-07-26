import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";

import {
  Menu,
  X,
  BookText,
  Users,
  MessageSquare,
  Search,
  Bell,
  User,
} from "lucide-react";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white font-bold text-lg">M</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  MERN
                </span>
                <span className="text-gray-800 ml-1">Ecosystem</span>
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Developer Community</p>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/articles"
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                isActive("/articles")
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              <BookText className="w-4 h-4 inline mr-2" />
              Articles
              {isActive("/articles") && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full"></div>
              )}
            </Link>

            <Link
              to="/authors"
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                isActive("/authors")
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              <Users className="w-4 h-4 inline mr-2" />
              Authors
              {isActive("/authors") && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full"></div>
              )}
            </Link>

            <Link
              to="#"
              className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-lg group"
            >
              <MessageSquare className="w-4 h-4 inline mr-2" />
              Community
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex w-10 h-10 text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex w-10 h-10 text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 relative"
            >
              <Bell className="w-5 h-5" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></div>
            </Button>

            {/* User Profile */}
            <div className="hidden md:flex items-center space-x-3">
              <div className="relative group cursor-pointer">
                <img
                  src="https://randomuser.me/api/portraits/men/35.jpg"
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-gray-200 group-hover:border-blue-500 transition-all duration-300 shadow-sm"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="hidden xl:block">
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500">Developer</p>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Search */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden w-10 h-10 text-gray-500 hover:text-blue-600 hover:bg-blue-50"
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="w-10 h-10 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>

              <SheetContent className="w-80 p-0 [&>button:last-child]:hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-blue-50 to-indigo-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">M</span>
                    </div>
                    <div>
                      <SheetTitle className="text-lg font-bold text-gray-900">
                        MERN Ecosystem
                      </SheetTitle>
                      <p className="text-xs text-gray-500">
                        Developer Community
                      </p>
                    </div>
                  </div>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 bg-white hover:bg-gray-100 rounded-full shadow-sm"
                    >
                      <X className="w-4 h-4 text-gray-600" />
                    </Button>
                  </SheetClose>
                </div>

                {/* Navigation */}
                <nav className="p-6 space-y-2">
                  <Link
                    to="/articles"
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      isActive("/articles")
                        ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    }`}
                  >
                    <BookText className="w-5 h-5" />
                    <span>Articles</span>
                    {isActive("/articles") && (
                      <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
                    )}
                  </Link>

                  <Link
                    to="/authors"
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      isActive("/authors")
                        ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    }`}
                  >
                    <Users className="w-5 h-5" />
                    <span>Authors</span>
                    {isActive("/authors") && (
                      <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
                    )}
                  </Link>

                  <Link
                    to="#"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-all duration-300"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Community</span>
                  </Link>
                </nav>

                {/* User Profile Section */}
                <div className="border-t p-6 mt-auto">
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <img
                      src="https://randomuser.me/api/portraits/men/35.jpg"
                      alt="Profile"
                      className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        John Doe
                      </p>
                      <p className="text-xs text-gray-500">Developer</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 text-gray-400 hover:text-gray-600"
                    >
                      <User className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
