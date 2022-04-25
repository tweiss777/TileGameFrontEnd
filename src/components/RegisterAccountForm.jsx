import { useState } from "react";
import { useAuthentiation } from "../hooks/useAuthentication";
import "../styles/CreateAccount.css";

export default function RegisterAccountForm({ handleClose }) {
  const { createAccount } = useAuthentiation();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasErrors, setHasErrors] = useState(false);

  function closeForm() {
    handleClose();
  }

  function fieldOnChange(event) {
    switch (event.target.id) {
      case "email":
        setUsername(event.target.value);
        break;
      case "first-name":
        setFirstName(event.target.value);
        break;
      case "last-name":
        setLastName(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "confirm-password":
        setConfirmPassword(event.target.value);
        break;

      default:
        break;
    }
  }

  function handleCreateAccount() {
    setHasErrors(false);
    // any client side errors
    if (!userName || !firstName || !lastName || !password) {
      setHasErrors(true);
      return;
    }
<<<<<<< HEAD
    createAccount({
      email: userName,
      firstname: firstName,
      lastname: lastName,
      password: password,
      confirmPassword: confirmPassword,
    });
  }

  return (
    <>
      {hasErrors && <p>One or more fields is missing...</p>}
      <div className="form-background">
        <div className="form-container">
          <span className="close-icon" onClick={closeForm}>
            x
          </span>
          <label>Email</label>
          <input
            onChange={fieldOnChange}
            id="email"
            type="text"
            placeholder="email"
          />
          <label>First Name</label>
          <input
            onChange={fieldOnChange}
            id="first-name"
            type="text"
            placeholder="first name"
          />
          <label>Last Name</label>
          <input
            onChange={fieldOnChange}
            id="last-name"
            type="text"
            placeholder="last name"
          />
          <label>Password</label>
          <input
            onChange={fieldOnChange}
            id="password"
            type="password"
            placeholder="password"
          />

          <label>Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            placeholder="password"
            onChange={fieldOnChange}
          />

          <button className="submit-btn" onClick={handleCreateAccount}>
            Create Account
          </button>
        </div>
      </div>
    </>
  );
=======


    function handleCreateAccount(){
        setHasErrors(false)
        // any client side errors
        if(!userName || !firstName || !lastName || !password){
            setHasErrors(true)
            return
        }
        createAccount({email:userName,firstname:firstName,lastname:lastName,password:password,confirmPassword:confirmPassword})


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
                    
                    <label>Confirm Password</label>
                    <input id='confirm-password' type='password' placeholder='password' onChange={fieldOnChange} />

                    
                    <button className="submit-btn" onClick={handleCreateAccount}>Create Account</button>
                </div>


            </div>
        </>
    )



>>>>>>> 82c2fde7de87a5f979f7657f19657091ca3eb738
}
