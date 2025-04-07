import React, { useState } from "react";
import { useCourse } from "@/context/CourseContext";
import { Menu, Trophy, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [gameDetailsOpen, setGameDetailsOpen] = useState(false);
  const { scrollToSection, progress, calculateProgress } = useCourse();

  // Calculate current progress for the game path
  const progressPercentage = calculateProgress();
  const completedModules = Object.values(progress.modules).filter(Boolean).length;
  const totalModules = Object.keys(progress.modules).length;
  const quizCompleted = progress.quiz;
  const reflectionCompleted = progress.reflection;

  // Game path stations with their completion status
  const gamePath = [
    { id: "start", label: "Start", emoji: "🚀", completed: true },
    { id: "module1", label: "Module 1", emoji: "📚", sectionId: "modules", completed: progress.modules[1] || false },
    { id: "module2", label: "Module 2", emoji: "📝", sectionId: "modules", completed: progress.modules[2] || false },
    { id: "module3", label: "Module 3", emoji: "🧩", sectionId: "modules", completed: progress.modules[3] || false },
    { id: "quiz", label: "Team Style Quiz", emoji: "🧠", sectionId: "quiz", completed: quizCompleted },
    { id: "reflection", label: "Final Reflection", emoji: "🔍", sectionId: "reflection", completed: reflectionCompleted },
    { id: "finish", label: "Complete!", emoji: "🏆", completed: (completedModules === totalModules && quizCompleted && reflectionCompleted) }
  ];

  // Get current active station - first incomplete one or last if all complete
  const currentStationIndex = gamePath.findIndex(station => !station.completed);
  const activeStationIndex = currentStationIndex === -1 ? gamePath.length - 1 : currentStationIndex;
  
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

  // Function to render game path station
  const renderStation = (station: any, index: number, isLast = false) => {
    const isActive = index === activeStationIndex;
    const isCompleted = station.completed;

    // Determine station styling based on completion/active status
    let bgColor = "bg-gray-200";
    let textColor = "text-gray-600";
    let borderColor = "border-gray-300";
    
    if (isCompleted) {
      bgColor = "bg-green-100"; 
      textColor = "text-green-800";
      borderColor = "border-green-500";
    }
    
    if (isActive) {
      bgColor = "bg-yellow-100";
      textColor = "text-yellow-800";
      borderColor = "border-yellow-500";
    }
    
    if (station.id === "finish" && isCompleted) {
      bgColor = "bg-purple-100";
      textColor = "text-purple-800";
      borderColor = "border-purple-500";
    }

    return (
      <div key={station.id} className="relative">
        {/* Station circle */}
        <div 
          className={`
            ${bgColor} ${textColor} ${borderColor}
            w-8 h-8 rounded-full border-2 flex items-center justify-center
            ${isActive ? "ring-2 ring-yellow-400 animate-pulse" : ""}
            ${station.sectionId ? "cursor-pointer hover:brightness-105" : ""}
          `}
          onClick={() => station.sectionId ? handleNavigation(station.sectionId) : null}
          title={station.label}
        >
          <span className="text-xs">{station.emoji}</span>
        </div>
        
        {/* Path line between stations */}
        {!isLast && (
          <div className={`
            absolute top-1/2 left-full h-0.5 w-full -translate-y-1/2
            ${index < activeStationIndex ? "bg-green-500" : "bg-gray-300"}
          `}></div>
        )}
        
        {/* Active indicator */}
        {isActive && (
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-yellow-600 text-xs font-bold">
            ▲
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg pt-1">
      {/* Main header row */}
      <div className="container mx-auto px-2 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center space-x-1 gradient-text">
            <Trophy className="h-5 w-5 text-primary mr-1 float-animation" />
            <span className="font-bold text-xl tracking-tight">TeamSkills Quest</span>
          </div>
        </div>
        
        <div className="flex items-center">
          {/* Progress tracker toggle for mobile */}
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
          
          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMobileMenu}
            className="md:hidden game-header-btn"
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5 text-gray-500" />
          </Button>
          
          {/* Desktop navigation */}
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
      
      {/* Game board progress path (always visible on desktop) */}
      <div className={`bg-white border-t border-gray-100 pt-3 pb-4 px-2 md:block ${gameDetailsOpen ? "block" : "hidden"}`}>
        <div className="container mx-auto">
          {/* Progress info */}
          <div className="flex flex-wrap justify-between items-center mb-3">
            <div className="flex items-center">
              <div className="w-5 h-5 mr-2 text-yellow-500">🏆</div>
              <h3 className="text-sm font-medium text-gray-700">Your Quest Progress</h3>
            </div>
            <div className="text-xs bg-gradient-to-r from-blue-50 to-purple-50 border border-purple-100 rounded-full px-3 py-1.5 shadow-sm">
              <span className="font-medium">{progressPercentage}%</span> Complete
              {progressPercentage === 100 && " 🎉"}
            </div>
          </div>
          
          {/* Interactive game path */}
          <div className="progress-path-container bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 shadow-sm">
            {/* Background path line */}
            <div className="w-full h-1 bg-gray-200 absolute left-0 top-1/2 transform -translate-y-1/2"></div>
            
            {/* Filled path line based on progress */}
            <div 
              className="h-1 bg-gradient-to-r from-green-400 to-blue-500 absolute left-0 top-1/2 transform -translate-y-1/2"
              style={{ width: `${Math.max((activeStationIndex - 1) / (gamePath.length - 2) * 100, 0)}%` }}
            ></div>
            
            {/* Path stations */}
            <div className="relative z-10 w-full flex justify-between items-center">
              {gamePath.map((station, index) => renderStation(station, index, index === gamePath.length - 1))}
            </div>
            
            {/* Small labels for stations - only visible on larger screens */}
            <div className="hidden md:flex justify-between mt-2 text-xs text-gray-500 px-1">
              {gamePath.map((station) => (
                <div key={`label-${station.id}`} className="text-center" style={{ width: '14%' }}>
                  {station.label}
                </div>
              ))}
            </div>
          </div>
          
          {/* Mini legend */}
          <div className="flex justify-center mt-2 gap-4 text-xs text-gray-500">
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
      
      {/* Mobile menu (when open) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-2 bg-white">
            <h3 className="px-3 text-xs uppercase font-semibold text-gray-500 tracking-wider">Quest Navigation</h3>
            
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
              <div className="text-xs text-gray-500 flex items-center">
                <span className="mr-1">💡</span> Tip: Complete all stages to earn your team skills certificate
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
