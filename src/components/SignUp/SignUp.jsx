import "./signup.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CreateAccount from "../CreateAccount/CreateAccount";
import { Button } from "react-bootstrap";

const SignUp = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <div className="signup-container">
      <Modal
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>
          <CreateAccount />
        </Modal.Body>
      </Modal>

      <div className="poster">
        {!imageLoaded && <h1>Loading...</h1>}
        <img
          src="poster1.png"
          onLoad={handleImageLoad}
          style={{ display: imageLoaded ? "block" : "none" }}
        />
      </div>
      <div className="signup">
        <img className="twitter-logo" src="twitter-logo.png" alt="" />
        <p className="happening">Happening now</p>
        <p className="join">Join Twitter today</p>
        <div className="signup-components">
          <Button variant="light" className="signup-component">
            <div style={{ display: "flex", gap: "5px" }}>
              <div>
                <img src="logo-google.png" alt="" />
              </div>
              <div className="signup-component-text">Sign up with Google</div>
            </div>
          </Button>
          <Button variant="light" className="signup-component">
            <div style={{ display: "flex", gap: "5px" }}>
              <div>
                <img src="logo-apple1.png" alt="" />
              </div>
              <div className="signup-component-text">Sign up with Apple</div>
            </div>
          </Button>
          <Button
            variant="light"
            className="signup-component"
            onClick={() => setShow(true)}
          >
            <div style={{ display: "flex", gap: "5px" }}>
              <div className="signup-component-text">
                Sign up with phone or email
              </div>
            </div>
          </Button>
          <div className="cookie">
            <p>
              By singing up you agree to the <span>Terms of Service</span> and{" "}
              <span>Privacy Policy</span>, including <span>Cookie Use</span>.
            </p>
          </div>
          <div className="have-an-account">
            Already have an account?{" "}
            <span onClick={() => navigate("/")}>Log in</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
