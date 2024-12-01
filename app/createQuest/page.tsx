"use client";

import React, { useState } from "react";
import QuestionForm from "../components/QuestionForm";
import { postQuest } from "../api";
import useCreateQuestions from "../hooks/useCreateQuest";

const CreateQuestPage = () => {
  const {
    questions,
    addNewQuestion,
    setTrueVariant,
    updateQuestionText,
    updateVariant,
  } = useCreateQuestions();
  const [title, setTitle] = useState("");

  const saveQuest = () => {
    const quest = {
      title,
      questions,
      createdAt: new Date().toISOString(),
    };

    postQuest(quest);
  };

  return (
    <div>
      <input
        className="full-input"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {questions.map((question, questionIndex) => (
        <QuestionForm
          key={question.id}
          questionIndex={questionIndex}
          question={question}
          updateVariant={updateVariant}
          setTrueVariant={setTrueVariant}
          updateQuestionText={updateQuestionText}
        />
      ))}
      <div className="button-container">
        <button className="button" onClick={addNewQuestion}>
          Add New Question
        </button>
        <button className="button" onClick={saveQuest}>
          Save Quest
        </button>
      </div>
    </div>
  );
};

export default CreateQuestPage;
