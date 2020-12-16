import React from 'react'
import Video1 from './e_thump.gif'
import WSA from './WSA.png'
import PasswordStrengthMeter from './PSM_App'
import PassGen_App from './PassGen_App'


export const Projects = () => (
  <section className="vh-80">
    
    <div datatype="section heading" style={{paddingTop:"15em;"}}><h1 ><a name="projects"></a>Projects</h1></div>
      

    <div className="card" style={{background: '#000000'}}>
      <div className="card-columns projects-card">
        <div className="card card-bg">
          <div className="card-body">
            <h5 className="card-title">Unity Game</h5>
            <iframe src="https://www.youtube.com/embed/CAaGD9Vs91I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p className="card-text">My walkthrough for the Eternal Blue exploit on TryHackMe.</p>
          </div>
        </div>

        <div className="card card-bg">
          <div className="card-body">
            <h5 className="card-title">Unity Game</h5>
            <iframe src="https://www.youtube.com/embed/YlvPW3tdPLY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p className="card-text">Demo made in Unity using free to use Assets for my University Assignment</p>
          </div>
        </div>

        <div className="card card-bg">
          <div className="card-body">
            <h5 className="card-title">Java Processing Game</h5>
            <img width= "100%" height="auto" src={Video1} alt="loading..."/>
            <p className="card-text">Use the mouse to control Bill so he can bounce to balls on his hat and collect them in his basket.</p>
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
        <div className="card card-bg text-center">
          <div className="card-body">
            <img width= "100%" height="auto" src={WSA} alt="loading..."/>
            <p className="card-text"><small>This application analyzes and gives a summary of the different components that make up an HTML page and looks for some vulnerabilities that can easily be overlooked. <strong><a style={{}} href="https://web-security-analyzer.herokuapp.com/">Try it now!</a></strong></small></p>
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