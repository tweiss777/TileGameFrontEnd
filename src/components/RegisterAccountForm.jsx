import { useState } from "react";

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
                    <span onClick={closeForm} >x</span>
                    <input type='text' placeholder="email" />
                    <input type='text' placeholder="first name" />
                    <input type='text' placeholder="last name" />
                    <input type='password' placeholder="password" />
                </div>


            </div>
        </>
    )



}