type Question = { id: string; question: string; type: "RATING" | "TEXT" };

export type Answer = { questionId: string; answer: string};

export type User = {
  id: string;
  username: string;
  password: string;
  role: "EMPLOYEE" | "LEADER";
};

export type AppData = {
  users: User[];
  questions: {
    forEmployee: Question[];
    forLeader: Question[];
  };
};

export const initialData: AppData = {
  users: [
    { id: "1", username: "Juliusz", password: "julek123", role: "EMPLOYEE" },
    { id: "2", username: "Maciej", password: "maciej123", role: "LEADER" },
  ],
  questions: {
    forEmployee: [
      { id: "1", question: "Co pozytywnego wnosi oceniany lider do zespołu?", type: "TEXT" },
      { id: "2", question: "Jak Ci się pracuje z ocenianym liderem?", type: "RATING" },
    ],
    forLeader: [
      { id: "1", question: "Co pozytywnego wnosi oceniany pracownik do zespołu?", type: "TEXT" },
      { id: "2", question: "Jak Ci się pracuje z ocenianym pracownikiem?", type: "RATING" },
    ],
  },
};

export type AnswerData = {
  userId: string;
  answers: Answer[];
};

export const answers: AnswerData[] = [
  {
    userId: "1",
    answers: [
      { questionId: "1", answer: "???" },
      { questionId: "2", answer: "???" },
    ],
  },
  { userId: "2", answers: [{ questionId: "1", answer: "???" }] },
];
