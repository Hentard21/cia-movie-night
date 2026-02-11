export const QUIZ_QUESTIONS = [
  {
    id: "q1" as const,
    label: "Preferred accent in films",
    options: [
      { value: "british", label: "British" },
      { value: "american", label: "American" },
      { value: "no_preference", label: "No preference" },
    ],
  },
  {
    id: "q2" as const,
    label: "Preferred genre",
    options: [
      { value: "comedy", label: "Comedy" },
      { value: "drama", label: "Drama" },
      { value: "action", label: "Action" },
      { value: "documentary", label: "Documentary" },
    ],
  },
  {
    id: "q4" as const,
    label: "Film length",
    options: [
      { value: "short", label: "Short (<90 min)" },
      { value: "medium", label: "Medium (90–120 min)" },
      { value: "long", label: "Long (>120 min)" },
    ],
  },
  {
    id: "q5" as const,
    label: "Preferred era",
    options: [
      { value: "classic", label: "Classic (pre-1990)" },
      { value: "2000s", label: "2000s" },
      { value: "recent", label: "Recent (2015+)" },
    ],
  },
] as const;

export const Q_KEYS = ["q1", "q2", "q4", "q5"] as const;
export type QuizAnswers = Record<(typeof Q_KEYS)[number], string>;
