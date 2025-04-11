export interface Module {
  id: number;
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
  id: number;
  text: string;
  options: {
    value: string;
    label: string;
    description: string;
  }[];
}

export type QuizAnswer = Record<number, string>;

export interface StyleResult {
  name: string;
  strengths: string[];
  opportunities: string[];
}
