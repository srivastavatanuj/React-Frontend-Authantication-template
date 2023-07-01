import React from "react";

import email from "../../img/Iconemail.png";
import VerifyEmail from "./EmailVerify";

const LinkEmail = (props) => {
  function NextStep() {
    props.step(42);
  }

  function PrevStep() {
    props.step(3);
  }

  return (
    <div>
      <h2 className="login-head">Let’s Link Your Email Address</h2>
      <div className="login-steps">
        <span className="completed"></span>
        <span className="completed"></span>
        <span className="selected"></span>
      </div>
      <div className="login-input">
        <div>
          <img src={email} alt="user" />
          <input type="text" placeholder="Enter Your Email Address" />
        </div>
      </div>
      <div className="login-btn">
        <button onClick={NextStep}>Next</button>
        <button className="back" onClick={PrevStep}>
          Back
        </button>
      </div>
    </div>
  );
};

export default LinkEmail;
