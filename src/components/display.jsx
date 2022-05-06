import React, { useState } from  'react';


const Display = (props) => {
    
    return(
        <div>
            <h4>Your Form Data</h4>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Email Address: {props.email}</p>
            <p>Password: {props.password}</p>
            <p>Confirm Password: {props.confirmPassword}</p>
        </div>
    );
}
    export default Display;