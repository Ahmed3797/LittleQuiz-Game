import { ReactNode } from "react";

export interface Question {
  id: number;
  question: string;
  answer: string;
}

export interface QuestionsContextType {
  questions: Question[];
  currentQuestions: Question[];
  GameStart: () => void;
  nextQuestion: () => Question | null;
  startAgain: () => void;
}

export interface LayoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  closeButton:boolean
}

export interface Question {
  id: number;
  question: string;
  answer: string;
}

export interface AnswerOption {
  id: string;
  value: string;
}
