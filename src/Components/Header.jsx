import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub , faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export const Header = () => (
  <div>
    <nav className="navbar">
      <a className="navbar-brand"><h2>Omer Bin Waseem</h2></a>
      
      <div className="inline">
        <a name="about"></a>
        <a className="header-tabs" href="#about">About</a>
        <a className="header-tabs" href="#projects">Projects</a>

        <div class="dropdown inline header-tabs 2pr-5">
  <button class="dropdown-toggle px4 header-button" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Contact
  </button>
  <div class="dropdown-menu pr5" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button"><a className= "social-links" href="https://github.com/OmerWaseem"><FontAwesomeIcon icon={faGithub} size="1x" /></a>    Github</button>
    <button class="dropdown-item" type="button"><a className= "social-links" href="mailto:omerwaseem15@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="1x" /></a>    Email</button>
    <button class="dropdown-item" type="button"><a className= "social-links" href="google.com"><FontAwesomeIcon icon={faLinkedinIn} size="1x" /></a>    LinkedIn</button>
  </div>
</div>
      </div>
    </nav>
  </div>
    
)