import "./register.css";
import { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (password.current.value !== confirmPassword.current.value) {
      password.current.setCustomValidity("Password Don't Match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">bond.</h3>
          <span className="loginDesc">Connecting Dots</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              type="email"
              className="loginInput"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              type="password"
              className="loginInput"
              minLength="8"
            />
            <input
              placeholder="Confirm Password"
              required
              ref={confirmPassword}
              type="password"
              className="loginInput"
              minLength="8"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <Link to={`/login`}>
              <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
