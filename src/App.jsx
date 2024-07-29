import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Abstract from './components/Abstract'
import Interests from './components/Interests'
import Keywords from './components/Keywords'
import AcademicMain from './components/AcademicMain'

function App() {
  return (
    <>
      <Header />
      <Keywords />
      <Abstract />
      <Interests />
      <AcademicMain />
    </>
  )
}

export default App
