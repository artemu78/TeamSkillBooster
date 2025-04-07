import React from "react";
import { useCourse } from "@/context/CourseContext";
import { Button } from "@/components/ui/button";

const ProgressTracker: React.FC = () => {
  const { progress, scrollToSection } = useCourse();
  
  // Calculate completed items for game positions
  const completedModules = Object.values(progress.modules).filter(Boolean).length;
  const completedItems = completedModules + (progress.quiz ? 1 : 0) + (progress.reflection ? 1 : 0);
  const totalItems = Object.keys(progress.modules).length + 2; // +2 for quiz and reflection

  const playerPosition = completedItems;
  
  // Define board elements
  const boardSpaces = [
    { id: 0, label: "Start", type: "start" },
    { id: 1, label: "Module 1", type: "module", target: "modules" },
    { id: 2, label: "Module 2", type: "module", target: "modules" },
    { id: 3, label: "Module 3", type: "module", target: "modules" },
    { id: 4, label: "Team Quiz", type: "quiz", target: "quiz" },
    { id: 5, label: "Final Reflection", type: "reflection", target: "reflection" },
    { id: 6, label: "Finish!", type: "finish" }
  ];

  // Define ladders (shortcuts upward)
  const ladders = [
    { from: 1, to: 3, label: "Fast learner!" }
  ];

  // Define snakes (setbacks)
  const snakes = [
    { from: 4, to: 2, label: "Forgot key concept!" }
  ];

  // Function to handle space click
  const handleSpaceClick = (space: any) => {
    if (space.target) {
      scrollToSection(space.target);
    }
  };

  // Determine if a space has a player
  const hasPlayer = (spaceId: number) => {
    return spaceId === playerPosition;
  };

  // Determine if a space is completed
  const isCompleted = (spaceId: number) => {
    return spaceId <= playerPosition;
  };

  // Render a board space
  const renderSpace = (space: any) => {
    const isActive = hasPlayer(space.id);
    const isDone = isCompleted(space.id);

    // Style based on space type
    let baseStyle = "relative flex items-center justify-center rounded-lg transition-all duration-300 ";
    
    if (space.type === "start") {
      baseStyle += "bg-green-100 border-2 border-green-400 text-green-800 ";
    } else if (space.type === "finish") {
      baseStyle += "game-finish border-2 border-indigo-400 text-indigo-800 ";
    } else if (space.type === "module") {
      baseStyle += isDone 
        ? "bg-primary/20 border-2 border-primary text-primary cursor-pointer hover:shadow-md " 
        : "bg-gray-100 border-2 border-gray-300 text-gray-500 cursor-pointer hover:bg-gray-200 ";
      // Add emoji based on module number
      const moduleEmoji = ["📚", "📝", "🧩"][space.id - 1] || "📋";
      space.emoji = moduleEmoji;
    } else if (space.type === "quiz") {
      baseStyle += isDone 
        ? "bg-purple-100 border-2 border-purple-400 text-purple-800 cursor-pointer hover:shadow-md " 
        : "bg-gray-100 border-2 border-gray-300 text-gray-500 cursor-pointer hover:bg-gray-200 ";
      space.emoji = "🧠";
    } else if (space.type === "reflection") {
      baseStyle += isDone 
        ? "bg-orange-100 border-2 border-orange-400 text-orange-800 cursor-pointer hover:shadow-md " 
        : "bg-gray-100 border-2 border-gray-300 text-gray-500 cursor-pointer hover:bg-gray-200 ";
      space.emoji = "🔍";
    }

    // Add shadow and transform for active state
    if (isActive) {
      baseStyle += "ring-4 ring-yellow-400 transform scale-105 shadow-lg ";
    }

    return (
      <div 
        key={space.id}
        className={`${baseStyle} w-full h-20 md:h-24`}
        onClick={() => handleSpaceClick(space)}
      >
        <div className="flex flex-col items-center justify-center p-2 text-center">
          {space.id > 0 && space.id < 6 && (
            <span className="text-lg mb-1">{space.emoji}</span>
          )}
          <span className="font-medium text-sm md:text-base">{space.label}</span>
          
          {/* Player indicator */}
          {isActive && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center shadow-md game-player">
              <span className="text-lg">{space.type === "finish" ? "🏆" : "🧑"}</span>
            </div>
          )}
          
          {/* Completion indicator */}
          {isDone && !isActive && space.id > 0 && (
            <div className="mt-1 text-xs md:text-sm font-medium">
              ✓ Complete
            </div>
          )}
        </div>
      </div>
    );
  };

  // Render a ladder
  const renderLadder = (ladder: any) => {
    // Only show ladders the player has encountered
    if (playerPosition < ladder.from) return null;
    
    const fromX = ladder.from * 100 + 50;
    const toX = ladder.to * 100 + 50;
    const fromY = 80;
    const toY = 80;
    
    return (
      <div key={`ladder-${ladder.from}-${ladder.to}`} className="absolute z-10 hidden md:block">
        {/* Ladder path line */}
        <div className="ladder-path"
             style={{
               position: 'absolute',
               top: `${fromY}px`,
               left: `${fromX}px`,
               width: `${Math.abs(toX - fromX)}px`,
               height: '4px',
               borderTop: '4px dashed #22c55e',
               transform: 'translateY(-2px)',
               zIndex: 5
             }}>
        </div>
        
        {/* Ladder emoji at start */}
        <div 
          style={{
            position: 'absolute',
            top: `${fromY - 20}px`,
            left: `${fromX}px`,
            zIndex: 10
          }}
        >
          🪜
        </div>
        
        {/* Label */}
        <div className="absolute bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold"
             style={{
               top: `${fromY - 30}px`,
               left: `${fromX + 25}px`,
               zIndex: 10,
               whiteSpace: 'nowrap',
               boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
             }}>
          {ladder.label}
        </div>
        
        {/* Arrow showing direction */}
        <div style={{
          position: 'absolute',
          top: `${fromY - 13}px`,
          left: `${toX - 20}px`,
          zIndex: 10,
          transform: 'rotate(-90deg)'
        }}>
          ⬆️
        </div>
      </div>
    );
  };

  // Render a snake
  const renderSnake = (snake: any) => {
    // Only show snakes the player has encountered
    if (playerPosition < snake.from) return null;
    
    const fromX = snake.from * 100 + 50;
    const toX = snake.to * 100 + 50;
    const fromY = 80;
    const toY = 80;
    
    return (
      <div key={`snake-${snake.from}-${snake.to}`} className="absolute z-10 hidden md:block">
        {/* Snake path line */}
        <div className="snake-path"
             style={{
               position: 'absolute',
               top: `${fromY}px`,
               left: `${Math.min(fromX, toX)}px`,
               width: `${Math.abs(toX - fromX)}px`,
               height: '4px',
               borderTop: '4px dashed #ef4444',
               transform: 'translateY(-2px)',
               zIndex: 5
             }}>
        </div>
        
        {/* Snake emoji at start */}
        <div 
          style={{
            position: 'absolute',
            top: `${fromY - 20}px`,
            left: `${fromX}px`,
            zIndex: 10
          }}
        >
          🐍
        </div>
        
        {/* Label */}
        <div className="absolute bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold"
             style={{
               top: `${fromY - 30}px`,
               left: `${fromX + 25}px`,
               zIndex: 10,
               whiteSpace: 'nowrap',
               boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
             }}>
          {snake.label}
        </div>
        
        {/* Arrow showing direction */}
        <div style={{
          position: 'absolute',
          top: `${fromY - 13}px`,
          left: `${toX - 20}px`,
          zIndex: 10,
          transform: 'rotate(90deg)'
        }}>
          ⬇️
        </div>
      </div>
    );
  };

  return (
    <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-y border-blue-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 inline-block">
            Your Team Skills Adventure
          </h2>
          <p className="text-gray-600 mt-2">Navigate the path to becoming a valuable team member!</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Board title with emoji */}
          <div className="flex justify-center items-center mb-6">
            <div className="px-4 py-2 rounded-full bg-white shadow-md flex items-center">
              <span className="mr-2 text-lg">🎲</span>
              <span className="font-medium">Learning Game Board</span>
              <span className="ml-2 text-lg">🎮</span>
            </div>
          </div>
          
          {/* Game board */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-6 p-4 bg-white rounded-xl shadow-md">
            {boardSpaces.map(space => renderSpace(space))}
          </div>

          {/* Game instructions for desktop */}
          <div className="hidden md:flex justify-center items-center space-x-6 mb-2 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="text-lg mr-1">🪜</span>
              <span>Ladders = Fast progress</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg mr-1">🐍</span>
              <span>Snakes = Challenges</span>
            </div>
          </div>

          {/* Only show on desktop */}
          <div className="relative w-full h-40 hidden md:block">
            {ladders.map(ladder => renderLadder(ladder))}
            {snakes.map(snake => renderSnake(snake))}
          </div>

          {/* Mobile legend */}
          <div className="md:hidden mt-4 flex flex-wrap justify-center gap-4 text-sm bg-white p-3 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
              <span>Start</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
              <span>Modules</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-purple-400 mr-2"></div>
              <span>Quiz</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-orange-400 mr-2"></div>
              <span>Reflection</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-indigo-400 mr-2"></div>
              <span>Finish</span>
            </div>
          </div>

          {/* Game instructions for mobile */}
          <div className="md:hidden flex flex-col mt-4 text-sm text-gray-600 bg-white p-3 rounded-lg shadow-sm">
            <div className="flex items-center justify-center mb-1">
              <span className="text-lg mr-1">🪜</span>
              <span>Ladders = Fast progress</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-lg mr-1">🐍</span>
              <span>Snakes = Challenges</span>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-8">
            <Button 
              onClick={() => scrollToSection(playerPosition < 1 ? "modules" : 
                                            playerPosition < 4 ? "quiz" :
                                            playerPosition < 5 ? "reflection" : "modules")}
              variant="default"
              className="bg-primary hover:bg-primary/90 text-white shadow-lg px-6 py-2 rounded-full"
            >
              {playerPosition < 1 ? "Start Your Journey 🚀" : 
               playerPosition < totalItems ? "Continue Your Journey ➡️" : 
               "Revisit Your Journey 🔄"}
            </Button>
            
            {/* Progress stat */}
            <div className="mt-4 text-sm text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm inline-block">
              <span className="font-medium">{playerPosition}</span> of <span className="font-medium">{totalItems}</span> milestones completed
              {playerPosition === totalItems && " 🎉"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressTracker;
