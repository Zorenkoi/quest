"use client";
import React from "react";
import { useAppSelector } from "../redux/store";
import { countTrueAnswer } from "../utils";
import { IResult } from "../interfaces";
import { nanoid } from "nanoid";

const ResultPage = () => {
  const { answers, questId, startedAt, endedAt, questTitle } = useAppSelector(
    (store) => store.quest
  );
  if (!answers || !questId || !startedAt || !endedAt || !questTitle)
    return null;

  const totalCount = answers.length;
  const numberTrueAnswers = countTrueAnswer(answers);

  const obj: IResult = {
    answers: answers,
    numberTrueAnswers,
    id: nanoid(),
    questId,
    startedAt,
    endedAt,
    questTitle,
  };
  console.log(obj);

  return (
    <div>
      number true answer: {numberTrueAnswers} / {totalCount}
      {answers.map((answer, index) => {
        return (
          <div key={answer.id} className="answer-form">
            <p className="question-text">
              {index + 1}. {answer.questionText}
            </p>

            <div>
              {answer.variants.map((variant, i) => {
                let className = "row";

                if (i === answer.choosenVariant) {
                  if (answer.trueVariant === answer.choosenVariant) {
                    className = "row success";
                  } else {
                    className = "row error";
                  }
                }

                return (
                  <div key={i}>
                    <div className={className}>
                      <span>{i + 1}.</span>
                      <p className="answer-text">{variant}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResultPage;
