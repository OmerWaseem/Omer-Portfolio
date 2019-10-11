import React, { Component } from 'react';
import './PSM.css';
import PasswordStrengthMeter from './PSM';

class PSM_App extends Component{
  constructor(){
    super();
    this.state = {
      password: '',
    }
  }  

render(){
  const { password } = this.state;
  return(
    <div className="App">
      <div className="meter pt-3">
        <input className="input-field" width= "100%" height="auto" placeholder= " Enter password here " autoComplete="off" type="password" onChange={e => this.setState({ password: e.target.value })} />
      <PasswordStrengthMeter password={password} />
      </div>
    </div>
    );
  } 
}

export default PSM_App;
