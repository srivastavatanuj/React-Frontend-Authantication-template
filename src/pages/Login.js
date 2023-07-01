import React, { useState } from "react";

import LoginConnect from "../component/login/LoginConnect";
import LoginUser from "../component/login/LoginUser";
import LoginPassword from "../component/login/LoginPassword";
import LinkEmail from "../component/login/LinkEmail";
import VerifyEmail from "../component/login/EmailVerify";
import LinkWallet from "../component/login/LinkWallet";

import logo from "../img/logo.png";

const Login = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    user: "",
    password: "",
    email: "",
    wallet: "",
    address: "",
  });

  function HandlePage() {
    switch (step) {
      case 1:
        return <LoginUser user={setData} step={setStep} />;
      case 2:
        return <LoginPassword user={setData} step={setStep} />;
      case 3:
        return <LoginConnect data={data} user={setData} step={setStep} />;
      case 41:
        return <LinkEmail user={setData} step={setStep} />;
      case 42:
        return <VerifyEmail user={setData} step={setStep} />;
      case 51:
        return <LinkWallet user={setData} step={setStep} />;
    }
  }

  console.log(data);

  return (
    <div className="login">
      <div className="header">
        <img src={logo} alt="logo" />
      </div>
      <div className="login-screen">
        <h2>Create Your Account</h2>
        <div className="login-container">
          {HandlePage()}
          {/* <LoginUser user={setData} /> */}
          {/* <LoginPassword /> */}
          {/* <LoginConnect /> */}
          {/* <LinkEmail /> */}
          {/* <VerifyEmail /> */}
          {/* <LinkWallet /> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
