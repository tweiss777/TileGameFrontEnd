import { useState } from "react";
import "../styles/CreateAccount.css";
import { signUp } from "../services/server.js";


function RegisterAccountForm({ handleClose, setIsAuth, handleLogIn }) {
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

  async function createAccount() {
    setHasErrors(false);
    const data = await signUp(userName, firstName,password)
    console.log(data)
    setIsAuth(true);
    closeForm();
    handleLogIn();

    // any client side errors
    if (!userName || !firstName || !lastName || !password) {
      setHasErrors(true);
      return;
    }
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
            type="text"
            placeholder="password"
          />

          <label>Confirm Password</label>
          <input
            id="confirm-password"
            type="text"
            placeholder="password"
            onChange={fieldOnChange}
          />

          <button className="submit-btn" onClick={createAccount}>
            Create Account
          </button>
        </div>
      </div>
    </>
  );
}
export default RegisterAccountForm;
