import { useState } from "react";
import RegisterAccountForm from "../components/RegisterAccountForm";
import { useAuthentiation } from "../hooks/useAuthentication";
import "../styles/Login.css";
export default function Login() {
  const {login,errors} = useAuthentiation();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showNewUserForm, setShowNewUserForm] = useState(false);

  async function handleLogin() {
    setErrors(false);
    if (!username || !password) {
      setErrors(true);
      return;
    }
    // need to authenticate user before navigating to page
    // const data = await login(username, password);
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
        <RegisterAccountForm
          handleClose={onClickCreateAccountButton}
          setIsAuth={setIsAuth}
          handleLogin={handleLogin}
        />
      )}

<<<<<<< HEAD
      <h1>Welcome to Israel Tile Challenge!!!</h1>
      {errors && <p>One or more fields is missing</p>}
=======
      <h1>Welcome to Tile Game!!!!</h1>
      {errors && <p>invalid username or password</p>}
>>>>>>> authenticationContext
      <div className="login-container">
        <label>user name</label>
        <input
          type="email"
          placeholder="email"
          onChange={(event) => setUserName(event.target.value)}
        />
        <label>password</label>
        <input
          type="text"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={onClickCreateAccountButton}>Create Account</button>
      </div>
    </>
  );
}
