"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchQuests } from "./api";
import QuestPreview from "./components/QuestPreview";

export default function Home() {
  const { data: quests } = useQuery({
    queryKey: ["quest"],
    queryFn: fetchQuests,
  });

  if (!quests) return null;

  return (
    <div>
      {quests.map((quest) => (
        <QuestPreview key={quest.id} {...quest} />
      ))}
    </div>
  );
  return null;
}
