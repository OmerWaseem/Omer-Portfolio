import React from 'react';

export const WorkExperience = () => (
  <section className="vh-80">
    <div><a name="experience" datatype="section heading"><h1>Work Experience</h1></a></div>
    <div className="experience-buttons">
      <p>
        <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Intership at SALAMA (Insurance)
        </a>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body" style={{background:"rgb(41, 40, 40)"}}>
          <ul className="list-text">
          <li>Dealing with any inquiries from TPA(Third Party Administrator) about client's medical claim</li>
          <li>Filing Claim Documents</li> 
          <li>Handling Claim Cheques</li> 
          <li>Ensuring Claim Documents are sent to appropriate Processing team</li> 
          <li>Tracking and Updating Claims</li> 
          <li>Notifying TPAs of their client's claim status</li> 
          </ul>
          
        </div>
      </div>
    </div>
    
  </section>
)