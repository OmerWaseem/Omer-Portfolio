import React from 'react'
import HackmacIMG from './images/HackMac2020.jpg'
import ANZIMG from './images/ANZ-Virtual_Internship.png'
import UdemyIMG from './images/Udemy-Python_and_WebApp.png'
import THMAoCIMG from './images/THM_AoC2.png'
import EdxIMG from './images/Edx-Intro_to_CyberSec.png'
import THMWebIMG from './images/THM_WebFundamentals.png'
import THMPentestIMG from './images/THM-PenTest-Plus.png'
import THMOffSecIMG from './images/THM-OffensivePenTest.png'
import THMBeginnerIMG from './images/THM_BeginnerPath.png'



export const Achievments = () => (
  <section className="vh-80">
    
    <div datatype="section heading" style={{paddingTop:"15em;"}}><h1 ><a name="achievments"></a>Achievments</h1></div>
    
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
      </ol>
    <div class="carousel-inner">

    <div class="carousel-item centered-image active">
      <img class='carousel-images' src={THMWebIMG} alt="..."/>
      <div class="carousel-caption d-none d-md-block dark-background">
        <h3>Web Fundamentals Learning Path - TryHackMe</h3>
        <p>Received upon completion of the Web Fundamentals Learning Path which teaches us about how web apps work, learning how to use Industry Standard tools, various vulnerabilties in web applications and a section on practicals. </p>
      </div>
    </div>

    <div class="carousel-item centered-image">
      <img class='carousel-images' src={THMPentestIMG} alt="..."/>
      <div class="carousel-caption d-none d-md-block dark-background">
        <h3>CompTIA Pentest+ Learning Path - TryHackMe</h3>
        <p>Received upon completion of the CompTIA Pentest+ Learning Path which involved learning about Industry standard pentesting tools, indentifying and exploiting network services, exploiting webapps through common vulnerabilities, understanding windows active directory and attacking Kerberos and Post exploitation techniques (with Powerview, Bloodhound and Mimikatz)</p>
      </div>
    </div>

    <div class="carousel-item centered-image">
      <img class='carousel-images' src={THMOffSecIMG} alt="..."/>
      <div class="carousel-caption d-none d-md-block dark-background">
        <h3>Offensive Security Learning Path - TryHackMe</h3>
        <p>Received upon completion of the Offensive Security Learning Path which aims to make us ready for real world penetration testing by teaching us how to use industry standard tools along with a methodology to find vulnerabilities in machines </p>
      </div>
    </div>

    <div class="carousel-item centered-image">
      <img class='carousel-images' src={THMBeginnerIMG} alt="..."/>
      <div class="carousel-caption d-none d-md-block dark-background">
        <h3>Complete Beginner Learning Path - TryHackMe</h3>
        <p>Received upon completion of the Complete Beginner Learning Path which focuses on Linux basics, teaches web application security concepts through the OWASP Top 10, teaches essential tools like NMAP to enumerate infrastructure, using Python and Bash to carry out different tasks and Privilege Escalation </p>
      </div>
    </div>

    <div class="carousel-item centered-image">
      <img class='carousel-images' src={THMAoCIMG} alt="..."/>
      <div class="carousel-caption d-none d-md-block light-background">
        <h3>Advent of Cyber 2 - TryHackMe</h3>
        <p>Received upon completion of the 25 days of Cyber Security challenges in various categories like Web Exploitation, Networking, Scripting and Blue Teaming. </p>
      </div>
    </div>

    <div class="carousel-item centered-image">
      <img class='carousel-images' src={HackmacIMG} alt="..."/>
      <div class="carousel-caption d-none d-md-block light-background">
        <h3>HackMac 2020 - Macquarie University</h3>
        <p>My team member and I received ‘Best 3rd and 4th year team’ in the Hack Mac 2020 CTF competition hosted by Optus Macquarie University Cyber Security Hub. </p>
      </div>
    </div>
    
    <div class="carousel-item centered-image">
      <img class='carousel-images' src={ANZIMG} alt="..."/>
      <div class="carousel-caption d-none d-md-block dark-background">
        <h3>ANZ Virtual Internship</h3>
        <p>Received completion certification from ANZ at Forage (Formerly InsideSherpa)</p>
      </div>
    </div>

    <div class="carousel-item centered-image">
      <img class='carousel-images' src={UdemyIMG} alt="..."/>
      <div class="carousel-caption d-none d-md-block dark-background">
        <h3>Cyber Security - Python and Web Applications</h3>
        <p>Received completion certificate from Mahrur Hossain and Evgeny Rahman at Udemy.</p>
      </div>
    </div>

    <div class="carousel-item centered-image">
      <img class='carousel-images' src={EdxIMG} alt="..."/>
      <div class="carousel-caption d-none d-md-block dark-background">
        <h3>Introduction to Cyber Security</h3>
        <p>Received completion certificate from University of Washington at Edx.</p>
      </div>
    </div>


    {/*<div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div>*/}

    </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

  </section>
)