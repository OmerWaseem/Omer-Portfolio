import React from 'react'
import {Header} from '../src/Components/Header'
import {About} from '../src/Components/About'
import {Projects} from '../src/Components/Projects'
import {Contact} from '../src/Components/Contact'



function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App
