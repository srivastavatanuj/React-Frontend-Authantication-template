import React from "react";
import { useState } from "react";
import OtpInput from "react18-input-otp";

const VerifyEmail = (props) => {
  const [code, setCode] = useState("");

  function handleCode(otp) {
    setCode(otp);
  }
  function PrevStep() {
    props.step(3);
  }
  console.log(code);
  return (
    <div>
      <h2 className="login-head">Verify Your Email Address</h2>
      <div className="login-steps">
        <span className="completed"></span>
        <span className="completed"></span>
        <span className="selected"></span>
      </div>
      <div className="login-verify">
        <OtpInput
          numInputs={4}
          onChange={handleCode}
          value={code}
          separator={<span style={{ width: "30px" }}></span>}
          isInputNum={true}
          shouldAutoFocus={true}
          placeholder="----"
          inputStyle={{
            border: "1px solid #9b619b",
            borderRadius: "5px",
            fontSize: "15px",
            padding: "15px 20px",
          }}
        />
        <p>Enter the Code Sent on your Email</p>
      </div>
      <div className="login-btn">
        <button>Next</button>
        <button className="back" onClick={PrevStep}>
          Back
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
