import React from "react";
import { setCurrentQuestion } from "../redux/slices/questSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/store";

const QuestNavigation = () => {
  const dispatch = useDispatch();
  const { currentQuestion, answers } = useAppSelector((store) => store.quest);

  if (!answers) return null;

  const handleSetQuestion = (index: number) => {
    dispatch(setCurrentQuestion(index));
  };
  const handleNextQuestion = () => {
    dispatch(setCurrentQuestion(currentQuestion + 1));
  };
  const handlePrevQuestion = () => {
    dispatch(setCurrentQuestion(currentQuestion - 1));
  };

  const isPrevDisable = currentQuestion === 0;
  const isNextDisabled = currentQuestion === answers.length - 1;

  const arr = answers.map((answer) => ({
    isAnswered: answer.choosenVariant !== null,
  }));

  return (
    <div className="button-container">
      <div className="button-container">
        <button
          onClick={handlePrevQuestion}
          disabled={isPrevDisable}
          className="button"
        >
          prev question
        </button>
        {arr.map(({ isAnswered }, i) => {
          return (
            <button
              onClick={() => handleSetQuestion(i)}
              key={i}
              className={`button ${isAnswered && "primary"}`}
            >
              {i + 1}
            </button>
          );
        })}

        <button
          onClick={handleNextQuestion}
          disabled={isNextDisabled}
          className="button"
        >
          next question
        </button>
      </div>
    </div>
  );
};

export default QuestNavigation;
