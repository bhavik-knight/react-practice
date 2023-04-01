import React from "react"
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import "./index.css"

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false)

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className="container">
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Body
        darkMode={darkMode}
      />
    </div>
  )
}
