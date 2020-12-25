import React from 'react'
import HackmacIMG from './HackMac2020.jpg'
import ANZIMG from './ANZ-Virtual_Internship.png'
import UdemyIMG from './Udemy-Python_and_WebApp.png'
import THMIMG from './THM_AoC2.png'
import EdxIMG from './Edx-Intro_to_CyberSec.png'



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
      </ol>
    <div class="carousel-inner">

    <div class="carousel-item centered-image active">
      <img class='carousel-images' src={THMIMG} alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h3>Advent of Cyber 2 - TryHackMe</h3>
        <p>Received upon completion of the 25 days of Cyber Security challenges in various categories like Web Exploitation, Networking, Scripting and Blue Teaming. </p>
      </div>
    </div>

    <div class="carousel-item centered-image">
      <img class='carousel-images' src={HackmacIMG} alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h3>HackMac 2020 - Macquarie University</h3>
        <p>My team member and I received ‘Best 3rd and 4th year team’ in the Hack Mac 2020 CTF competition hosted by Optus Macquarie University Cyber Security Hub. </p>
      </div>
    </div>
    
    <div class="carousel-item centered-image">
      <img class='carousel-images' src={ANZIMG} alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h3>ANZ Virtual Internship</h3>
        <p>Received completion certification from ANZ at Forage (Formerly InsideSherpa)</p>
      </div>
    </div>

    <div class="carousel-item centered-image">
      <img class='carousel-images' src={UdemyIMG} alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h3>Cyber Security - Python and Web Applications</h3>
        <p>Received completion certificate from Mahrur Hossain and Evgeny Rahman at Udemy.</p>
      </div>
    </div>

    <div class="carousel-item centered-image">
      <img class='carousel-images' src={EdxIMG} alt="..."/>
      <div class="carousel-caption d-none d-md-block">
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