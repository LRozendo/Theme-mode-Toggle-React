import { createContext, useState } from "react"
import Container from "./components/Container"

const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState("dark")

  function toggleClick () {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }
  return (
    <ThemeContext value={theme}>
      <Container ThemeContext={ThemeContext} useTheme={theme} toggleClick={toggleClick}/>
    </ThemeContext>
  )
}

export default App