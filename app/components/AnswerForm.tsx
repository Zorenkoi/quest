import React from "react";
import { IAnswer } from "../interfaces";
import { useAppDispatch } from "../redux/store";
import { chooseVariant } from "../redux/slices/questSlice";

interface IProps {
  index: number;
  answer: IAnswer;
}

const AnswerForm: React.FC<IProps> = ({ index, answer }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="answer-form">
      <p className="question-text">
        {index + 1}. {answer.questionText}
      </p>

      <div>
        {answer.variants.map((variant, i) => {
          const handleChooseVariant = () => {
            dispatch(chooseVariant({ answerId: answer.id, variantIndex: i }));
          };

          return (
            <div key={i} onClick={handleChooseVariant}>
              <div className="row">
                <span>{i + 1}.</span>
                <p className="answer-text">{variant}</p>
                <input
                  type="radio"
                  onChange={handleChooseVariant}
                  checked={i === answer.choosenVariant}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnswerForm;
