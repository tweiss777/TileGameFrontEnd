import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterAccountForm from "../components/RegisterAccountForm";
import "../styles/Login.css";
export default function Login({ setIsAuth }) {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [showNewUserForm, setShowNewUserForm] = useState(false);

  function handleLogin() {
    setErrors(false);
    if (!username || !password) {
      setErrors(true);
      return;
    }
    // need to authenticate user before navigating to page
    setIsAuth(true);
    navigate("/home");
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

      <h1>Welcome to Israel Tile Challenge!!!</h1>
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
        <button onClick={handleLogin}>Login</button>
        <button onClick={onClickCreateAccountButton}>Create Account</button>
      </div>
    </>
  );
}
