import { create } from "zustand"
import type { ThemeState } from "@/types"

export const useThemeStore = create<ThemeState>((set) => ({
  mode: "dark",
  toggle: () =>
    set((state) => {
      const next = state.mode === "light" ? "dark" : "light"
      document.documentElement.classList.toggle("dark", next === "dark")
      localStorage.setItem("theme", next)
      return { mode: next }
    }),
  setMode: (mode) => {
    document.documentElement.classList.toggle("dark", mode === "dark")
    localStorage.setItem("theme", mode)
    set({ mode })
  },
}))
