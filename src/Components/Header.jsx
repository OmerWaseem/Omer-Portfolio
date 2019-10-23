import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub , faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export const Header = () => (
  <div>
    <nav className="navbar navbar-fixed-top">
      <a className="navbar-brand"><h2>Omer Bin Waseem</h2></a>
      
      <div className="inline">
        <a name="about"></a>
        <a className="header-tabs" href="#about">About</a>
        <a className="header-tabs" href="#projects">Projects</a>
        <a className="header-tabs" href="#experience">Experience</a>
        <div class="dropdown inline header-tabs 2pr-5">
  <button class="dropdown-toggle px4 header-button" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Contact
  </button>
  <div class="dropdown-menu pr5" style={{background:"black"}} aria-labelledby="dropdownMenu2">
    <a href="https://github.com/OmerWaseem"><button class="dropdown-item" type="button"><a className= "social-links" ><FontAwesomeIcon icon={faGithub} size="1x" /></a>    Github</button></a>
    <a href="mailto:omerwaseem15@gmail.com"><button class="dropdown-item" type="button" ><a className= "social-links" ><FontAwesomeIcon icon={faEnvelope} size="1x" /></a>    Email</button></a>
    <a href="https://www.linkedin.com/in/omer-bin-waseem-50191316a/"><button class="dropdown-item" type="button" ><a className= "social-links" ><FontAwesomeIcon icon={faLinkedinIn} size="1x" /></a>    LinkedIn</button></a>
  </div>
</div>
      </div>
    </nav>
  </div>
    
)