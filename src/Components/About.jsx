import React from 'react'
import TextLoop from "react-text-loop"

export const About = () => (
  <section className="vh-100 row justify-content-center align-items-center w-100 text-align-center align-middle align-content-center">
    <div className="about-main">About me</div>
    <h1></h1>
    <TextLoop interval={1500}>
      <div className="about-main">student</div>
      <div className="about-main">cyber security</div>
      <div className="about-main">HTML/CSS</div>
      <div className="about-main">Java</div>
      <div className="about-main">JavaScript</div>
      <div className="about-main">React</div>
      <div className="about-main">Linux</div>
      <div className="about-main">Unity 2D/3D</div>
      <div className="about-main">Video Games</div>

    </TextLoop>
  </section>
)