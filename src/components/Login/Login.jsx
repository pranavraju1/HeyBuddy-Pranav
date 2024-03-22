import { useNavigate } from "react-router-dom";
import "./login.scss";
import Button from "react-bootstrap/Button";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="login">
        <img src="twitter-logo.png" alt="" />
        <p className="loginto">Log in to Twitter</p>
        <div className="login-input-components">
          <input
            type="text"
            className="login-input"
            placeholder="Phone number, email address"
            name="loginId"
          />
          <input
            type="text"
            className="login-input"
            placeholder="Password"
            name="password"
          />
          <Button variant="primary">Login</Button>
        </div>
        <div className="login-links">
          <div className="login-link">Forgot password?</div>
          <div className="login-link" onClick={()=>navigate('./signup')}>Sign up to Twitter</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
