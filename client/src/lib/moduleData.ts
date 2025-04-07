import { Module } from "./types";

export const modules: Module[] = [
  {
    id: 1,
    title: "Know Your Team Style",
    summary: "Discover your natural collaboration style and how it impacts team dynamics. Learn to leverage your strengths and adapt to others.",
    interactiveElement: {
      title: "Interactive Element",
      description: "Take a mini-assessment to identify your primary team style.",
    },
  },
  {
    id: 2,
    title: "Listen, Connect, Collaborate",
    summary: "Master the art of active listening and learn techniques to connect with colleagues on a deeper level for more effective collaboration.",
    interactiveElement: {
      title: "Interactive Element",
      description: "Practice identifying communication barriers with this interactive exercise.",
    },
  },
  {
    id: 3,
    title: "Trust, Conflict & Feedback",
    summary: "Learn to build psychological safety in teams, navigate conflicts constructively, and give feedback that helps rather than hurts.",
    interactiveElement: {
      title: "Interactive Element",
      description: "Practice reframing feedback statements using the situation-behavior-impact model.",
    },
  },
];
