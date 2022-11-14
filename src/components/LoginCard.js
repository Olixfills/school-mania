import React from "react";

import Styles from "./Comps.module.css";

const LoginCard = ({onSubmit}) => {


  return (
    <div className={Styles.loginCard}>
      <form onSubmit={onSubmit} >
        <div className={Styles.group}>
          <label for="user" className={Styles.label}>
            Username
          </label>
          <input id="user" type="text" className={Styles.input} autocomplete="off"/>
        </div>
        <div className={Styles.group}>
          <label for="pass" className={Styles.label}>
            Password
          </label>
          <input
            id="pass"
            type="password"
            className={Styles.input}
            data-type="password"
            autocomplete="off"
          />
        </div>
        <div className={Styles.group}>
          <input id="check" type="checkbox" className={Styles.check} autocomplete="off" />
          <label for="check">
            <span className={Styles.icon}></span> Keep me Signed in
          </label>
        </div>
        <div className={Styles.group}>
          <button type="submit" className={Styles.button}  >
            Login
          </button>
        </div>
        <div>
          <a href="#forgot">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
