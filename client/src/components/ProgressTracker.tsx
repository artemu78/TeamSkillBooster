import React from "react";
import { useCourse } from "@/context/CourseContext";
import { Progress } from "@/components/ui/progress";

const ProgressTracker: React.FC = () => {
  const { calculateProgress, progress } = useCourse();
  const progressPercentage = calculateProgress();
  
  // Calculate completed items count
  const completedModules = Object.values(progress.modules).filter(Boolean).length;
  const completedItems = completedModules + (progress.quiz ? 1 : 0) + (progress.reflection ? 1 : 0);
  const totalItems = Object.keys(progress.modules).length + 2; // +2 for quiz and reflection

  return (
    <section className="bg-white border-b py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-600">Course Progress:</span>
            <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
              <Progress value={progressPercentage} className="h-full bg-secondary" />
            </div>
            <span className="text-sm font-medium text-gray-600">{progressPercentage}%</span>
          </div>
          <div className="hidden md:block text-sm text-gray-500">
            <span>{completedItems}</span> of <span>{totalItems}</span> steps completed
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressTracker;
