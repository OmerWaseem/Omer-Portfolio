import React from 'react'
import {Header} from '../src/Components/Header'
import {About} from '../src/Components/About'
import {Projects} from '../src/Components/Projects'
import { FreelanceWork } from './Components/FreelanceWork'



function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Projects/>
      <FreelanceWork/>
    </div>
  );
}

export default App
