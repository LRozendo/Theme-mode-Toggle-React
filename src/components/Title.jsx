import { useContext } from "react"
import "./Title.css"

export default function Title ({ ThemeContext }) {
    const theme = useContext(ThemeContext)
    return (
        <h1 className={`title ${theme + "-Mode"}`}>Lorem ipsum dolor</h1>
    )
}