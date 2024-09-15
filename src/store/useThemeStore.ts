import { create } from "zustand";
import { ThemeName } from "../types";
import { devtools, persist } from "zustand/middleware";

interface UseThemeStore {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

export const useThemeStore = create<UseThemeStore>()(
  devtools(
    persist(
      (set) => ({
        theme: "light",
        setTheme: (theme) => set(() => ({ theme })),
      }),
      { name: "bearStore" }
    )
  )
);
