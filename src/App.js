import React from 'react'
import {Header} from '../src/Components/Header'
import {About} from '../src/Components/About'
import {Projects} from '../src/Components/Projects'
import { WorkExperience } from './Components/WorkExperience'



function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Projects/>
      <WorkExperience/>
    </div>
  );
}

export default App
