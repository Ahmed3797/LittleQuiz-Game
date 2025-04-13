import { Question } from "../../../utils/interfaces/Home.interface";
interface Props {
  question: Question | undefined;
  remaining: number;
}

const QuestionDisplay = ({ question, remaining }: Props) => (
  <div>
    <div className="font-semibold font-serif text-5xl text-white bg-[#212c42] p-3 rounded-md">
      <p>Remaining Questions {remaining}</p>
    </div>
    <h1 className="font-semibold my-6 mx-2 text-[#3c404d]">{question?.question}</h1>
    <hr className="border-[#212c42] border-2 my-4 w-[50%]"  />
  </div>
);

export default QuestionDisplay;
