import { nanoid } from "nanoid";
import { IAnswer, IQuestion } from "../interfaces";

export const normalizeParams = (param: string | string[] | undefined) => {
  if (!param) return "";
  if (Array.isArray(param)) return "";
  return param;
};

export const countTrueAnswer = (answers: IAnswer[]) => {
  return answers.reduce((acc, { trueVariant, choosenVariant }) => {
    if (choosenVariant === trueVariant) return acc + 1;
    return acc;
  }, 0);
};
export const generateEmptyQuestion = (): IQuestion => {
  return {
    questionText: "",
    variants: ["", "", ""],
    trueVariant: 0,
    id: nanoid(),
  };
};
