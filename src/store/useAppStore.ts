import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ScreenType } from "../types";

interface UseAppStore {
  icon: string;
  questionsCount: number;
  score: number;
  screen: ScreenType;
  subject: string;
  setIcon: (icon: string) => void;
  setQuestionsCount: (count: number) => void;
  setScore: () => void;
  setScreen: (screen: ScreenType) => void;
  setSubject: (subject: string) => void;
  resetAppStore: () => void;
}

export const useAppStore = create<UseAppStore>()(
  devtools((set) => ({
    icon: "",
    questionsCount: 1,
    score: 0,
    screen: "subjects",
    subject: "",
    setIcon: (img) => set(() => ({ icon: img })),
    setQuestionsCount: (count) => set({ questionsCount: count }),
    setScore: () => set((state) => ({ score: state.score + 1 })),
    setScreen: (title) => set(() => ({ screen: title })),
    setSubject: (name) => set(() => ({ subject: name })),
    resetAppStore: () =>
      set(() => ({
        icon: "",
        questionsCount: 1,
        score: 0,
        screen: "subjects",
        subject: "",
      })),
  }))
);
