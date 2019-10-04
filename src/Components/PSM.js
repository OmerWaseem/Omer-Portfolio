import React, {Component} from "react";
import './PSM.css';
import zxcvbn from "zxcvbn";


class PSM extends Component {
    createPasswordLabel = (score) => {
        switch (score){
            case 0:
                return 'Very Weak';
            case 1:
                return 'Weak';
            case 2:
                return 'Fair';
            case 3:
                return 'Good';
            case 4:
                return 'Strong';
            default:
                return '';
        }
    }
    render() {
        const { password } = this.props;
        const {score} = zxcvbn(password);

        return(
            <div className='password-strength-meter'>
                <progress 
                    className={`password-strength-meter-progress strength-${this.createPasswordLabel(score)}`}
                    value = {score}
                    max="4"
                />
                <br />
                <label 
                    className="password-strength-meter-label"
                >
                {password && (
                    <>
                    <strong>Password Strength:</strong> {this.createPasswordLabel(score)}
                    </>
                )}
                </label>
            </div>        
        );
    }
}


export default PSM;