import React from 'react'
import Video1 from './e_thump.gif'
import WSA from './WSA.png'
import PasswordStrengthMeter from './PSM_App'
import PassGen_App from './PassGen_App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export const Projects = () => (
  <section className="vh-80">
    <a name="projects"></a>
    <h1>Projects</h1>
    <div className="card" style={{background: '#000000'}}>
      <div className="card-columns">
        <div className="card card-bg">
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Unity Game</h5>
            <p className="card-text">Add live demo here along with description</p>
          </div>
        </div>

        <div className="card card-bg">
          <div className="card-body">
            <h5 className="card-title">Java Processing Game</h5>
            <img width= "auto" src={Video1} alt="loading..."/>
            <p className="card-text">Use the mouse to control Bill so he can bounce to balls on his hat and collect them in his basket.</p>
            <p>*Source code can be provided if required for a demo.</p>
          </div>
        </div>
        <div className="card card-bg text-white text-center p-3">
          <blockquote className="blockquote mb-0">
            <p>Password Strength</p>
            <footer className="blockquote text-white">
              <small>
                Check the strength of your password here!
              </small>
              <div className="pt-3"><PasswordStrengthMeter /></div>
              
              <small>
                <ul style={{textAlign:"left"}}>
                  <big>Remember that a strong password should consist of:</big>
                  <li>atleast 8 characters</li>
                  <li>uppercase as well as lowercase letters</li>
                  <li>numbers</li>
                  <li>special characters like !, @, #, $, etc.</li>
                </ul>
              </small>
            </footer>
          </blockquote>
        </div>
        <div className="card card-bg text-white p-3">

            <div><p style={{textAlign:"center", fontSize:"25px"}}>Contact</p></div>
              <div className="social-links">
                <a className= "px-3" href="https://github.com/OmerWaseem"><FontAwesomeIcon icon={faGithub} size="3x" /></a>
                <a href="mailto:omerwaseem15@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="3x" /></a>
              </div>
        </div>
        <div className="card card-bg text-center">
          <div className="card-body">
            <img width= "440px" height="225px" src={WSA} alt="loading..."/>
            <p className="card-text"><small>This application analyzes and gives a summary of the different components that make up an HTML page and looks for some vulnerabilities that can easily be overlooked. <a style={{}} href="https://web-security-analyzer.herokuapp.com/">Try it now!</a></small></p>
          </div>
        </div>
        <div className="card card-bg">
          <div className="card-body">
            <h5 className="card-title">Password Generator</h5>
            <PassGen_App/>
          </div>
        </div>
    </div>
    </div>
  </section>
)