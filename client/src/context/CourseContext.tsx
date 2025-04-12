import React, { createContext, useContext, useState, useEffect } from "react";
import { Module, QuizAnswer, StyleResult } from "@/lib/types";
import { quizStyles } from "@/lib/quizData";
import { modules } from "@/lib/moduleData";

type Reflection = {
  commitment: string;
  obstacles: string;
  successMeasure: string;
};

interface CourseContextType {
  modules: Module[];
  progress: {
    modules: Record<number, boolean>;
    quiz: boolean;
    reflection: boolean;
  };
  quizAnswers: QuizAnswer;
  styleResults: StyleResult | null;
  reflection: Reflection;
  completeModule: (id: number) => void;
  setQuizAnswer: (questionId: number, value: string) => void;
  submitQuiz: () => void;
  updateReflection: (field: keyof Reflection, value: string) => void;
  completeQuiz: () => void;
  completeReflection: () => void;
  calculateProgress: () => number;
  scrollToSection: (sectionId: string) => void;
}

const defaultReflection: Reflection = {
  commitment: "",
  obstacles: "",
  successMeasure: "",
};

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Initialize state from localStorage if available
  const [progress, setProgress] = useState<CourseContextType["progress"]>(
    () => {
      const saved = localStorage.getItem("courseProgress");
      return saved
        ? JSON.parse(saved)
        : {
            modules: {
              1: false,
              2: false,
              3: false,
              4: false,
              5: false,
              6: false,
              1.1: false,
              2.1: false,
              2.2: false,
              3.1: false,
              3.2: false,
              3.3: false,
              4.1: false,
              4.2: false,
              5.1: false,
              6.1: false,
              6.2: false,
            },
            quiz: false,
            reflection: false,
          };
    }
  );

  const [quizAnswers, setQuizAnswers] = useState<QuizAnswer>(() => {
    const saved = localStorage.getItem("quizAnswers");
    return saved ? JSON.parse(saved) : {};
  });

  const [styleResults, setStyleResults] = useState<StyleResult | null>(() => {
    const saved = localStorage.getItem("styleResults");
    return saved ? JSON.parse(saved) : null;
  });

  const [reflection, setReflection] = useState<Reflection>(() => {
    const saved = localStorage.getItem("reflection");
    return saved ? JSON.parse(saved) : defaultReflection;
  });

  // Save state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("courseProgress", JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    localStorage.setItem("quizAnswers", JSON.stringify(quizAnswers));
  }, [quizAnswers]);

  useEffect(() => {
    localStorage.setItem("styleResults", JSON.stringify(styleResults));
  }, [styleResults]);

  useEffect(() => {
    localStorage.setItem("reflection", JSON.stringify(reflection));
  }, [reflection]);

  const completeModule = (id: number) => {
    setProgress((prev) => ({
      ...prev,
      modules: {
        ...prev.modules,
        [id]: true,
      },
    }));
  };

  const setQuizAnswer = (questionId: number, value: string) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const calculateQuizResults = (): StyleResult => {
    const styles: Record<string, number> = {
      "goal-driven": 0,
      "task-driven": 0,
      "vision-driven": 0,
      "people-driven": 0,
    };

    // Count answers for each style
    Object.values(quizAnswers).forEach((answer) => {
      if (answer in styles) {
        styles[answer]++;
      }
    });

    // Find the dominant style
    let dominantStyle = Object.keys(styles).reduce((a, b) =>
      styles[a] > styles[b] ? a : b
    );

    return quizStyles[dominantStyle as keyof typeof quizStyles];
  };

  const submitQuiz = () => {
    const results = calculateQuizResults();
    setStyleResults(results);
  };

  const updateReflection = (field: keyof Reflection, value: string) => {
    setReflection((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const completeQuiz = () => {
    setProgress((prev) => ({
      ...prev,
      quiz: true,
    }));
  };

  const completeReflection = () => {
    setProgress((prev) => ({
      ...prev,
      reflection: true,
    }));
  };

  const calculateProgress = (): number => {
    const completedModules = Object.values(progress.modules).filter(
      Boolean
    ).length;
    const completedItems =
      completedModules +
      (progress.quiz ? 1 : 0) +
      (progress.reflection ? 1 : 0);
    const totalItems = Object.keys(progress.modules).length + 2; // +2 for quiz and reflection
    return Math.round((completedItems / totalItems) * 100);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const header = document.querySelector("header"); // Select the sticky header

    if (element) {
      const headerHeight = header ? header.offsetHeight : 0; // Get the header height
      const elementPosition = element.offsetTop - headerHeight; // Adjust for sticky header

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <CourseContext.Provider
      value={{
        modules,
        progress,
        quizAnswers,
        styleResults,
        reflection,
        completeModule,
        setQuizAnswer,
        submitQuiz,
        updateReflection,
        completeQuiz,
        completeReflection,
        calculateProgress,
        scrollToSection,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = (): CourseContextType => {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error("useCourse must be used within a CourseProvider");
  }
  return context;
};
