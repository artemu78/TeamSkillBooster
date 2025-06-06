import React, { useState } from "react";
import { useCourse } from "@/context/CourseContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  FileText,
  Video,
  Image,
  Headphones,
  FileIcon,
} from "lucide-react";

const ModulesSection: React.FC = () => {
  const { scrollToSection, modules, progress, completeModule } = useCourse();
  const [expandedModules, setExpandedModules] = useState<
    Record<number, boolean>
  >({});

  const handleCompleteModule = (id: number) => {
    completeModule(id);
  };

  const toggleModule = (id: number) => {
    setExpandedModules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Module background colors - 4 gradient variations for the 4 modules
  const moduleColors = [
    "from-blue-50 to-cyan-50",
    "from-cyan-50 to-teal-50",
    "from-violet-50 to-indigo-50",
    "from-amber-50 to-yellow-50",
  ];

  const [selectedSubmodule, setSelectedSubmodule] = useState<{
    moduleId: number;
    submoduleIndex: number;
  } | null>(null);

  const handleSubmoduleClick = (moduleId: number, submoduleIndex: number) => {
    setSelectedSubmodule({ moduleId, submoduleIndex });
  };

  const handleCompleteSubmodule = (
    moduleId: number,
    submoduleIndex: number
  ) => {
    const module = modules.find((mod) => mod.id === moduleId);
    if (module) {
      const submodule = module.submodules[submoduleIndex];
      if (submodule) {
        submodule.completed = true;
        // Check if all submodules are completed
        const allSubmodulesCompleted = module.submodules.every(
          (sub) => sub.completed
        );
        const subModuleId = Number(`${moduleId}.${submoduleIndex + 1}`);
        completeModule(subModuleId);
        if (allSubmodulesCompleted) {
          handleCompleteModule(moduleId);
        }
        setSelectedSubmodule(null);
        scrollToSection("module" + moduleId.toString());
      }
    }
  };

  return (
    <section id="modules" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Your Teamwork Skills Journey
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Master essential teamwork skills through 4 comprehensive learning
          modules. Each module covers a key area of teamwork excellence to level
          up your collaboration abilities!
        </p>

        {/* Modules as collapsible rows */}
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {modules.map((module, index) => {
            const isModuleCompleted = progress.modules[module.id];
            const isExpanded = expandedModules[module.id] || false;
            const icon = module.icon || "📋";
            const gradientColor =
              moduleColors[index] || "from-gray-50 to-gray-100";
            const isSubmoduleSelected =
              selectedSubmodule?.moduleId === module.id;
            const selectedSubmoduleContent = isSubmoduleSelected
              ? module.submodules[selectedSubmodule.submoduleIndex]?.content
              : null;
            const selectedSubmoduleTitle = isSubmoduleSelected
              ? module.submodules[selectedSubmodule.submoduleIndex]?.title
              : null;
            const isSelectedSubmoduleCompleted =
              isSubmoduleSelected &&
              progress.modules[
                Number(`${module.id}.${selectedSubmodule?.submoduleIndex + 1}`)
              ];
            return (
              <Card
                key={module.id}
                id={`module${module.id}`}
                className={`overflow-hidden border transition-all hover:shadow-md ${
                  isModuleCompleted ? "border-green-200" : "border-gray-200"
                } animate-[slideIn_0.5s_ease_forwards] opacity-0`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <CardContent
                  className={`p-0 transition-all duration-500 ${
                    isExpanded ? "max-h-none" : "max-h-[150px]"
                  }`}
                >
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
                            <div
                              className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center
                              ${
                                isModuleCompleted
                                  ? "bg-green-100 text-green-800"
                                  : "bg-white text-gray-800"
                              }
                              shadow-sm border ${
                                isModuleCompleted
                                  ? "border-green-200"
                                  : "border-gray-200"
                              }`}
                            >
                              <span className="text-lg md:text-xl">{icon}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex-1 pr-4">
                          <div className="flex items-center gap-2">
                            <h3 className="text-base md:text-lg font-semibold text-gray-800 line-clamp-1">
                              {module.title}
                            </h3>

                            {isModuleCompleted && (
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            )}
                          </div>
                          <p
                            className="text-gray-600 text-xs md:text-sm line-clamp-2"
                            dangerouslySetInnerHTML={{ __html: module.summary }}
                          />
                        </div>
                      </div>

                      {/* Expand/Collapse & Status */}
                      <div className="flex items-center gap-3">
                        <Badge
                          variant={isModuleCompleted ? "outline" : "secondary"}
                          className={`hidden md:flex ${
                            isModuleCompleted
                              ? "text-green-600 bg-green-50 border-green-200"
                              : "text-blue-600 bg-blue-50 border-blue-200"
                          }`}
                        >
                          {isModuleCompleted ? "Completed" : "In Progress"}
                        </Badge>

                        <Button
                          variant="ghost"
                          size="sm"
                          className="rounded-full h-8 w-8 p-0"
                          aria-label={
                            isExpanded ? "Collapse module" : "Expand module"
                          }
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
                    <div className="p-5 bg-white border-t border-gray-100 ">
                      {/* Submodule List */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 ">
                          Submodules
                        </h4>
                        <div className="flex border-b border-b-gray-300 box-border">
                          {module.submodules.map((submodule, index) => {
                            const isSubmoduleCompleted =
                              progress.modules[
                                Number(`${module.id}.${index + 1}`)
                              ];
                            return (
                              <div
                                key={index}
                                className={`-mb-px flex-col p-3 rounded-t-lg border border-gray-300 border-b-gray-200 flex gap-3 hover:bg-gray-100 transition-colors cursor-pointer ${
                                  selectedSubmodule?.moduleId === module.id &&
                                  selectedSubmodule?.submoduleIndex === index
                                    ? "bg-transparent border-indigo-200 border-b-white"
                                    : "border-b-2 border-b-gray-300 bg-gray-100"
                                } `}
                                onClick={() =>
                                  handleSubmoduleClick(module.id, index)
                                }
                                role="button"
                                aria-label={`Submodule ${index + 1} ${
                                  isSubmoduleCompleted
                                    ? "completed"
                                    : "not completed"
                                }`}
                              >
                                <div className="gap-3 flex flex-1">
                                  {isSubmoduleCompleted && (
                                    <CheckCircle className="h-6 w-6 text-green-500" />
                                  )}
                                  <p className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                    {submodule.title}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Submodule Content */}
                      {selectedSubmoduleContent && isSubmoduleSelected && (
                        <div className="mt-5">
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">
                            {selectedSubmoduleTitle}
                          </h4>
                          <div
                            className="leading-[1.5] text-gray-700"
                            dangerouslySetInnerHTML={{
                              __html: selectedSubmoduleContent
                                ? selectedSubmoduleContent
                                : "",
                            }}
                          />
                          {!isSelectedSubmoduleCompleted && (
                            <Button
                              variant="outline"
                              className="my-3 w-full"
                              onClick={() =>
                                handleCompleteSubmodule(
                                  module.id,
                                  selectedSubmodule.submoduleIndex
                                )
                              }
                            >
                              Complete
                            </Button>
                          )}
                        </div>
                      )}
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
