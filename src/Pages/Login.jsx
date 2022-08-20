import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import loginServices from "../Services/loginCurrentUser";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleChange = (event) => {
    switch (event.target.name) {
      case "username":
        setUserName(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await loginServices.login({
        username,
        passwordHash: password,
      });
      if (user.token) {
        navigate("/notes", { state: { user } }, { replace: true });
      }
      setUserName("");
      setPassword("");
    } catch (error) {
      alert("You're not Authorized");
    }
  };

  return (
    <div className="container-login">
      <h1 className="title-Login">Login Api Notes</h1>
      <form className="form-Login" onSubmit={handleLoginSubmit}>
        <input
          className="input-login"
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <input
          className="input-login"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button className="btn-access">Access</button>
      </form>
    </div>
  );
}

export default Login;
