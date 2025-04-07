import React from "react";
import { useCourse } from "@/context/CourseContext";

const Footer: React.FC = () => {
  const { scrollToSection } = useCourse();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">TeamSkills</h3>
            <p className="text-gray-400 text-sm">
              Practical courses for professional growth and team excellence.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("modules")}
                  className="hover:text-white transition"
                >
                  Modules
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("quiz")}
                  className="hover:text-white transition"
                >
                  Team Style Quiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("reflection")}
                  className="hover:text-white transition"
                >
                  Reflection
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm">
              Need assistance or have questions?
            </p>
            <a
              href="mailto:support@teamskills.com"
              className="text-green-400 hover:text-green-300 text-sm transition"
            >
              support@teamskills.com
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} TeamSkills. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
