import { Sun } from "lucide-react";
import { useContext } from "react";
import "./ToggleMode.css"

export default function ToggleMode ({ ThemeContext, toggleClick }) {
    const theme = useContext(ThemeContext)

    return (
        <button type="button" onClick={toggleClick} id="ToggleMode" className={theme + "-Mode"}><Sun/></button>
    )
}