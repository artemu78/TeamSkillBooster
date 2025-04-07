import { QuizQuestion, StyleResult } from "./types";

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    text: "In team projects, I am most energized by:",
    options: [
      {
        value: "goal-driven",
        label: "Achieving targets and measuring success",
        description: "I love setting goals and tracking our progress",
      },
      {
        value: "task-driven",
        label: "Creating systems and solving problems",
        description: "I enjoy bringing order and finding efficient solutions",
      },
      {
        value: "vision-driven",
        label: "Exploring new ideas and innovations",
        description: "I thrive on creativity and considering possibilities",
      },
      {
        value: "people-driven",
        label: "Building relationships and team harmony",
        description: "I focus on how people work together and feel",
      },
    ],
  },
  {
    id: 2,
    text: "When conflict arises in a team, my natural approach is to:",
    options: [
      {
        value: "goal-driven",
        label: "Focus on what we need to achieve",
        description: "Let's remember our objectives and stay on track",
      },
      {
        value: "task-driven",
        label: "Analyze the facts objectively",
        description: "Let's break down the problem logically and find a solution",
      },
      {
        value: "vision-driven",
        label: "Look for creative compromises",
        description: "Let's explore alternatives that might satisfy everyone",
      },
      {
        value: "people-driven",
        label: "Ensure everyone feels heard",
        description: "Let's understand each person's perspective and feelings",
      },
    ],
  },
  {
    id: 3,
    text: "When contributing to team decisions, I typically:",
    options: [
      {
        value: "goal-driven",
        label: "Emphasize results and outcomes",
        description: "I focus on what will help us achieve our goals fastest",
      },
      {
        value: "task-driven",
        label: "Consider processes and practicality",
        description: "I think about how we'll implement decisions effectively",
      },
      {
        value: "vision-driven",
        label: "Bring up new perspectives",
        description: "I enjoy challenging assumptions and suggesting new approaches",
      },
      {
        value: "people-driven",
        label: "Consider how decisions affect people",
        description: "I'm concerned with how team members will respond",
      },
    ],
  },
  {
    id: 4,
    text: "My biggest strength as a team member is:",
    options: [
      {
        value: "goal-driven",
        label: "Keeping the team focused and accountable",
        description: "I help drive the team toward completion and success",
      },
      {
        value: "task-driven",
        label: "Creating structure and organization",
        description: "I help ensure work gets done thoroughly and properly",
      },
      {
        value: "vision-driven",
        label: "Generating ideas and possibilities",
        description: "I help the team think outside the box and innovate",
      },
      {
        value: "people-driven",
        label: "Supporting team cohesion and morale",
        description: "I help create a positive environment where everyone contributes",
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
