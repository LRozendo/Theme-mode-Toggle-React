import { useTheme } from '../hooks/useTheme'

export default function ThemeButton () {
    const {theme, toggleTheme} = useTheme()
    return (
        <button 
        type="button"
        onClick={toggleTheme}
        className='
        p-3 
        border-2 rounded-xs border-(--border)
        hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] 
        active:shadow-[inset_0_0_100px_rgba(0,0,0,0.4)]'>
            {theme === "light" ? "🌑 Dark" : "☀️ Light"}
        </button>
    )
}