import React, {Component} from "react"

class PassGen_App extends Component{
	constructor(props) {
		super(props);
		this.genPass = this.genPass.bind(this);
		this.copyFnc = this.copyFnc.bind(this);
		this.state = {
			numChars: 8,
			generatedPass: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.numInput = React.createRef();

	  }

	handleChange = (number) => {
		if(number >= 8 && number <= 100) {
			this.setState({
				numChars: number
			})
		}
		else{
			this.setState({
				numChars: 8
			})
		}
	}
	

	genPass = () => {
		let numCharsInput = this.numInput.current.value;
		this.handleChange(numCharsInput);
		var pass = '';
		var validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*-_+";
		var passwordLength = this.state.numChars;
		for (let i = 0; i < passwordLength; i++){
		  pass += validChars.charAt(Math.floor(Math.random()*validChars.length)) ;
		}
  
		this.setState({
			generatedPass: pass

		})
	  }
  
	copyFnc = () => {
		var copyPass = document.getElementById("myNewPassword")
		copyPass.select();
		document.execCommand("copy");
		alert("Copied the text: " + copyPass.value);
	  }


	render(){
		return(
	<div className="container">
		<div className="row">
			<p>Please enter the length of password that you require below. (The longer the password, the stronger it is but more difficult to remember.)</p>
			<input className="input-field" id="myNumber" placeholder=" password length here" ref={this.numInput} />
			<button className="buttons" id="btn" onClick={this.genPass}  >Generate New Password!</button>
			<input className="input-field pt-2 pr-2 mt-2" id="myNewPassword" readOnly value={this.state.generatedPass} />
			<button className="buttons" id="Copybtn" onClick={this.copyFnc} >Copy Password</button>
		</div>
	</div>
		)
	}


}

export default PassGen_App;