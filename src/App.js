import React from 'react'
import {Header} from '../src/Components/Header'
import {About} from '../src/Components/About'
import {Projects} from '../src/Components/Projects'
import { WorkExperience } from './Components/WorkExperience'
import { Achievments } from './Components/Achievements'



function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Achievments/>
      <Projects/>
      <WorkExperience/>
    </div>
  );
}

export default App
