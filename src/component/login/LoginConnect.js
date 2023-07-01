import React from "react";

import emaillogo from "../../img/Iconemaillogo.png";
import walletlogo from "../../img/Iconwalletlogo.png";

const LoginConnect = (props) => {
  function FinalStep() {
    console.log(props.data);
  }

  function PrevStep() {
    props.step((prev) => prev - 1);
  }

  function EmailConnect() {
    props.step(41);
  }

  function walletConnect() {
    props.step(51);
  }

  return (
    <div>
      <h2 className="login-head">These are Optional Steps</h2>
      <div className="login-steps">
        <span className="completed"></span>
        <span className="completed"></span>
        <span className="selected"></span>
      </div>
      <div className="login-connect">
        <div onClick={EmailConnect}>
          <img src={emaillogo} />
          <h3>Link Your Email Account</h3>
          <label>Helps in Signing In Incase you forgot your Password</label>
        </div>

        <div onClick={walletConnect}>
          <img src={walletlogo} />
          <h3>Connect Wallet</h3>
          <label>
            To Purchase Your Account will only be verified after you Link your
            Wallet
          </label>
        </div>
      </div>
      <div className="login-btn">
        <button onClick={FinalStep}>Next</button>
        <button className="back" onClick={PrevStep}>
          Back
        </button>
      </div>
    </div>
  );
};

export default LoginConnect;
