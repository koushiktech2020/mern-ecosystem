import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";

import { Menu, X, BookText, Users, MessageSquare } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="#" className="text-2xl font-bold text-gray-800">
          <span className="text-blue-600 me-1">MERN</span>Ecosystem
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link
            to="#"
            className="text-sm transition-colors text-gray-500 font-semibold hover:text-blue-500"
          >
            Blogs
          </Link>
          <Link
            to="#"
            className="text-sm transition-colors text-gray-500 font-semibold hover:text-blue-500"
          >
            Authors
          </Link>
          <Link
            to="#"
            className="text-sm transition-colors text-gray-500 font-semibold hover:text-blue-500"
          >
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
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>

            <SheetContent className="sm:hidden p-6">
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
                <p className="text-sm text-gray-500">
                  Navigate through the app
                </p>
              </div>

              <nav className="flex flex-col gap-4">
                <Link
                  to="#"
                  className="flex items-center gap-3 text-gray-700 hover:text-black text-base font-medium transition-colors"
                >
                  <BookText className="w-5 h-5 text-cyan-600 group-hover:text-purple-800" />
                  Blogs
                </Link>
                <Link
                  to="#"
                  className="flex items-center gap-3 text-gray-700 hover:text-black text-base font-medium transition-colors"
                >
                  <Users className="w-5 h-5 text-blue-600 group-hover:text-blue-800" />
                  Authors
                </Link>
                <Link
                  to="#"
                  className="flex items-center gap-3 text-gray-700 hover:text-black text-base font-medium transition-colors"
                >
                  <MessageSquare className="w-5 h-5 text-violet-600 group-hover:text-green-800" />
                  Chat
                </Link>
              </nav>

              <SheetFooter className="mt-auto pt-10">
                <SheetClose asChild>
                  <Button
                    variant="outline"
                    className="w-full flex items-center gap-2 bg-blue-600 hover:bg-blue-800 text-white"
                  >
                    <X className="w-4 h-4" /> Close Menu
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
