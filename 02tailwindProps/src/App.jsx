import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='text-5x mb-5'>Welcome to the World of Science !!!</h1>
      <Card topic="Science of Physics"/>
      <Card topic="Science of Chemistry"/>
    </>
  )
}

export default App
