import React, { useState } from "react";
import LayoutModal from "../Components/Modal/LayoutModal";
import Quiz from "../Components/Quiz/Quiz";
const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="w-screen h-screen  text-white flex justify-center items-center">
      <LayoutModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Game Instructions"
        closeButton={true}
      >
        <div>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>The game begins automatically when the app loads.</li>
            <li>Questions are shuffled to give a new experience every time.</li>

            <li>
              One question will be shown at a time. Read the question and think
              carefully before answering.
            </li>
            <li>
              if your answer is incorrect you will lose the game but you have
              choice to restart the game
            </li>
          </ol>
        </div>
      </LayoutModal>
      <Quiz />
    </div>
  );
};

export default Home;
