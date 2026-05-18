import { useContext } from "react"
import "./Content.css"

export default function Content ({ ThemeContext }) {
    const theme = useContext(ThemeContext)

    return (
        <div id="Content" className={theme + "-Mode"}>
        <p className={theme + "-Mode"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. At blanditiis assumenda, eveniet corporis voluptate adipisci labore sit est ipsum dicta veritatis nihil mollitia, alias eos magni exercitationem enim hic vitae.</p>
        </div>
    )
}