import React, { useState } from "react";
import { useCourse } from "@/context/CourseContext";
import { Menu, Trophy, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [gameDetailsOpen, setGameDetailsOpen] = useState(false);
  const { scrollToSection, progress, calculateProgress, modules } = useCourse();

  const progressPercentage = calculateProgress();
  const completedModules = Object.values(progress.modules).filter(
    Boolean
  ).length;
  const totalModules = Object.keys(progress.modules).length;
  const quizCompleted = progress.quiz;
  const reflectionCompleted = progress.reflection;

  const gamePath = [
    { id: "start", label: "Start", emoji: "🚀", completed: true },
    ...modules.map((module: any) => ({
      id: `module${module.id}`,
      label: module.title,
      emoji: module.icon,
      sectionId: "modules",
      completed: progress.modules[module.id] || false,
    })),
    {
      id: "quiz",
      label: "Team Style Quiz",
      emoji: "❓",
      sectionId: "quiz",
      completed: quizCompleted,
    },
    {
      id: "reflection",
      label: "Final Reflection",
      emoji: "🔍",
      sectionId: "reflection",
      completed: reflectionCompleted,
    },
    {
      id: "finish",
      label: "Complete!",
      emoji: "🏆",
      completed:
        completedModules === totalModules &&
        quizCompleted &&
        reflectionCompleted,
    },
  ];

  const currentStationIndex = gamePath.findIndex(
    (station) => !station.completed
  );
  const activeStationIndex =
    currentStationIndex === -1 ? gamePath.length - 1 : currentStationIndex;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleGameDetails = () => {
    setGameDetailsOpen(!gameDetailsOpen);
  };

  const handleNavigation = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg pt-1">
      <div className="container mx-auto px-2 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center space-x-1 gradient-text">
            <Trophy className="h-5 w-5 text-primary mr-1 float-animation" />
            <h1 className="font-bold text-xl tracking-tight">
              TeamSkills Quest
            </h1>
          </div>
        </div>

        <div className="flex items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleGameDetails}
            className="md:hidden mr-2 game-header-btn"
            aria-label="Toggle progress tracker"
          >
            {gameDetailsOpen ? (
              <ChevronUp className="h-4 w-4 text-gray-500" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-500" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMobileMenu}
            className="md:hidden game-header-btn"
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5 text-gray-500" />
          </Button>

          <nav className="hidden md:block">
            <ul className="flex space-x-6 text-sm">
              <li>
                <button
                  onClick={() => handleNavigation("modules")}
                  className="flex items-center text-gray-600 hover:text-primary game-header-btn px-3 py-1.5 rounded-full hover:bg-gray-50"
                >
                  <span className="mr-1.5">📚</span> Modules
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("quiz")}
                  className="flex items-center text-gray-600 hover:text-primary game-header-btn px-3 py-1.5 rounded-full hover:bg-gray-50"
                >
                  <span className="mr-1.5">🧠</span> Quiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("reflection")}
                  className="flex items-center text-gray-600 hover:text-primary game-header-btn px-3 py-1.5 rounded-full hover:bg-gray-50"
                >
                  <span className="mr-1.5">🔍</span> Reflection
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <section
        className={`bg-white border-t border-gray-100 pt-3 pb-4 px-2 md:block ${
          gameDetailsOpen ? "block" : "hidden"
        }`}
      >
        <div className="container mx-auto">
          <div className="progress-path-container bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 shadow-sm">
            <div className="flex flex-wrap justify-between items-center mb-3">
              <div className="flex items-center">
                <div className="w-5 h-5 mr-2 text-yellow-500">🏆</div>
                <h2 className="text-sm font-medium text-gray-700">
                  Your Quest Progress
                </h2>
              </div>
              <div className="flex justify-center items-center space-x-2 mb-3">
                <span className="text-sm font-medium">Your progress:</span>
                <div className="w-48 bg-white/30 rounded-full overflow-hidden">
                  <Progress value={progressPercentage} className="h-2" />
                </div>
                <span className="text-sm font-medium">
                  {progressPercentage}%
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-5 gap-4 md:grid-cols-10 relative">
                {gamePath.map((station, index) => (
                  <div
                    key={station.id}
                    className="flex items-center flex-col hover:cursor-pointer hover:bg-gray-200 hover:scale-125 transition-transform duration-200 rounded-lg p-2 hover:bg-opacity-50"
                    onClick={() =>
                      station.id ? handleNavigation(station.id) : null
                    }
                  >
                    <div
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center border-2
                        ${
                          station.completed
                            ? "bg-green-100 border-green-500 text-green-800"
                            : "bg-gray-200 border-gray-300 text-gray-600"
                        }
                        ${
                          index === activeStationIndex
                            ? "ring-2 ring-yellow-400 animate-pulse"
                            : ""
                        }
                      `}
                      title={station.label}
                    >
                      <span className="text-sm">{station.emoji}</span>
                    </div>
                    <p className="text-center text-xs mt-2 text-gray-600">
                      {station.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-4 gap-4 text-xs text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-100 border border-green-500 mr-1"></div>
                <span>Completed</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-yellow-100 border border-yellow-500 mr-1"></div>
                <span>Current</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-gray-200 border border-gray-300 mr-1"></div>
                <span>Upcoming</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-2 bg-white">
            <h2 className="px-3 text-xs uppercase font-semibold text-gray-500 tracking-wider">
              Quest Navigation
            </h2>

            <button
              onClick={() => handleNavigation("modules")}
              className="block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 border border-gray-100 shadow-sm hover:shadow transition-all"
            >
              <div className="flex items-center">
                <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <span>📚</span>
                </div>
                <span>Modules</span>
              </div>
            </button>

            <button
              onClick={() => handleNavigation("quiz")}
              className="block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 border border-gray-100 shadow-sm hover:shadow transition-all"
            >
              <div className="flex items-center">
                <div className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <span>🧠</span>
                </div>
                <span>Team Style Quiz</span>
              </div>
            </button>

            <button
              onClick={() => handleNavigation("reflection")}
              className="block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 border border-gray-100 shadow-sm hover:shadow transition-all"
            >
              <div className="flex items-center">
                <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                  <span>🔍</span>
                </div>
                <span>Final Reflection</span>
              </div>
            </button>

            <div className="pt-2 px-3">
              <p className="text-xs text-gray-500 flex items-center">
                <span className="mr-1">💡</span> Tip: Complete all stages to
                earn your team skills certificate
              </p>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
