import React from "react";

import wallet from "../../img/Iconwalletlogo.png";
import coinbase from "../../img/Rectanglecoinbase.png";
import exodus from "../../img/Rectangleexodus.png";
import metamask from "../../img/Imagemetamask.png";
import rainbow from "../../img/Imagerainbow.png";

const LinkWallet = (props) => {
  function NextStep() {
    props.step(32);
  }

  function PrevStep() {
    props.step(3);
  }

  return (
    <div>
      <h2
        className="login-head"
        style={{
          color: "#9b619b",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span>
          <img src={wallet} />
        </span>
        Connect Wallet
      </h2>
      <div className="login-steps">
        <span className="completed"></span>
        <span className="completed"></span>
        <span className="selected"></span>
      </div>
      <div className="wallet">
        <span>
          <img src={exodus} />
          <p>Exodus</p>
        </span>
        <span>
          <img src={coinbase} />
          <p>Coinbase</p>
        </span>
        <span>
          <img src={rainbow} />
          <p>Rainbow</p>
        </span>
        <span>
          <img src={metamask} />
          <p>Metamask</p>
        </span>
      </div>
      <div className="login-btn">
        <button onClick={NextStep}>Connect</button>
        <button className="back" onClick={PrevStep}>
          Back
        </button>
      </div>
    </div>
  );
};

export default LinkWallet;
