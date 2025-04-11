import { Module } from "./types";

export const modules: Module[] = [
  {
    id: 1,
    title: "Understanding You and Understanding Others",
    summary: "Discover your unique working style and learn to recognize and adapt to the styles of your teammates.",
    content: {
      text: [
        "This comprehensive module helps you develop self-awareness and empathy, two foundational skills for effective teamwork. You'll begin by exploring your own working preferences, communication tendencies, and natural strengths.",
        "You'll learn frameworks for understanding your engagement style and how it impacts those around you. Through targeted exercises, you'll identify your unique value proposition as a team member.",
        "The second part of this module focuses on developing a keen awareness of others. You'll learn to recognize different working styles, adapt your approach for different personalities, and engage more effectively with diverse team members.",
        "By the end of this module, you'll have a clearer picture of both yourself and your teammates, creating a foundation for more productive and harmonious collaboration."
      ],
      media: [
        { type: "image", src: "module1_image1.jpg", alt: "Self-awareness framework" },
        { type: "image", src: "module1_image2.jpg", alt: "Engagement styles diagram" },
        { type: "video", src: "module1_video1.mp4", title: "Understanding Your Working Style" },
        { type: "image", src: "module2_image1.jpg", alt: "Team interaction patterns" },
        { type: "video", src: "module2_video1.mp4", title: "Recognizing Team Dynamics" }
      ]
    },
    interactiveElement: {
      title: "Personal & Team Styles Assessment",
      description: "Complete this interactive assessment to identify your primary engagement style and practice recognizing others'.",
    },
  },
  {
    id: 2,
    title: "Cultivate Trusted Relationships",
    summary: "Master techniques for building rapport, setting expectations, and creating psychological safety in your team.",
    content: {
      text: [
        "This module focuses on the cornerstone of effective teamwork: trust. You'll learn how to engage authentically with teammates through active listening, meaningful contributions, and genuine rapport-building.",
        "You'll explore strategies for setting clear expectations and consistently delivering on commitments, creating a foundation of reliability. The module covers techniques for managing accountability and repairing trust when it's been damaged.",
        "A significant portion of this module is dedicated to psychological safety - creating an environment where team members feel comfortable taking risks, sharing ideas, and being their authentic selves. You'll learn practical approaches to fostering this essential team dynamic.",
        "By the end of this module, you'll have a comprehensive toolkit for building and maintaining the trusted relationships that form the basis of high-performing teams."
      ],
      media: [
        { type: "image", src: "module3_image1.jpg", alt: "Active listening techniques" },
        { type: "image", src: "module3_image2.jpg", alt: "Team engagement model" },
        { type: "video", src: "module3_video1.mp4", title: "Building Team Rapport" },
        { type: "image", src: "module4_image1.jpg", alt: "Trust building framework" },
        { type: "video", src: "module4_video1.mp4", title: "The Foundation of Team Trust" }
      ]
    },
    interactiveElement: {
      title: "Trust & Safety Simulator",
      description: "Work through interactive scenarios to practice building trust and psychological safety in teams.",
    },
  },
  {
    id: 3,
    title: "Become a Team Culture Creator",
    summary: "Learn to navigate conflict, offer constructive feedback, and foster a collaborative team environment.",
    content: {
      text: [
        "This module equips you with the skills to actively shape your team's culture. You'll start by exploring proven collaboration models that strengthen team bonds and improve outcomes across various situations.",
        "You'll develop confidence in navigating conflicts constructively, turning potential friction points into opportunities for growth and innovation. The module offers frameworks for delivering feedback that drives positive change without damaging relationships.",
        "Throughout this module, you'll explore the delicate balance between honesty and empathy in team interactions. You'll practice techniques for difficult conversations and learn methods for depersonalizing conflicts to focus on solutions.",
        "By completing this module, you'll be prepared to make meaningful contributions to your team's culture, helping to create an environment where collaboration flourishes and conflicts become opportunities."
      ],
      media: [
        { type: "image", src: "module5_image1.jpg", alt: "Psychological safety indicators" },
        { type: "video", src: "module5_video1.mp4", title: "Building a Safe Team Environment" },
        { type: "image", src: "module6_image1.jpg", alt: "Collaboration model" },
        { type: "video", src: "module6_video1.mp4", title: "Collaborative Problem Solving" },
        { type: "image", src: "module7_image1.jpg", alt: "Conflict resolution process" }
      ]
    },
    interactiveElement: {
      title: "Collaborative Culture Builder",
      description: "Practice resolving conflicts and giving feedback in this multi-scenario interactive exercise.",
    },
  },
  {
    id: 4,
    title: "Expand Your Strategic Mindset",
    summary: "Develop strategic thinking abilities, leverage your strengths, and adopt a solution-focused approach to challenges.",
    content: {
      text: [
        "This capstone module brings together all your teamwork skills and elevates them with strategic thinking and solution-oriented approaches. You'll begin by learning to identify and leverage your unique strengths to maximize your contribution to the team.",
        "The module teaches frameworks for strategic thinking that enable you to see beyond immediate tasks to the bigger picture. You'll develop skills to contribute meaningfully to team planning and decision-making processes at all levels.",
        "A significant focus is placed on solution-orientation - approaching challenges with a constructive mindset that drives innovation and success. You'll practice techniques for reframing problems, generating multiple solution paths, and implementing the most effective approach.",
        "By completing this module, you'll have the advanced strategic skills to elevate your team's performance and tackle complex challenges with confidence and creativity."
      ],
      media: [
        { type: "image", src: "module8_image1.jpg", alt: "Strengths assessment model" },
        { type: "video", src: "module8_video1.mp4", title: "Leveraging Your Strengths" },
        { type: "image", src: "module9_image1.jpg", alt: "Strategic thinking framework" },
        { type: "video", src: "module9_video1.mp4", title: "Developing Strategic Mindset" },
        { type: "image", src: "module10_image1.jpg", alt: "Solution-oriented framework" }
      ]
    },
    interactiveElement: {
      title: "Strategic Problem Solver",
      description: "Apply strategic thinking and solution-focused approaches to complex team challenges.",
    },
  },
];
