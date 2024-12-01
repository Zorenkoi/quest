"use client";
import { fetchQuestById } from "@/app/api";
import AnswerForm from "@/app/components/AnswerForm";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { endQuest, startQuest } from "@/app/redux/slices/questSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import { useRouter } from "next/navigation";
import { normalizeParams } from "@/app/utils";
import QuestNavigation from "@/app/components/QuestNavigation";
import ConfirmationModal from "@/app/components/ConfirmationModal";

const RunTestPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const params = useParams();
  const { questId } = params;
  const { data: quest } = useQuery({
    queryKey: ["quest", questId],
    queryFn: () => fetchQuestById(normalizeParams(questId)),
  });

  const { answers, currentQuestion } = useAppSelector((store) => store.quest);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!quest) return;

    const initialAnswers = quest.questions.map((q) => ({
      ...q,
      choosenVariant: null,
    }));

    dispatch(
      startQuest({
        answers: initialAnswers,
        questId: normalizeParams(questId),
        questTitle: quest.title,
      })
    );
  }, [quest]);

  if (!answers) return null;

  const saveResult = () => {
    router.push("/result");
    dispatch(endQuest());
  };
  const handleEnd = () => {
    const isAllQuestionsAnswered = answers.every(
      (answer) => answer.choosenVariant !== null
    );

    if (isAllQuestionsAnswered) {
      saveResult();
    } else {
      setModalOpen(true);
    }
  };

  return (
    <>
      <div>
        <h1 className="header1">{quest?.title}</h1>
        <AnswerForm index={currentQuestion} answer={answers[currentQuestion]} />

        <div className="column">
          <QuestNavigation />
          <button onClick={handleEnd} className="button">
            save answers
          </button>
        </div>

        <ConfirmationModal
          open={modalOpen}
          title="End test"
          message="yon not answered all questions!!! are you sure that you want to end quest?"
          onConfirm={saveResult}
          setModalOpen={setModalOpen}
          onCancel={() => {}}
          confirmText="Yes, i am sure as fuck"
          cancelText="Cancel this shit"
        />
      </div>
    </>
  );
};

export default RunTestPage;
