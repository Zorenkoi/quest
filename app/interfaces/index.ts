export interface IQuestion {
  id: string;
  questionText: string;
  variants: string[];
  trueVariant: number;
}

export interface IAnswer extends IQuestion {
  choosenVariant: number | null;
}

export interface IQuest {
  id: string;
  title: string;
  questions: IQuestion[];
  createdAt: string;
}

export interface IResult {
  id: string;
  answers: IAnswer[];
  startedAt: string;
  endedAt: string;
  questId: string;
  questTitle: string;
  numberTrueAnswers: number;
}

// Experiment

export interface IQuestionMain {
  id: string;
  questionText: string;
}
export interface Alya {
  text: string;
  id: string;
}

export interface IQuestion1 extends IQuestionMain {
  variant: "";
  variants: string[];
  trueVariant: number;
}

export interface IQuestion2 {
  trueText: string;
}

export interface IQuestion3 {
  variants: string[];
  trueVariant: number;
  alyaKeys: Alya[];
  alyaValues: Alya[];
}
