export interface Module {
  id: number;
  icon: string;
  title: string;
  summary: string;
  submodules: Array<{
    title: string;
    content: string;
    completed: boolean;
  }>;
  interactiveElement?: {
    title: string;
    description: string;
  };
}

export interface QuizQuestion {
  question: string;
  answers: {
    text: string;
    correct: boolean;
  }[];
}

export type QuizAnswer = Record<number, string>;

export interface StyleResult {
  name: string;
  strengths: string[];
  opportunities: string[];
}
