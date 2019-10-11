import React from 'react'
import TextLoop from "react-text-loop"


export const About = () => (

  <section className="about-me-section col justify-content-center align-items-center w-100 text-align-center align-middle align-content-center">
    <div className="main-heading">About me</div>
    <h5 className="flexbox">
    <TextLoop springConfig={{ stiffness: 180, damping: 8 }} interval={2500}>

      <div datatype="secondary heading" className="centered-text" >Student</div>
      <div datatype="tertiary heading" className="centered-text" >Cyber Security</div>
      <div datatype="tertiary heading" className="centered-text" >HTML/CSS</div>
      <div datatype="tertiary heading"  className="centered-text">Java</div>
      <div datatype="tertiary heading" className="centered-text" >JavaScript</div>
      <div datatype="tertiary heading" className="centered-text" >React</div>
      <div datatype="tertiary heading" className="centered-text" >Linux</div>
      <div datatype="tertiary heading" className="centered-text" >Unity 2D/3D</div>
      <div datatype="tertiary heading" className="centered-text" >Video Games</div>

    </TextLoop>
    </h5>
  </section>
)