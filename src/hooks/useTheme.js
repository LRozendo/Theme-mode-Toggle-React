import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export function useTheme() {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error("useTheme deve ser usaddo dentro de um ThemeProvider")
    }

    return context
}