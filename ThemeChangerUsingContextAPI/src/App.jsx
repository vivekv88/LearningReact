import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './Contexts/Theme'
import Button from './Components/Button'
import Card from './Components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => {
      setThemeMode("dark")
  }

  const lightTheme = () => {
      setThemeMode("light")
  }

  useEffect(() => {
    const tag = document.querySelector('html').classList
    tag.remove("light","dark")
    tag.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Button />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
