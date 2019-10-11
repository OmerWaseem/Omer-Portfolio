import React from 'react'
import TextLoop from "react-text-loop"


export const About = () => (
  <section className="about-me-section col justify-content-center align-items-center w-100 text-align-center align-middle align-content-center">
    <div className="main-heading">About me</div>
    <h5 style={{ textAlign: "center"}}>
    <TextLoop springConfig={{ stiffness: 180, damping: 8 }} interval={2000}>
      <div datatype="secondary heading"style={{ textAlign: "center"}}>Student</div>
      <div datatype="tertiary heading" style={{ textAlign: "center"}}>Cyber Security</div>
      <div datatype="tertiary heading" style={{ textAlign: "center"}}>HTML/CSS</div>
      <div datatype="tertiary heading" style={{ textAlign: "center"}}>Java</div>
      <div datatype="tertiary heading" style={{ textAlign: "center"}}>JavaScript</div>
      <div datatype="tertiary heading" style={{ textAlign: "center"}}>React</div>
      <div datatype="tertiary heading" style={{ textAlign: "center"}}>Linux</div>
      <div datatype="tertiary heading" style={{ textAlign: "center"}}>Unity 2D/3D</div>
      <div datatype="tertiary heading" style={{ textAlign: "center"}}>Video Games</div>

    </TextLoop>
    </h5>
  </section>
)