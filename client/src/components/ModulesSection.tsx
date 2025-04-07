import React from "react";
import { useCourse } from "@/context/CourseContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ModulesSection: React.FC = () => {
  const { modules, progress, completeModule } = useCourse();

  const handleCompleteModule = (id: number) => {
    completeModule(id);
  };

  return (
    <section id="modules" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Interactive Learning Modules
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {modules.map((module) => {
            const isCompleted = progress.modules[module.id];
            return (
              <Card
                key={module.id}
                className="bg-white overflow-hidden border border-gray-100 transition-transform hover:shadow-lg flex flex-col h-full"
              >
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {module.title}
                    </h3>
                    <Badge
                      variant={isCompleted ? "outline" : "secondary"}
                      className={`${
                        isCompleted
                          ? "text-secondary bg-secondary/10"
                          : "text-gray-500 bg-gray-100"
                      }`}
                    >
                      {isCompleted ? "Completed" : "Incomplete"}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-6">{module.summary}</p>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4 mt-auto">
                    <h4 className="font-medium text-gray-700 mb-2">
                      {module.interactiveElement.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {module.interactiveElement.description}
                    </p>
                    <div className="mt-3 flex justify-center">
                      <button className="text-sm px-3 py-1.5 bg-primary/10 text-primary rounded hover:bg-primary/20">
                        Start Activity
                      </button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button
                      variant="outline"
                      className={`w-full border-primary text-primary hover:bg-primary/5 ${
                        isCompleted ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      onClick={() => handleCompleteModule(module.id)}
                      disabled={isCompleted}
                    >
                      {isCompleted ? "Completed" : "Mark as Complete"}
                    </Button>
                  </div>
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
