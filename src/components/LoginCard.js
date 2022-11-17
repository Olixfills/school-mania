import React, { useState } from "react";
import Styles from "./Comps.module.css";
import {setUser} from '../features/userSlice'

const LoginCard = ({users, navigate, dispatch}) => {
  const [errMsg, setErrMsg] = useState(false)
  

  const [formData, setFormData] = useState({
    email: "", // required
    password: "", // required
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    let auth;
    const {email, password} = formData
    auth = users.filter((user)=>{
    return user.email === email && user.password === password;
    })
    if (auth[0]){
      dispatch(setUser(auth))
      navigate('/student')
    } else {
      setErrMsg(true)
    }

    
  };

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <div className={Styles.loginCard} data-testid="login-card">
      <h4>Login</h4>
      <form onSubmit={e => handleSubmit(e)} >
        <div className={Styles.group}>
          <label htmlFor="user" className={Styles.label}>
            Email
          </label>
          <input
            id="user"
            type="email"
            placeholder="Email"
            className={Styles.input}
            value={formData.email}
            name="email"
            onChange={(e) => handleChange(e)}
            autoComplete="nope"
          />
        </div>
        <div className={Styles.group}>
          <label htmlFor="pass" className={Styles.label}>
            Password
          </label>
          <input
            id="pass"
            type="password"
            placeholder="Password"
            className={Styles.input}
            data-type="password"
            value={formData.password}
            name="password"
            onChange={(e) => handleChange(e)}
            autoComplete="new-password"
          />
        </div>
        <div className={Styles.group}>
          <input id="check" type="checkbox" className={Styles.check} />
          <label htmlFor="check">
            <span className={Styles.icon}></span> Keep me Signed in
          </label>
        </div>
        <div className={Styles.group}>
          <button type="submit" className={Styles.button}>
            Login
          </button>
        </div>
        <div>
          <a href="#forgot">Forgot Password?</a>
        </div>
      </form>
      {errMsg && <p style={{color: 'red', textAlign: 'center'}}>Something went wrong! please try again</p>}
    </div>
  );
};

export default LoginCard;
