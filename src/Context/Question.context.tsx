import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import initialQuestions from "../utils/questionsData";

import {
  Question,
  QuestionsContextType,
} from "../utils/interfaces/Home.interface";

const QuestionsContext = createContext<QuestionsContextType | undefined>(
  undefined
);

const shuffleArray = (arr: Question[]) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};


export const QuestionsProvider = ({ children }: { children: ReactNode }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);

  const GameStart = useCallback(() => {
    const shuffled = shuffleArray(questions);
    setCurrentQuestions(shuffled);
  }, [questions]);

  useEffect(() => {
    setQuestions(initialQuestions);
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      GameStart();
    }
  }, [questions, GameStart]);

  const nextQuestion = (): Question | null => {
    if (currentQuestions.length === 0) return null;

    const [next, ...rest] = currentQuestions;
    setCurrentQuestions(rest);
    return next;
  };

  const startAgain = () => {
    GameStart();
  };

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        currentQuestions,
        GameStart,
        nextQuestion,
        startAgain,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

export const useQuestions = (): QuestionsContextType => {
  const context = useContext(QuestionsContext);
  if (!context) {
    throw new Error("useQuestions must be used inside a QuestionsProvider");
  }
  return context;
};
