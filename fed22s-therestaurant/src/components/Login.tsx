import { FormEvent, useState } from "react";
import "../login.css";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [inputError, setInputError] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      if (username === "" || password === "") {
        setInputError(true);
      } else {
        await AuthService.login(username, password).then(() => {
          navigate("/admin");

          window.location.reload();
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapper">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Användarnamn:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Lösenord:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {inputError && (
            <p style={{ color: "yellow" }}>
              Du måste ange användarnamn och lösenord!
            </p>
          )}
          <button type="button" onClick={(e: FormEvent) => handleLogin(e)}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
