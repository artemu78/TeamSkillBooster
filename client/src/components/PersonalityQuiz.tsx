import React, { useEffect, useState } from "react";
import { useCourse } from "@/context/CourseContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Plus, CheckIcon, XIcon, RefreshCw } from "lucide-react";
import { quizQuestions } from "@/lib/quizData";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const PersonalityQuiz: React.FC = () => {
  const {
    quizAnswers,
    setQuizAnswer,
    submitQuiz,
    styleResults,
    completeQuiz,
    scrollToSection,
  } = useCourse();
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [quizResults, setQuizResults] = useState<Record<number, boolean>>({});
  const [showResults, setShowResults] = useState(false);
  const [allCorrect, setAllCorrect] = useState(false);

  useEffect(() => {
    // If we already have results, show the results view
    if (styleResults) {
      setIsQuizComplete(true);
    }
  }, [styleResults]);

  // Count only non-empty answers for progress indicator
  const answeredQuestionsCount = Object.values(quizAnswers).filter(
    (answer) => answer !== ""
  ).length;

  const allQuestionsAnswered = answeredQuestionsCount === quizQuestions.length;

  const handleSubmitQuiz = () => {
    // Check which answers are correct
    const results: Record<number, boolean> = {};
    let correct = 0;

    quizQuestions.forEach((question, index) => {
      const selectedAnswerIndex = parseInt(quizAnswers[index] || "-1");
      const isCorrect = question.answers[selectedAnswerIndex]?.correct === true;
      results[index] = isCorrect;
      if (isCorrect) correct++;
    });

    setQuizResults(results);
    setShowResults(true);

    // If all answers are correct, set the flag
    const allAnswersCorrect = correct === quizQuestions.length;
    setAllCorrect(allAnswersCorrect);

    // Call completeQuiz if all answers are correct
    if (allAnswersCorrect) {
      completeQuiz();
    }
  };

  const handleCompleteQuiz = () => {
    completeQuiz();
    scrollToSection("reflection");
  };

  // New function to reset all answers
  const resetQuiz = () => {
    // Reset each question's answer
    quizQuestions.forEach((_, index) => {
      setQuizAnswer(index, "");
    });

    // Reset the component state
    setShowResults(false);
    setQuizResults({});
    setAllCorrect(false);
  };

  return (
    <section id="quiz" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Discover Your Team Style
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Take this quick {quizQuestions.length}-question quiz to test your
            knowledge and receive personalized insights.
          </p>

          {!isQuizComplete ? (
            <div className="space-y-10">
              {quizQuestions.map((question, qIndex) => {
                const questionId = qIndex;
                const selectedAnswer = quizAnswers[questionId];
                const showResult =
                  showResults && quizResults[questionId] !== undefined;

                return (
                  <div key={questionId} className="quiz-question">
                    <div className="flex items-center mb-5">
                      <div className="bg-gradient-to-r from-primary-500 to-indigo-500 text-white h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3 shadow-md">
                        <span className="font-bold">{qIndex + 1}</span>
                      </div>
                      <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600">
                        {question.question}
                      </h3>
                    </div>
                    <RadioGroup
                      value={selectedAnswer}
                      onValueChange={(value) =>
                        !showResults && setQuizAnswer(questionId, value)
                      }
                      className="space-y-3"
                    >
                      {question.answers.map((answer, aIndex) => {
                        const optionId = `q${questionId}-${aIndex}`;
                        const isSelected = selectedAnswer === String(aIndex);
                        const isCorrect = answer.correct;

                        // Determine styling based on results
                        let optionStyle = "";
                        if (showResult) {
                          if (isSelected && isCorrect) {
                            optionStyle =
                              "border-2 border-green-500 bg-green-50";
                          } else if (isSelected && !isCorrect) {
                            optionStyle = "border-2 border-red-500 bg-red-50";
                          } else {
                            optionStyle = "border-gray-200 opacity-70";
                          }
                        } else {
                          optionStyle = isSelected
                            ? "border-2 border-primary bg-primary/5"
                            : "border-gray-200 hover:bg-gray-50 hover:shadow-md";
                        }

                        return (
                          <div
                            key={aIndex}
                            className={`p-4 border ${optionStyle} rounded-lg cursor-pointer transition-all duration-200 relative group ${
                              isSelected && !showResult
                                ? "animate-[quizPop_0.3s_ease_forwards]"
                                : ""
                            }`}
                            onClick={() =>
                              !showResults &&
                              setQuizAnswer(questionId, String(aIndex))
                            }
                            style={{ transformOrigin: "center" }}
                          >
                            {/* Hide the actual radio button but keep it for accessibility */}
                            <div className="absolute opacity-0">
                              <RadioGroupItem
                                value={String(aIndex)}
                                id={optionId}
                                disabled={showResults}
                              />
                            </div>

                            {/* Custom radio button indicator */}
                            <div className="flex items-start">
                              <div
                                className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-1 mr-3 
                              ${
                                isSelected
                                  ? "border-primary bg-primary/10"
                                  : "border-gray-300 group-hover:border-gray-400 bg-white"
                              }`}
                              >
                                {isSelected && !showResult && (
                                  <div className="w-3 h-3 rounded-full bg-primary m-auto animate-[radioCheck_0.25s_cubic-bezier(0.175,0.885,0.32,1.275)_forwards]"></div>
                                )}
                                {/* {showResult && isSelected && isCorrect && (
                                  <CheckIcon className="h-4 w-4 text-green-500" />
                                )} */}
                                {showResult && isSelected && !isCorrect && (
                                  <XIcon className="h-4 w-4 text-red-500" />
                                )}
                              </div>

                              <div className="flex-1">
                                <Label
                                  htmlFor={optionId}
                                  className="font-medium block mb-1 cursor-pointer"
                                >
                                  {answer.text}
                                </Label>
                              </div>
                            </div>

                            {/* Show correct/incorrect indicators when results are displayed */}
                            {showResult && (
                              <div className="absolute right-4 top-4">
                                {isCorrect ? (
                                  <span />
                                ) : isSelected ? (
                                  <XIcon className="h-6 w-6 text-red-500" />
                                ) : null}
                              </div>
                            )}

                            {/* Focus/Active state indicator for keyboard users */}
                            <div
                              className={`absolute inset-0 rounded-lg pointer-events-none
                            ${
                              isSelected && !showResult
                                ? "ring-0"
                                : "ring-0 group-hover:ring-2 group-hover:ring-primary/20"
                            }`}
                            ></div>
                          </div>
                        );
                      })}
                    </RadioGroup>
                  </div>
                );
              })}

              <div className="mt-12 text-center">
                {showResults && allCorrect ? (
                  <div className="mb-8">
                    <div className="bg-green-100 border-2 border-green-500 text-green-700 p-4 rounded-lg mb-4">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 mr-2" />
                        <span className="font-semibold">
                          Congratulations! All answers are correct!
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <Button
                        onClick={handleCompleteQuiz}
                        className="bg-gradient-to-r from-primary to-indigo-600 text-white font-medium py-4 px-10 rounded-lg 
                          shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px] active:translate-y-[1px]"
                      >
                        Continue to Reflection
                      </Button>
                      <Button
                        onClick={resetQuiz}
                        variant="outline"
                        className="border-gray-300 text-gray-600 font-medium py-4 px-6 rounded-lg hover:bg-gray-50
                          transition-all duration-300 flex items-center gap-2"
                      >
                        <RefreshCw className="h-4 w-4" />
                        Reset
                      </Button>
                    </div>
                  </div>
                ) : showResults ? (
                  <div className="mb-8">
                    <div className="bg-amber-100 border-2 border-amber-500 text-amber-700 p-4 rounded-lg mb-4">
                      <span className="font-semibold">
                        Review your answers above to see what you got right and
                        wrong.
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <Button
                        onClick={resetQuiz}
                        variant="outline"
                        className="border-gray-300 text-gray-600 font-medium py-4 px-6 rounded-lg hover:bg-gray-50
                          transition-all duration-300 flex items-center gap-2"
                      >
                        <RefreshCw className="h-4 w-4" />
                        Reset
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="relative inline-block">
                    <div className="flex items-center gap-4">
                      <Button
                        onClick={handleSubmitQuiz}
                        disabled={!allQuestionsAnswered}
                        className={`bg-gradient-to-r from-primary to-indigo-600 text-white font-medium py-4 px-10 rounded-lg 
                          shadow-lg hover:shadow-xl transition-all duration-300 
                          ${
                            !allQuestionsAnswered
                              ? "opacity-50 cursor-not-allowed pointer-events-none"
                              : "hover:translate-y-[-2px] active:translate-y-[1px]"
                          }`}
                      >
                        <span className="flex items-center">
                          <span className="mr-2">🏆</span>
                          Get Your Results
                        </span>
                      </Button>
                      {Object.keys(quizAnswers).length > 0 && (
                        <Button
                          onClick={resetQuiz}
                          variant="outline"
                          className="border-gray-300 text-gray-600 font-medium py-4 px-6 rounded-lg hover:bg-gray-50
                            transition-all duration-300 flex items-center gap-2"
                        >
                          <RefreshCw className="h-4 w-4" />
                          Reset
                        </Button>
                      )}
                    </div>

                    {/* Progress indicator */}
                    <div className="mt-2">
                      <span className="text-xs text-gray-500">
                        {answeredQuestionsCount} of {quizQuestions.length}{" "}
                        questions answered
                      </span>
                      <div className="h-1 bg-gray-200 rounded-full mt-1 mx-auto max-w-[180px]">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary/70 to-indigo-400/70"
                          style={{
                            width: `${
                              (answeredQuestionsCount / quizQuestions.length) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
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
                    Based on your responses, this is your primary collaboration
                    style
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
                  <div className="flex items-center justify-center gap-4">
                    <Button
                      onClick={handleCompleteQuiz}
                      className="bg-primary text-white font-medium py-3 px-6 rounded-lg hover:bg-primary/90 transition"
                    >
                      Mark Complete & Continue
                    </Button>
                    <Button
                      onClick={() => {
                        resetQuiz();
                        setIsQuizComplete(false);
                      }}
                      variant="outline"
                      className="border-gray-300 text-gray-600 font-medium py-3 px-4 rounded-lg hover:bg-gray-50
                        transition-all duration-300 flex items-center gap-2"
                    >
                      <RefreshCw className="h-4 w-4" />
                      Retake Quiz
                    </Button>
                  </div>
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
