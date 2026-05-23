import { useState, useEffect } from "react";
import { ThemeContext } from "./themeContext";

const getInitialTheme = () => {
  const saved = localStorage.getItem('theme')
  if (saved) return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(
        () => getInitialTheme()
    )

    useEffect(
        () => {
            document.documentElement.classList.toggle('dark', theme === 'dark')
            localStorage.setItem('theme', theme)
        }, [theme]
    )

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light')

    return (
        <ThemeContext.Provider value={ {theme, toggleTheme} }>
            {children}
        </ThemeContext.Provider>
    )
}