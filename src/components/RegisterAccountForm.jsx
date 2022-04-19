import { useState } from "react";
import '../styles/CreateAccount.css';


export default function RegisterAccountForm({handleClose}){

    const [userName,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');

    const [hasErrors, setHasErrors] = useState(false);

    function closeForm(){
        handleClose();
    }

    function fieldOnChange(event){
        switch(event.target.id){
            case 'email':
                setUsername(event.target.value);
                break;
            case 'first-name':
                setFirstName(event.target.value);
                break;
            case 'last-name':
                setLastName(event.target.value);
                break;
            case 'password':
                setPassword(event.target.value);
                break;
            default:
                break;
        }   
    }


    function createAccount(){
        setHasErrors(false)
        // any client side errors
        if(!userName || !firstName || !lastName || !password){
            setHasErrors(true)
            return
        }


    }


    return(
        <>
            {hasErrors && <p>One or more fields is missing...</p>}
            <div className='form-background'>
                <div className="form-container">
                    <span className='close-icon' onClick={closeForm} >x</span>
                    <label>Email</label>
                    <input onChange={fieldOnChange} id='email' type='text' placeholder="email" />
                    <label>First Name</label>
                    <input onChange={fieldOnChange} id='first-name' type='text' placeholder="first name" />
                    <label>Last Name</label>
                    <input onChange={fieldOnChange} id='last-name' type='text' placeholder="last name" />
                    <label>Password</label>
                    <input onChange={fieldOnChange} id='password' type='password' placeholder="password" />
                    <button className="submit-btn" onClick={createAccount}>Create Account</button>
                </div>


            </div>
        </>
    )



}