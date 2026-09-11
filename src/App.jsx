import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Movielist from './components/movielist/Movielist'
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Movielist />
      </main>
    </div>
  )
}

export default App