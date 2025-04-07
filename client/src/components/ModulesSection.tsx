import React from "react";
import { useCourse } from "@/context/CourseContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, CheckCircle } from "lucide-react";

const ModulesSection: React.FC = () => {
  const { modules, progress, completeModule } = useCourse();

  const handleCompleteModule = (id: number) => {
    completeModule(id);
  };

  // Emoji for each module
  const moduleEmojis = ["📚", "📝", "🧩"];
  
  // Module background colors
  const moduleColors = [
    "from-blue-50 to-cyan-50",
    "from-emerald-50 to-teal-50",
    "from-purple-50 to-indigo-50"
  ];

  return (
    <section id="modules" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Your Learning Adventure
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Progress through each module to build your team skills toolbox. Complete all modules to unlock the next stages!
        </p>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {modules.map((module, index) => {
            const isCompleted = progress.modules[module.id];
            const emoji = moduleEmojis[index] || "📋";
            const gradientColor = moduleColors[index] || "from-gray-50 to-gray-100";
            
            return (
              <Card
                key={module.id}
                className={`overflow-hidden border transition-all hover:shadow-md ${
                  isCompleted ? "border-green-200" : "border-gray-200"
                } animate-[slideIn_0.5s_ease_forwards] opacity-0`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${gradientColor} p-5 md:p-6`}>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      {/* Module Icon & Title Area */}
                      <div className="flex items-center flex-1">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                          isCompleted ? "bg-green-100" : "bg-white"
                        } shadow-sm border ${isCompleted ? "border-green-200" : "border-gray-200"}`}>
                          <span className="text-2xl">{emoji}</span>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                              {module.title}
                            </h3>
                            
                            {isCompleted && (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            )}
                          </div>
                          <p className="text-gray-600 text-sm md:text-base">{module.summary}</p>
                        </div>
                      </div>
                      
                      {/* Status Badge - Mobile Only */}
                      <div className="flex md:hidden">
                        <Badge
                          variant={isCompleted ? "outline" : "secondary"}
                          className={`${
                            isCompleted
                              ? "text-green-600 bg-green-50 border-green-200"
                              : "text-blue-600 bg-blue-50 border-blue-200"
                          }`}
                        >
                          {isCompleted ? "Completed" : "In Progress"}
                        </Badge>
                      </div>
                      
                      {/* Module Actions */}
                      <div className="flex items-center space-x-3 mt-3 md:mt-0">
                        <div className="hidden md:block">
                          <Badge
                            variant={isCompleted ? "outline" : "secondary"}
                            className={`${
                              isCompleted
                                ? "text-green-600 bg-green-50 border-green-200"
                                : "text-blue-600 bg-blue-50 border-blue-200"
                            }`}
                          >
                            {isCompleted ? "Completed" : "In Progress"}
                          </Badge>
                        </div>
                        
                        <Button
                          variant={isCompleted ? "outline" : "default"}
                          size="sm"
                          className={`${
                            isCompleted 
                              ? "border-green-200 text-green-700 hover:bg-green-50" 
                              : "bg-primary text-white hover:bg-primary/90"
                          }`}
                          onClick={() => handleCompleteModule(module.id)}
                          disabled={isCompleted}
                        >
                          {isCompleted ? "Completed" : "Mark Complete"}
                        </Button>
                      </div>
                    </div>
                    
                    {/* Interactive Element */}
                    <div className="mt-6 pl-16">
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-100 shadow-sm hover:animate-[subtlePulse_2s_ease_infinite] transition-all">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-700 mb-1 flex items-center">
                              <span className="w-5 h-5 inline-flex items-center justify-center bg-primary/10 text-primary rounded-full mr-2 text-xs animate-[float_3s_ease-in-out_infinite]">
                                <ChevronRight className="h-3 w-3" />
                              </span>
                              {module.interactiveElement.title}
                            </h4>
                            <p className="text-sm text-gray-500 pl-7">
                              {module.interactiveElement.description}
                            </p>
                          </div>
                          
                          <button className="text-sm px-3 py-1.5 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-all hover:shadow-md transform hover:-translate-y-0.5 whitespace-nowrap ml-3">
                            Start Activity
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
          
          {/* Progress indicator */}
          <div className="flex justify-center mt-8 animate-[slideIn_0.8s_ease_forwards] opacity-0" style={{ animationDelay: '800ms' }}>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-5 py-3 rounded-xl shadow-sm border border-indigo-100 flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-lg">🎮</span>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700">
                  Quest Progress: {Object.values(progress.modules).filter(Boolean).length} of {modules.length} modules completed
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    style={{ 
                      width: `${(Object.values(progress.modules).filter(Boolean).length / modules.length) * 100}%`,
                      transition: 'width 1s ease'
                    }}
                  ></div>
                </div>
              </div>
              {Object.values(progress.modules).filter(Boolean).length === modules.length && (
                <div className="bg-green-100 px-2 py-1 rounded text-xs text-green-700 font-medium animate-pulse">
                  All Complete!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
