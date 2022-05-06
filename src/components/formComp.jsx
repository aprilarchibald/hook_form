import React, { useState } from  'react';
import Display from './display';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const [confirmPasswordError, setConfirmPasswordError] = useState(""); 
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    const validateFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First name is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First Name must be 2 characters or longer!");
        }else {
            setFirstNameError("")
        }
    };

    const validateLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last name is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be 2 characters or longer!");
        }else {
            setLastNameError("")
        }
    };

    const validateEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        }else {
            setEmailError("")
        }
    };

    const validatePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        }else {
            setPasswordError("")
        }
    };

    const validateConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1) {
            setConfirmPasswordError("Confirm Password field is required!");
        } else if(e.target.value.length < 8) {
            setConfirmPasswordError("Confirm Password must be 8 characters or longer!");
        }else {
            setConfirmPasswordError("")
        }
        if(e.target.value !== password){
            setConfirmPasswordError("Passwords must match!")
        }else {
            setConfirmPasswordError("")
        }
    };
    

    
    return(
        <div>
            <form onSubmit={ createUser }>
                {
                    hasBeenSubmitted ? 
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3> 
                }
                <div>
                    <label>First Name: </label> 
                    <input onChange={ validateFirstName } />
                    {firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> : ''}
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input onChange={ validateLastName } />
                    {lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> : ''}
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input onChange={ validateEmail } />
                    {emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> : ''}
                </div>
                <div>
                    <label>Password: </label>
                    <input onChange={ validatePassword } />
                    {passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> : ''}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input onChange={ validateConfirmPassword } />
                    {confirmPasswordError ?
                    <p style={{color:'red'}}>{ confirmPasswordError }</p> : ''}
                </div>
                <input type="submit" value="Create User" />
            </form>
            <Display firstName= {firstName} lastName= {lastName} email ={email} password={password} confirmPassword ={confirmPassword} />
            </div>
    );
};
    
export default UserForm;