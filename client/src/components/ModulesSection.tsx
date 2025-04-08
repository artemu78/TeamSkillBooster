import React, { useState } from "react";
import { useCourse } from "@/context/CourseContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, CheckCircle, ChevronDown, ChevronUp, FileText, Video, Image, Headphones, FileIcon } from "lucide-react";

const ModulesSection: React.FC = () => {
  const { modules, progress, completeModule } = useCourse();
  const [expandedModules, setExpandedModules] = useState<Record<number, boolean>>({});

  const handleCompleteModule = (id: number) => {
    completeModule(id);
  };

  const toggleModule = (id: number) => {
    setExpandedModules(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Module background colors - 10 gradient variations for the 10 modules
  const moduleColors = [
    "from-blue-50 to-cyan-50",
    "from-cyan-50 to-teal-50",
    "from-teal-50 to-emerald-50",
    "from-emerald-50 to-green-50",
    "from-indigo-50 to-blue-50",
    "from-violet-50 to-indigo-50",
    "from-purple-50 to-violet-50",
    "from-fuchsia-50 to-purple-50",
    "from-rose-50 to-pink-50",
    "from-amber-50 to-yellow-50"
  ];

  // Module icons - 10 emoji variations
  const moduleIcons = ["🔍", "👥", "🤝", "🔒", "🛡️", "🧩", "💬", "💪", "🧠", "⚡"];

  // Get media icon based on media type
  const getMediaIcon = (type: string) => {
    switch (type) {
      case 'image': return <Image className="h-4 w-4" />;
      case 'video': return <Video className="h-4 w-4" />;
      case 'audio': return <Headphones className="h-4 w-4" />;
      case 'pdf': return <FileText className="h-4 w-4" />;
      default: return <FileIcon className="h-4 w-4" />;
    }
  };

  // No longer chunking modules for progress display since it was removed

  return (
    <section id="modules" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Your Teamwork Skills Journey
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Master essential teamwork skills through 10 interactive learning modules. Complete each module to level up your collaboration abilities!
        </p>

        {/* Modules as collapsible rows */}
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {modules.map((module, index) => {
            const isCompleted = progress.modules[module.id];
            const isExpanded = expandedModules[module.id] || false;
            const icon = moduleIcons[index] || "📋";
            const gradientColor = moduleColors[index] || "from-gray-50 to-gray-100";
            
            return (
              <Card
                key={module.id}
                className={`overflow-hidden border transition-all hover:shadow-md ${
                  isCompleted ? "border-green-200" : "border-gray-200"
                } animate-[slideIn_0.5s_ease_forwards] opacity-0`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <CardContent className={`p-0 transition-all duration-500 ${isExpanded ? "max-h-[2000px]" : "max-h-[150px]"}`}>
                  {/* Module Header - Always visible */}
                  <div 
                    className={`bg-gradient-to-r ${gradientColor} p-4 md:p-5 cursor-pointer`}
                    onClick={() => toggleModule(module.id)}
                  >
                    <div className="flex items-center justify-between">
                      {/* Module Number Badge & Title Area */}
                      <div className="flex items-center flex-1">
                        <div className="flex items-center justify-center mr-3 md:mr-4">
                          <div className="relative">
                            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center
                              ${isCompleted ? "bg-green-100 text-green-800" : "bg-white text-gray-800"}
                              shadow-sm border ${isCompleted ? "border-green-200" : "border-gray-200"}`}>
                              <span className="text-lg md:text-xl">{icon}</span>
                            </div>
                            <div className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                              {module.id}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex-1 pr-4">
                          <div className="flex items-center gap-2">
                            <h3 className="text-base md:text-lg font-semibold text-gray-800 line-clamp-1">
                              {module.title}
                            </h3>
                            
                            {isCompleted && (
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            )}
                          </div>
                          <p className="text-gray-600 text-xs md:text-sm line-clamp-2">{module.summary}</p>
                        </div>
                      </div>
                      
                      {/* Expand/Collapse & Status */}
                      <div className="flex items-center gap-3">
                        <Badge
                          variant={isCompleted ? "outline" : "secondary"}
                          className={`hidden md:flex ${
                            isCompleted
                              ? "text-green-600 bg-green-50 border-green-200"
                              : "text-blue-600 bg-blue-50 border-blue-200"
                          }`}
                        >
                          {isCompleted ? "Completed" : "In Progress"}
                        </Badge>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          className="rounded-full h-8 w-8 p-0"
                          aria-label={isExpanded ? "Collapse module" : "Expand module"}
                        >
                          {isExpanded ? (
                            <ChevronUp className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Module Content - Visible when expanded */}
                  {isExpanded && (
                    <div className="p-5 bg-white border-t border-gray-100">
                      <div className="grid md:grid-cols-[2fr_1fr] gap-6">
                        {/* Left column: Module Text Content */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Module Content</h4>
                          <div className="space-y-3">
                            {module.content.text.map((paragraph, idx) => (
                              <p key={`text-${idx}`} className="text-gray-700 text-sm">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                          
                          {/* Interactive Element */}
                          <div className="mt-6">
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 shadow-sm hover:animate-[subtlePulse_2s_ease_infinite] transition-all">
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
                        
                        {/* Right column: Media Files */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Module Resources</h4>
                          <div className="space-y-2">
                            {module.content.media.map((media, midx) => (
                              <div 
                                key={`media-${midx}`} 
                                className="p-3 bg-gray-50 rounded-lg border border-gray-100 flex items-center gap-3 hover:bg-gray-100 transition-colors cursor-pointer"
                              >
                                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center">
                                  {getMediaIcon(media.type)}
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm font-medium text-gray-700">
                                    {media.title || media.alt || `${media.type.charAt(0).toUpperCase() + media.type.slice(1)} ${midx + 1}`}
                                  </p>
                                  <p className="text-xs text-gray-500">{media.type.toUpperCase()}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Module Completion Button */}
                      <div className="mt-6 flex justify-end">
                        <Button
                          variant={isCompleted ? "outline" : "default"}
                          className={`${
                            isCompleted 
                              ? "border-green-200 text-green-700 hover:bg-green-50" 
                              : "bg-primary text-white hover:bg-primary/90"
                          }`}
                          onClick={() => handleCompleteModule(module.id)}
                          disabled={isCompleted}
                        >
                          {isCompleted ? "Module Completed" : "Mark Module Complete"}
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
