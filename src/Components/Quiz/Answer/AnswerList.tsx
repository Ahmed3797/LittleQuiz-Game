import { AnswerOption } from "../../../utils/interfaces/Home.interface";

interface Props {
  options: AnswerOption[];
  onSelect: (option: AnswerOption) => void;
}

const AnswerList = ({ options, onSelect }: Props) => (
  <div className="flex flex-col items-start justify-center">
    {options.map((item) => (
      <button
        key={item.value}
        className="p-2 text-2xl hover:bg-[#a2ea29] hover:text-white w-full text-start rounded-md"
        onClick={() => onSelect(item)}
      >
        {item.value}
      </button>
    ))}
  </div>
);

export default AnswerList;
