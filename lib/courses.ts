export type CourseLesson = {
  id: string;
  title: string;
  duration: string;
  preview?: boolean;
};

export type CourseSection = {
  title: string;
  lessons: CourseLesson[];
};

export type Course = {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  level: string;
  duration: string;
  price: number;
  artwork: string;
  instructor: string;
  sections: CourseSection[];
};

export const courses: Course[] = [
  {
    slug: "creative-coding",
    category: "Development",
    title: "Creative coding, from the ground up",
    subtitle: "Make the web a more expressive place.",
    description:
      "Build a confident foundation in modern frontend development, then bring your ideas to life with thoughtful, interactive interfaces.",
    level: "Beginner friendly",
    duration: "4h 20m",
    price: 25,
    artwork: "ember",
    instructor: "The Goodcourse team",
    sections: [
      {
        title: "01 · Start with the web",
        lessons: [
          { id: "welcome", title: "Welcome to the course", duration: "4:12", preview: true },
          { id: "web-basics", title: "How the web comes together", duration: "12:40" },
          { id: "first-page", title: "Your first page", duration: "16:08" },
        ],
      },
      {
        title: "02 · Build with confidence",
        lessons: [
          { id: "html-structure", title: "Give your ideas structure", duration: "14:25" },
          { id: "style-with-css", title: "Make it yours with CSS", duration: "19:10" },
          { id: "responsive-layouts", title: "Design for every screen", duration: "21:32" },
        ],
      },
      {
        title: "03 · Bring it to life",
        lessons: [
          { id: "first-interaction", title: "Add your first interaction", duration: "17:45" },
          { id: "share-your-work", title: "Share what you made", duration: "9:18" },
        ],
      },
    ],
  },
  {
    slug: "typescript-everyday",
    category: "Development",
    title: "TypeScript for everyday projects",
    subtitle: "Write clearer code. Work with more confidence.",
    description:
      "Learn practical TypeScript through approachable examples, from your first type annotations to the patterns you will use in real projects.",
    level: "Beginner friendly",
    duration: "3h 45m",
    price: 25,
    artwork: "violet",
    instructor: "The Goodcourse team",
    sections: [
      {
        title: "01 · A friendlier start",
        lessons: [
          { id: "why-typescript", title: "Why TypeScript?", duration: "5:18", preview: true },
          { id: "first-types", title: "Meet your first types", duration: "13:06" },
          { id: "inference", title: "Let TypeScript do the work", duration: "11:42" },
        ],
      },
      {
        title: "02 · Model your ideas",
        lessons: [
          { id: "objects", title: "Objects and useful shapes", duration: "18:21" },
          { id: "unions", title: "Unions that make sense", duration: "16:34" },
          { id: "functions", title: "Functions with guardrails", duration: "20:11" },
        ],
      },
      {
        title: "03 · Put it into practice",
        lessons: [
          { id: "api-data", title: "Working with API data", duration: "22:08" },
          { id: "next-steps", title: "Keep the momentum going", duration: "8:53" },
        ],
      },
    ],
  },
  {
    slug: "design-to-interface",
    category: "Design",
    title: "From design idea to polished interface",
    subtitle: "Turn the blank canvas into something people love to use.",
    description:
      "Explore layout, type, color, and component decisions that help digital products feel clear, considered, and a little more human.",
    level: "All levels",
    duration: "2h 55m",
    price: 25,
    artwork: "mint",
    instructor: "The Goodcourse team",
    sections: [
      {
        title: "01 · Look closer",
        lessons: [
          { id: "design-observation", title: "Learn to notice the details", duration: "6:04", preview: true },
          { id: "page-hierarchy", title: "Give every page a rhythm", duration: "14:39" },
          { id: "type-and-space", title: "Type, space, and focus", duration: "16:20" },
        ],
      },
      {
        title: "02 · Make the pieces",
        lessons: [
          { id: "color-system", title: "Choose colors with purpose", duration: "13:15" },
          { id: "interface-components", title: "Build a flexible component set", duration: "22:10" },
          { id: "polish-pass", title: "The final polish pass", duration: "19:44" },
        ],
      },
    ],
  },
  {
    slug: "better-productivity",
    category: "Creative practice",
    title: "A calmer approach to getting things done",
    subtitle: "Make space for focus, one small step at a time.",
    description:
      "Create a more sustainable creative routine with simple tools for prioritizing, protecting your attention, and finding a pace you can keep.",
    level: "All levels",
    duration: "2h 30m",
    price: 25,
    artwork: "blue",
    instructor: "The Goodcourse team",
    sections: [
      {
        title: "01 · Find your pace",
        lessons: [
          { id: "start-here", title: "A gentler way to begin", duration: "4:50", preview: true },
          { id: "energy-map", title: "Notice where your energy goes", duration: "12:18" },
          { id: "choose-priorities", title: "Choose what matters today", duration: "15:07" },
        ],
      },
      {
        title: "02 · Build a rhythm",
        lessons: [
          { id: "focus-blocks", title: "Make room for focused work", duration: "17:16" },
          { id: "creative-breaks", title: "Take breaks that restore you", duration: "10:28" },
          { id: "weekly-reset", title: "A simple weekly reset", duration: "14:40" },
        ],
      },
    ],
  },
  {
    slug: "freelance-foundations",
    category: "Creative practice",
    title: "Freelance foundations that feel like you",
    subtitle: "Build a practice around good work and good boundaries.",
    description:
      "Get the building blocks of an independent creative practice, from finding the right projects to setting expectations and building trust.",
    level: "Beginner friendly",
    duration: "3h 10m",
    price: 25,
    artwork: "rose",
    instructor: "The Goodcourse team",
    sections: [
      {
        title: "01 · Set your direction",
        lessons: [
          { id: "freelance-welcome", title: "Start where you are", duration: "5:05", preview: true },
          { id: "find-your-strength", title: "Name what you do best", duration: "13:52" },
          { id: "ideal-projects", title: "Find work that fits", duration: "18:24" },
        ],
      },
      {
        title: "02 · Work well together",
        lessons: [
          { id: "first-conversation", title: "A better first conversation", duration: "16:10" },
          { id: "scope-and-timing", title: "Agree on scope and timing", duration: "20:06" },
          { id: "healthy-boundaries", title: "Make space for good boundaries", duration: "14:38" },
        ],
      },
    ],
  },
  {
    slug: "accessible-web",
    category: "Development",
    title: "A more accessible web, one page at a time",
    subtitle: "Make digital experiences work for more people.",
    description:
      "Build the practical habits behind accessible interfaces, covering semantic structure, keyboard access, contrast, and inclusive testing.",
    level: "Some experience",
    duration: "3h 35m",
    price: 25,
    artwork: "gold",
    instructor: "The Goodcourse team",
    sections: [
      {
        title: "01 · Start with people",
        lessons: [
          { id: "accessibility-welcome", title: "What accessibility makes possible", duration: "6:14", preview: true },
          { id: "inclusive-thinking", title: "Design beyond assumptions", duration: "14:50" },
          { id: "semantic-foundations", title: "Build on a semantic foundation", duration: "18:32" },
        ],
      },
      {
        title: "02 · Make it work",
        lessons: [
          { id: "keyboard-paths", title: "Make every action reachable", duration: "17:02" },
          { id: "contrast-and-clarity", title: "Contrast, type, and clarity", duration: "15:48" },
          { id: "test-with-care", title: "Test with care", duration: "21:05" },
        ],
      },
    ],
  },
];

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}

export function getCourseLessonCount(course: Course) {
  return course.sections.reduce((total, section) => total + section.lessons.length, 0);
}
