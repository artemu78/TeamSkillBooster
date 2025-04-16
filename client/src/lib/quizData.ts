import { QuizQuestion, StyleResult } from "./types";

export const quizQuestions: QuizQuestion[] = [
  {
    question:
      'Which of the following is a key aspect of showing \\"LOVE\\" to your teammates?',
    answers: [
      {
        text: "Leading with authority",
        correct: false,
      },
      {
        text: "Offering unsolicited advice",
        correct: false,
      },
      {
        text: "Leaning in and listening intently",
        correct: true,
      },
      {
        text: "Overlooking mistakes",
        correct: false,
      },
      {
        text: "Loudly expressing your opinions",
        correct: false,
      },
    ],
  },
  {
    question:
      'What is the benefit of using \\"I-statements\\" when communicating assertively?',
    answers: [
      {
        text: "They place blame on the other person.",
        correct: false,
      },
      {
        text: "They escalate the conflict.",
        correct: false,
      },
      {
        text: "They focus on your own feelings and perspective.",
        correct: true,
      },
      {
        text: "They avoid direct communication.",
        correct: false,
      },
      {
        text: "They assert dominance in the conversation",
        correct: false,
      },
    ],
  },
  {
    question: "According to Marcus Buckingham, what is a true strength?",
    answers: [
      {
        text: "Something you are simply good at.",
        correct: false,
      },
      {
        text: "An activity that energizes you.",
        correct: true,
      },
      {
        text: "A skill you have developed over time.",
        correct: false,
      },
      {
        text: "A task that others praise you for.",
        correct: false,
      },
      {
        text: "Your greatest skill",
        correct: false,
      },
    ],
  },
  {
    question:
      "What does the text suggest as a way to reframe a problem to find a solution?",
    answers: [
      {
        text: "Ignoring the problem.",
        correct: false,
      },
      {
        text: "Focusing on blame.",
        correct: false,
      },
      {
        text: "Seeing the problem as an opportunity.",
        correct: true,
      },
      {
        text: "Avoiding discussion.",
        correct: false,
      },
      {
        text: "Delegating the problem",
        correct: false,
      },
    ],
  },
];

export const quizStyles: Record<string, StyleResult> = {
  "goal-driven": {
    name: "Goal-Driven Leader",
    strengths: [
      "You excel at tracking progress and holding the team accountable",
      "You bring clarity and focus to team objectives",
      "You drive results and keep projects moving forward",
    ],
    opportunities: [
      "Take time to consider how decisions impact team members emotionally",
      "Be open to creative approaches even if they seem inefficient at first",
      "Balance your focus on results with attention to team process",
    ],
  },
  "task-driven": {
    name: "Structured Organizer",
    strengths: [
      "You excel at creating efficient processes and systems",
      "You ensure work gets done thoroughly and properly",
      "You bring practical solutions to complex problems",
    ],
    opportunities: [
      "Consider the bigger picture beyond immediate tasks",
      "Make space for creative thinking and innovation",
      "Pay attention to relationship dynamics alongside processes",
    ],
  },
  "vision-driven": {
    name: "Innovative Thinker",
    strengths: [
      "You excel at seeing possibilities others might miss",
      "You challenge conventional thinking with fresh perspectives",
      "You bring creativity and inspiration to the team",
    ],
    opportunities: [
      "Focus on turning ideas into practical action steps",
      "Be mindful of team constraints and resources",
      "Balance blue-sky thinking with attention to detail",
    ],
  },
  "people-driven": {
    name: "Collaborative Harmonizer",
    strengths: [
      "You excel at building relationships and team cohesion",
      "You create psychological safety for open communication",
      "You ensure everyone feels valued and included",
    ],
    opportunities: [
      "Balance relationship focus with task completion",
      "Practice having difficult conversations when necessary",
      "Set clear boundaries and expectations alongside support",
    ],
  },
};
