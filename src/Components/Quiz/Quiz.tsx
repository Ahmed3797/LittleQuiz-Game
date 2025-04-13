import { useState } from "react";
import { useQuestions } from "../../Context/Question.context";
import QuestionDisplay from "./QuestionDisplay/QuestionDisplay";
import AnswerList from "./Answer/AnswerList";
import LayoutModal from "../Modal/LayoutModal";
import { AnswerOption,Question } from "../../utils/interfaces/Home.interface";

const Answers: AnswerOption[] = [
  { id: "1", value: "ARP" },
  { id: "2", value: "DHCP" },
  { id: "3", value: "ICMP" },
  { id: "4", value: "NAT" },
];

const Quiz = () => {
  const { nextQuestion, currentQuestions, startAgain } = useQuestions();
  const [que, setQue] = useState<Question | undefined>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const[questionRemaining,setQuestionsRemaining] =useState(6)

  const checkAnswer = (answer: AnswerOption) => {
    if (que?.answer === answer.value) {
      handleNext();
    } else {
      setIsOpen(true);
    }
  };

  const handleNext = () => {
    const question = nextQuestion();
    setQuestionsRemaining(questionRemaining-1)
    setQue(question || undefined);
  };

  if (questionRemaining <0 ) {
    return (
      <div className="text-black text-center">
        <h1 className="text-7xl mb-4">You Won</h1>
        <button
          onClick={startAgain}
          className="bg-green-600 text-white py-2 px-4 rounded"
        >
          Restart Again
        </button>
      </div>
    );
  }

  if (currentQuestions.length > 5) {
    return (
      <div className="text-black text-center">
        <button
          onClick={handleNext}
          className="text-5xl md:text-7xl border-2 rounded-xl p-8 cursor-pointer hover:bg-[#a2ea29] hover:text-white transition duration-300 hover:border-[#a2ea29]"
        >
          Start Game
        </button>
      </div>
    );
  }

  return (
    <div className="w-[80%] md:w-[40%] rounded border p-4 bg-white text-black mx-auto">
      <QuestionDisplay question={que} remaining={questionRemaining} />
      <AnswerList options={Answers} onSelect={checkAnswer} />

      <LayoutModal isOpen={isOpen} onClose={() => setIsOpen(false)} closeButton={false} title="Wrong Answer!">
        <div className="flex flex-col items-center gap-4">
          <p className="text-xl text-red-600">Oops! That was incorrect.</p>
          <button
            onClick={() => {
              startAgain();
              setIsOpen(false);
            }}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Start Again
          </button>
        </div>
      </LayoutModal>
    </div>
  );
};

export default Quiz;
