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
              {quizQuestions.map((question) => (
                <div key={question.id} className="quiz-question">
                  <h3 className="text-xl font-semibold mb-4">{question.text}</h3>
                  <RadioGroup
                    value={quizAnswers[question.id] || ""}
                    onValueChange={(value) => setQuizAnswer(question.id, value)}
                    className="space-y-3"
                  >
                    {question.options.map((option) => (
                      <div
                        key={option.value}
                        className={`flex items-start p-4 border ${
                          quizAnswers[question.id] === option.value
                            ? "border-2 border-primary bg-primary/5"
                            : "border-gray-200 hover:bg-gray-50"
                        } rounded-lg cursor-pointer transition`}
                      >
                        <RadioGroupItem
                          value={option.value}
                          id={`q${question.id}-${option.value}`}
                          className="mt-1 mr-3"
                        />
                        <div>
                          <Label
                            htmlFor={`q${question.id}-${option.value}`}
                            className="font-medium block mb-1"
                          >
                            {option.label}
                          </Label>
                          <span className="text-sm text-gray-600">
                            {option.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              ))}

              <div className="mt-8 text-center">
                <Button
                  onClick={handleSubmitQuiz}
                  disabled={!allQuestionsAnswered}
                  className="bg-primary text-white font-medium py-3 px-8 rounded-lg hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Get Your Results
                </Button>
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
