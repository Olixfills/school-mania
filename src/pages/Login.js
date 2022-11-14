import React from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./Pages.module.css";
import LoginCard from "../components/LoginCard";
import useWindowSize from "../hooks/useWindowSize";

const Login = () => {
  const navigate = useNavigate()
  const { width } = useWindowSize();
  const mobile = width <= 768;

  const onSubmit = (e) => {
    e.preventDefault()
    navigate('/student')
  } 



  return (
    <main className={Styles.container}>
      <div className={Styles.loginCont}>
        {!mobile && (
          <div className={Styles.welcomeDiv}>
            <h3 className={Styles.welcomeBackHeader}>Welcome Back!</h3>
            <h5>Login to your student account</h5>
          </div>
        )}
        <div className={`${Styles.loginDiv} ${mobile && Styles.loginDivMobile}`}>
          {mobile && <h3 className={Styles.welcomeBackHeader} style={{marginBottom: '10px'}}>Welcome Back!</h3>}
          <LoginCard onSubmit={onSubmit} />
        </div>
      </div>
    </main>
  );
};

export default Login;
