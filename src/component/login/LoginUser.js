import React from "react";

import userlogo from "../../img/Iconuser.png";

const LoginUser = (props) => {
  function NextStep() {
    let user = document.getElementById("user").value;

    if (user != "") {
      props.user((prev) => {
        return { ...prev, user: user };
      });

      props.step((prev) => prev + 1);
    }
  }

  return (
    <div>
      <h2 className="login-head">
        First, Let’s Create{" "}
        <span className="bluetext">Your Unique Identity</span>
      </h2>
      <div className="login-steps">
        <span className="selected"></span>
        <span className=""></span>
        <span className=""></span>
      </div>
      <div className="login-input">
        <div>
          <img src={userlogo} alt="user" />
          <input
            type="text"
            id="user"
            placeholder="Enter Your Unique Username"
          />
        </div>
      </div>
      <div className="login-btn">
        <button onClick={NextStep}>Next</button>
      </div>
    </div>
  );
};

export default LoginUser;
