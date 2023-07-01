import React from "react";

const shieldlogo = "https://cdn-icons-png.flaticon.com/512/786/786245.png";
const eyeclose = "https://cdn-icons-png.flaticon.com/512/709/709612.png";

const LoginPassword = (props) => {
  function NextStep() {
    let passwd = document.getElementById("passwd").value;
    let cnfpasswd = document.getElementById("cnfpasswd").value;

    if (passwd === cnfpasswd && passwd.length > 7) {
      props.user((prev) => {
        return { ...prev, password: passwd };
      });

      props.step((prev) => prev + 1);
    }
  }

  function PrevStep() {
    props.step((prev) => prev - 1);
  }

  return (
    <div>
      <h2 className="login-head">
        Let’s <span className="bluetext">Secure </span>
        Your Account Now
      </h2>
      <div className="login-steps">
        <span className="completed"></span>
        <span className="selected"></span>
        <span className=""></span>
      </div>
      <div className="login-input">
        <div>
          <img src={shieldlogo} alt="user" />
          <input type="text" id="passwd" placeholder="Create Password" />
          <img src={eyeclose} alt="" />
        </div>
        <div>
          <img src={shieldlogo} alt="user" />
          <input type="text" id="cnfpasswd" placeholder="Confirm Password" />
          <img src={eyeclose} alt="" />
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

export default LoginPassword;
