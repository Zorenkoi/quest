import axios from "axios";
import { IQuest, IQuestion } from "../interfaces";

const BASEURL = "http://localhost:8888/quest";

export const postQuest = async (quest: {
  title: string;
  questions: IQuestion[];
  createdAt: string;
}): Promise<IQuest> => {
  const { data } = await axios.post<IQuest>(BASEURL, quest);
  return data;
};

export const fetchQuests = async (): Promise<IQuest[]> => {
  const { data } = await axios.get<IQuest[]>(BASEURL);
  return data;
};

export const fetchQuestById = async (questId: string): Promise<IQuest> => {
  const { data } = await axios.get<IQuest>(`${BASEURL}/${questId}`);
  return data;
};

export const deleteQuest = async (questId: string): Promise<void> => {
  await axios.delete(`${BASEURL}/${questId}`);
};
