import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Abstract from './components/Abstract'
import Interests from './components/Interests'
import Keywords from './components/Keywords'

function App() {
  return (
    <>
      <Header />
      <Keywords />
      <Abstract />
      <Interests />
    </>
  )
}

export default App
