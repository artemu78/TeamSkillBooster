import React from "react";
import { Button } from "@/components/ui/button";
import { useCourse } from "@/context/CourseContext";

const Hero: React.FC = () => {
  const { calculateProgress, scrollToSection, progress } = useCourse();
  const progressPercentage = calculateProgress();
  const anyProgress = progressPercentage > 0;

  return (
    <section className="bg-gradient-to-br from-primary to-indigo-700 text-white py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Become an Irreplaceable Team Member
          </h1>
          <div className="mt-4 mx-auto max-w-3xl">
            <p className="text-sm md:text-base bg-black/20 py-2 px-4 rounded-md italic">
              This landing page is a text-based adaptation of "Teamwork
              Essentials: Stand Out as a Valuable Team Member" by Shade Zahrai
              located at{" "}
              <a
                href="https://www.linkedin.com/learning/teamwork-essentials-stand-out-as-a-valuable-team-member"
                className="underline hover:text-primary-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Learning
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          <div className="md:w-1/3 mb-8 md:mb-0 px-4">
            <img
              src="/images/hero.png"
              alt="Team excellence illustration"
              className="rounded-lg w-full aspect-square object-cover shadow-lg"
            />
          </div>

          <div className="md:w-2/3 md:pl-8">
            <p className="text-lg md:text-xl mb-6 opacity-90 text-left leading-relaxed">
              Being an indispensable part of a team involves more than just a
              frame of mind. It also requires a specific set of skills.
              <br />
              In this super practical course, I'll help you:
            </p>
            <ul className="list-disc text-left ml-6 space-y-3">
              <li className="text-lg md:text-xl">
                Adjust your communication approach to get the best out of
                teammates.
              </li>
              <li className="text-lg md:text-xl">
                Enhance relationships and collaboration to even turn conflict
                into opportunity.
              </li>
              <li className="text-lg md:text-xl">
                Learn strategic techniques to help your team solve complex
                problems, and know how to leverage your strength to make the
                greatest contribution to your team.
              </li>
            </ul>
            <p className="text-lg md:text-xl mt-6 text-left leading-relaxed">
              I've helped some of the world's top companies take their
              leadership and teams to the next level. Join me and get greater
              clarity, confidence, and the skills to position yourself as not
              just a valuable team player, but a role model for collaborative
              excellence.
            </p>
            <p className="text-lg md:text-xl my-6 opacity-80 text-right italic">
              Shade Zahrai, Director of Influenceo Global and Peak Performance
              Expert.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
