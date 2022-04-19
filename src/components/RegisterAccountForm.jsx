import { useState } from "react";
import '../styles/CreateAccount.css';


export default function RegisterAccountForm({handleClose}){

    const [userName,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');

    function closeForm(){
        handleClose();
    }


    return(
        <>
            <div className='form-background'>
                <div className="form-container">
                    <span className='close-icon' onClick={closeForm} >x</span>
                    <label>Email</label>
                    <input type='text' placeholder="email" />
                    <label>First Name</label>
                    <input type='text' placeholder="first name" />
                    <label>Last Name</label>
                    <input type='text' placeholder="last name" />
                    <label>Password</label>
                    <input type='password' placeholder="password" />
                </div>


            </div>
        </>
    )



}