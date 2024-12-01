import React from "react";
import { IQuestion } from "../interfaces";

interface IProps {
  questionIndex: number;
  question: IQuestion;
  setTrueVariant: (questionId: string, variantIndex: number) => void;
  updateVariant: (
    questionId: string,
    variantIndex: number,
    text: string
  ) => void;
  updateQuestionText: (questionId: string, value: string) => void;
}

const QuestionForm: React.FC<IProps> = ({
  question,
  setTrueVariant,
  updateVariant,
  updateQuestionText,
  questionIndex,
}) => {
  return (
    <div className="question-form">
      <h6>Question {questionIndex + 1}</h6>

      <input
        value={question.questionText}
        onChange={(e) => updateQuestionText(question.id, e.target.value)}
        placeholder="Question text"
        className="input input-middle"
      />
      {question.variants.map((variant, variantIndex) => (
        <div key={variantIndex}>
          <input
            value={variant}
            onChange={(e) =>
              updateVariant(question.id, variantIndex, e.target.value)
            }
            placeholder={`variant ${variantIndex + 1}`}
            className="input input-small"
          />
          <input
            type="radio"
            checked={question.trueVariant === variantIndex}
            onChange={() => setTrueVariant(question.id, variantIndex)}
          />
        </div>
      ))}
    </div>
  );
};

export default QuestionForm;
