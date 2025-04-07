import React, { useState } from "react";
import { useCourse } from "@/context/CourseContext";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollToSection } = useCourse();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-primary font-bold text-xl">TeamSkills</span>
        </div>
        <nav>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-500 hover:text-primary"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <ul className="hidden md:flex space-x-8">
            <li>
              <button
                onClick={() => handleNavigation("modules")}
                className="text-gray-600 hover:text-primary"
              >
                Modules
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("quiz")}
                className="text-gray-600 hover:text-primary"
              >
                Quiz
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("reflection")}
                className="text-gray-600 hover:text-primary"
              >
                Reflection
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
            <button
              onClick={() => handleNavigation("modules")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
            >
              Modules
            </button>
            <button
              onClick={() => handleNavigation("quiz")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
            >
              Quiz
            </button>
            <button
              onClick={() => handleNavigation("reflection")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
            >
              Reflection
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
