import { IAnswer } from "@/app/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  questTitle: string | null;
  startedAt: string | null;
  endedAt: string | null;
  questId: string | null;
  answers: IAnswer[] | null;
  isEnded: boolean;
  currentQuestion: number;
}

const initialState: IState = {
  questTitle: null,
  startedAt: null,
  endedAt: null,
  questId: null,
  answers: null,
  isEnded: false,
  currentQuestion: 0,
};

export const questSlice = createSlice({
  name: "quest",
  initialState,
  reducers: {
    startQuest: (
      state,
      action: PayloadAction<{
        answers: IAnswer[];
        questId: string;
        questTitle: string;
      }>
    ) => {
      const { answers, questId, questTitle } = action.payload;

      state.questTitle = questTitle;
      state.answers = answers;
      state.questId = questId;
      state.isEnded = false;
      state.startedAt = new Date().toISOString();
      state.endedAt = null;
      state.currentQuestion = 0;
    },

    endQuest: (state) => {
      state.endedAt = new Date().toISOString();
      state.isEnded = true;
    },

    chooseVariant: (
      state,
      action: PayloadAction<{ answerId: string; variantIndex: number }>
    ) => {
      const { answers } = state;

      if (!answers) return state;

      const { answerId, variantIndex } = action.payload;

      const updatedAnswers = answers.map((answer) => {
        if (answerId !== answer.id) return answer;

        return { ...answer, choosenVariant: variantIndex };
      });

      state.answers = updatedAnswers;
    },
    setCurrentQuestion: (state, action: PayloadAction<number>) => {
      state.currentQuestion = action.payload;
    },
  },
});

export const { startQuest, endQuest, chooseVariant, setCurrentQuestion } =
  questSlice.actions;

export default questSlice.reducer;
