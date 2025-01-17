import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const obj = {
  greeting :"hey",
  title: "react"
}
function App() {

  const title = "react";
  return (
    <div>
      <h1>{obj.greeting}</h1>
      <h1>{obj.title}</h1>
      <label htmlFor="search"> input text</label>
      <input id='search' type="text" />
    </div>
  )
}

export default App;