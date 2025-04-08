import React, { useEffect, useState } from "react";
import { useCourse } from "@/context/CourseContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Plus } from "lucide-react";
import { quizQuestions } from "@/lib/quizData";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const PersonalityQuiz: React.FC = () => {
  const { quizAnswers, setQuizAnswer, submitQuiz, styleResults, completeQuiz, scrollToSection } = useCourse();
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  useEffect(() => {
    // If we already have results, show the results view
    if (styleResults) {
      setIsQuizComplete(true);
    }
  }, [styleResults]);

  const allQuestionsAnswered = quizQuestions.every(
    (question) => quizAnswers[question.id]
  );

  const handleSubmitQuiz = () => {
    submitQuiz();
    setIsQuizComplete(true);
  };

  const handleCompleteQuiz = () => {
    completeQuiz();
    scrollToSection("reflection");
  };

  return (
    <section id="quiz" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Discover Your Team Style
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Take this quick 4-question quiz to uncover your natural collaboration style and receive personalized insights.
          </p>

          {!isQuizComplete ? (
            <div className="space-y-10">
              {quizQuestions.map((question, qIndex) => (
                <div key={question.id} className="quiz-question">
                  <div className="flex items-center mb-5">
                    <div className="bg-gradient-to-r from-primary-500 to-indigo-500 text-white h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3 shadow-md">
                      <span className="font-bold">{qIndex + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600">
                      {question.text}
                    </h3>
                  </div>
                  <RadioGroup
                    value={quizAnswers[question.id] || ""}
                    onValueChange={(value) => setQuizAnswer(question.id, value)}
                    className="space-y-3"
                  >
                    {question.options.map((option) => {
                      const optionId = `q${question.id}-${option.value}`;
                      const isSelected = quizAnswers[question.id] === option.value;
                      
                      return (
                        <div
                          key={option.value}
                          className={`p-4 border ${
                            isSelected
                              ? "border-2 border-primary bg-primary/5"
                              : "border-gray-200 hover:bg-gray-50 hover:shadow-md"
                          } rounded-lg cursor-pointer transition-all duration-200 relative group ${
                            isSelected ? "animate-[quizPop_0.3s_ease_forwards]" : ""
                          }`}
                          onClick={() => setQuizAnswer(question.id, option.value)}
                          style={{ transformOrigin: 'center' }}
                        >
                          {/* Hide the actual radio button but keep it for accessibility */}
                          <div className="absolute opacity-0">
                            <RadioGroupItem
                              value={option.value}
                              id={optionId}
                            />
                          </div>
                          
                          {/* Custom radio button indicator */}
                          <div className="flex items-start">
                            <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-1 mr-3 
                              ${isSelected 
                                ? 'border-primary bg-primary/10' 
                                : 'border-gray-300 group-hover:border-gray-400 bg-white'}`}>
                              {isSelected && (
                                <div className="w-3 h-3 rounded-full bg-primary m-auto animate-[radioCheck_0.25s_cubic-bezier(0.175,0.885,0.32,1.275)_forwards]"></div>
                              )}
                            </div>
                            
                            <div className="flex-1">
                              <Label
                                htmlFor={optionId}
                                className="font-medium block mb-1 cursor-pointer"
                              >
                                {option.label}
                              </Label>
                              <span className="text-sm text-gray-600 block">
                                {option.description}
                              </span>
                            </div>
                          </div>
                          
                          {/* Focus/Active state indicator for keyboard users */}
                          <div className={`absolute inset-0 rounded-lg pointer-events-none
                            ${isSelected ? 'ring-0' : 'ring-0 group-hover:ring-2 group-hover:ring-primary/20'}`}></div>
                        </div>
                      );
                    })}
                  </RadioGroup>
                </div>
              ))}

              <div className="mt-12 text-center">
                <div className="relative inline-block">
                  {/* Game-style button */}
                  <Button
                    onClick={handleSubmitQuiz}
                    disabled={!allQuestionsAnswered}
                    className={`bg-gradient-to-r from-primary to-indigo-600 text-white font-medium py-4 px-10 rounded-lg 
                      shadow-lg hover:shadow-xl transition-all duration-300 
                      ${!allQuestionsAnswered 
                        ? "opacity-50 cursor-not-allowed" 
                        : "hover:translate-y-[-2px] active:translate-y-[1px]"}`}
                  >
                    <span className="flex items-center">
                      <span className="mr-2">🏆</span>
                      Get Your Results!
                    </span>
                  </Button>
                  
                  {/* Progress indicator */}
                  <div className="absolute -bottom-6 left-0 right-0 text-center">
                    <span className="text-xs text-gray-500">
                      {Object.keys(quizAnswers).length} of {quizQuestions.length} questions answered
                    </span>
                    <div className="h-1 bg-gray-200 rounded-full mt-1 mx-auto max-w-[180px]">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-primary/70 to-indigo-400/70"
                        style={{ width: `${(Object.keys(quizAnswers).length / quizQuestions.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-block p-3 bg-primary/20 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    Your Team Style: <span>{styleResults?.name}</span>
                  </h3>
                  <p className="text-gray-600">
                    Based on your responses, this is your primary collaboration style
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                  <h4 className="font-semibold text-lg mb-3">Your Strengths</h4>
                  <ul className="space-y-2 text-gray-700">
                    {styleResults?.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-lg mb-3">
                    Development Opportunities
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    {styleResults?.opportunities.map((opportunity, index) => (
                      <li key={index} className="flex items-start">
                        <Plus className="h-5 w-5 text-accent mr-2 mt-0.5" />
                        <span>{opportunity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center mt-8">
                  <Button
                    onClick={handleCompleteQuiz}
                    className="bg-primary text-white font-medium py-3 px-6 rounded-lg hover:bg-primary/90 transition"
                  >
                    Mark Complete & Continue
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default PersonalityQuiz;
