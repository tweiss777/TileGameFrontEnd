import { useState } from "react";
import RegisterAccountForm from "../components/RegisterAccountForm";
import { useAuthentiation } from "../hooks/useAuthentication";
import "../styles/Login.css";
export default function Login() {
  const {login,errors} = useAuthentiation();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showNewUserForm, setShowNewUserForm] = useState(false);

  function handleLogin() {
    
    login(username,password)
  }

  function onClickCreateAccountButton() {
    if (!showNewUserForm) {
      setShowNewUserForm(true);
    } else {
      setShowNewUserForm(false);
    }
  }

  return (
    <>
      {showNewUserForm && (
        <RegisterAccountForm handleClose={onClickCreateAccountButton} />
      )}

      <h1>Welcome to Tile Game!!!!</h1>
      {errors && <p>One or more fields is missing</p>}
      <div className="login-container">
        <label>user name</label>
        <input
          type="email"
          placeholder="email"
          onChange={(event) => setUserName(event.target.value)}
        />
        <label>password</label>
        <input
          type="password"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="but loginBut" onClick={handleLogin}>
          Login
        </button>
        <button className="but accountBut" onClick={onClickCreateAccountButton}>
          Create Account
        </button>
      </div>
    </>
  );
}
