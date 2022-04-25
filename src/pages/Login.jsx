import { useState } from "react";
import RegisterAccountForm from "../components/RegisterAccountForm";
import { useAuthentiation } from "../hooks/useAuthentication";
import "../styles/Login.css";
export default function Login() {
  const {login,errors} = useAuthentiation();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showNewUserForm, setShowNewUserForm] = useState(false);


  function onClickCreateAccountButton() {
    if (!showNewUserForm) {
      setShowNewUserForm(true);
    } else {
      setShowNewUserForm(false);
    }
  }


  function handleLogin(){
    login(username,password)
  }

  return (
    <>
      {showNewUserForm && (
        <RegisterAccountForm
          handleClose={onClickCreateAccountButton}
          setIsAuth={errors}
          handleLogin={login}
        />
      )}

      <h1>Welcome to Tile Game!!!!</h1>
      {errors && <p>invalid username or password</p>}
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
        <button onClick={handleLogin}>Login</button>
        <button onClick={onClickCreateAccountButton}>Create Account</button>
      </div>
    </>
  );
}
