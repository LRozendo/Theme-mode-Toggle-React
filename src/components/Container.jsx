import { useContext } from "react"
import Title from "./Title"
import Content from "./Content"
import ToggleMode from "./ToggleMode"
import "./Container.css"

export default function Container ({ ThemeContext, toggleClick }) {
    const theme = useContext(ThemeContext)
    return (
        <div id="Container" className={theme + "-Mode"}>
            <ToggleMode ThemeContext={ThemeContext} toggleClick={toggleClick}/>

            <Title ThemeContext={ThemeContext}/>
            <Content ThemeContext={ThemeContext}/>
        </div>
    )
}