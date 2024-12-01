import { useState } from "react";
import { IQuestion } from "../interfaces";
import { generateEmptyQuestion } from "../utils";

const useCreateQuestions = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  const addNewQuestion = () => {
    setQuestions((prev) => [...prev, generateEmptyQuestion()]);
  };

  const updateQuestionText = (questionId: string, text: string) => {
    setQuestions((prev) =>
      prev.map((question) => {
        if (question.id !== questionId) return question;
        return { ...question, questionText: text };
      })
    );
  };

  const updateVariant = (
    questionId: string,
    variantIndex: number,
    text: string
  ) => {
    setQuestions((prev) =>
      prev.map((question) => {
        if (question.id !== questionId) return question;

        return {
          ...question,
          variants: question.variants.map((variant, j) => {
            if (j !== variantIndex) return variant;
            return text;
          }),
        };
      })
    );
  };

  const setTrueVariant = (questionId: string, variantIndex: number) => {
    setQuestions((prev) =>
      prev.map((question) => {
        if (question.id !== questionId) return question;

        return { ...question, trueVariant: variantIndex };
      })
    );
  };
  return {
    questions,
    addNewQuestion,
    setTrueVariant,
    updateQuestionText,
    updateVariant,
  };
};

export default useCreateQuestions;
