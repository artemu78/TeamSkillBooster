import React from "react";
import { Button } from "@/components/ui/button";
import { useCourse } from "@/context/CourseContext";
import { Progress } from "@/components/ui/progress";

const Hero: React.FC = () => {
  const { calculateProgress, scrollToSection, progress } = useCourse();
  const progressPercentage = calculateProgress();
  const anyProgress = progressPercentage > 0;

  return (
    <section className="bg-gradient-to-br from-primary to-indigo-700 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Become an Irreplaceable Team Member
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Learn to communicate better, build trust, and be a team player everyone wants.
          </p>
          
          {anyProgress ? (
            <div className="mb-6">
              <div className="flex justify-center items-center space-x-2 mb-3">
                <span className="text-sm font-medium">Your progress:</span>
                <div className="w-48 bg-white/30 rounded-full overflow-hidden">
                  <Progress value={progressPercentage} className="h-2" />
                </div>
                <span className="text-sm font-medium">{progressPercentage}%</span>
              </div>
              <Button
                onClick={() => scrollToSection("modules")}
                className="bg-white text-primary hover:bg-gray-100 font-medium transition"
              >
                Continue Learning
              </Button>
            </div>
          ) : (
            <Button
              onClick={() => scrollToSection("modules")}
              className="bg-white text-primary hover:bg-gray-100 font-medium transition"
            >
              Start Learning
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
