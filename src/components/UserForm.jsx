import React, { useState } from 'react';

const UserForm = (props) => {
    const [ firstName, setfirstName ] = useState('');
    const [ lastName, setlastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setconfirmPassword ] = useState('');

    return (
        <div>
            <label htmlFor="firstName">First Name: </label>
            <input type="text" onChange={ (e) => setfirstName(e.target.value) } value={ firstName } />
            {
                (firstName.length < 2 && firstName.length != 0)  ? <p>First Name must be at least 2 characters</p> : ""
            }
            <br />

            <label htmlFor="lastName">Last Name: </label>
            <input type="text" onChange={ (e) => setlastName(e.target.value) } value={ lastName } />
            {
                (lastName.length < 2 && lastName.length != 0) ? <p>Last Name must be at least 2 characters</p> : ""
            }
            <br />

            <label htmlFor="email">Email: </label>
            <input type="text" onChange={ (e) => setEmail(e.target.value)} value={ email }  />
            {
                (email.length < 2 && email.length != 0) ? <p>Email must be at least 2 characters</p> : ""
            }
            <br />

            <label htmlFor="password">Password: </label>
            <input type="password" onChange={ (e) => setPassword(e.target.value) } value={ password }/>
            {
                (password.length < 8 && password.length != 0) ? <p>Password must be at least 8 characters</p> : ""
            }
            {
                (password != confirmPassword) ? <p>Passwords must match</p> : ""
            }
            <br />

            <label htmlFor="confirmPassword">Confirm Password: </label>
            <input type="password" onChange={ (e) => setconfirmPassword(e.target.value) } value={ confirmPassword }/>
            <br />

            <h2>Your Form Data:</h2>
            <p>First Name: { firstName }</p>
            <p>First Name: { lastName }</p>
            <p>First Name: { email }</p>
            <p>First Name: { password }</p>
            <p>First Name: { confirmPassword }</p>
        </div>
    )
} 

export default UserForm;