import React from 'react'
import TextLoop from "react-text-loop"

export const About = () => (
  <section className="vh-100 row justify-content-center align-items-center w-100 text-align-center align-middle align-content-center">
    <div datatype="secondary heading">About me</div>
    <h1></h1>
    <TextLoop interval={1500}>
      <div className="main heading">Student</div>
      <div datatype="tertiary heading">Cyber Security</div>
      <div datatype="tertiary heading">HTML/CSS</div>
      <div datatype="tertiary heading">Java</div>
      <div datatype="tertiary heading">JavaScript</div>
      <div datatype="tertiary heading">React</div>
      <div datatype="tertiary heading">Linux</div>
      <div datatype="tertiary heading">Unity 2D/3D</div>
      <div datatype="tertiary heading">Video Games</div>

    </TextLoop>
  </section>
)