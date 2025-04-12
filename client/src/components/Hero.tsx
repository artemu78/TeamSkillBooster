import React from "react";
import { Button } from "@/components/ui/button";
import { useCourse } from "@/context/CourseContext";

const Hero: React.FC = () => {
  const { calculateProgress, scrollToSection, progress } = useCourse();
  const progressPercentage = calculateProgress();
  const anyProgress = progressPercentage > 0;

  return (
    <section className="bg-gradient-to-br from-primary to-indigo-700 text-white py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Become an Irreplaceable Team Member
          </h1>
          <p className="text-lg md:text-xl mb-1 opacity-90 text-left">
            Being an indispensable part of a team involves more than just a
            frame of mind. It also requires a specific set of skills.
            <br />
            In this super practical course, I'll help you
          </p>
          <ul className="list-disc text-left ml-5">
            <li>
              adjust your communication approach to get the best out of
              teammates
            </li>
            <li>
              enhance relationships and collaboration to even turn conflict into
              opportunity
            </li>
            <li>
              learn strategic techniques to help your team solve complex
              problems, and know how to leverage your strength to make the
              greatest contribution to your team.
            </li>
          </ul>
          <p className="text-lg md:text-xl mt-3 text-left">
            I've helped some of the world's top companies take their leadership
            and teams to the next level. Join me and get greater clarity,
            confidence, and the skills to position yourself as not just a
            valuable team player, but a role model for collaborative excellence.
          </p>
          <p className="text-lg md:text-xl my-4 opacity-70 text-right">
            Shade Zahrai, Director of Influenceo Global and Peak Performance
            Expert.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
