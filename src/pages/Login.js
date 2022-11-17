import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Styles from "./Pages.module.css";
import LoginCard from "../components/LoginCard";
import useWindowSize from "../hooks/useWindowSize";
import image from "../assets/login-img.svg";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [users, setUsers] = useState([])
  const { width } = useWindowSize();
  const mobile = width <= 768;


useEffect(()=>{
  fetch("http://localhost:3008/users").then(res => res.json()).then(result => setUsers(result)).catch(console.log);
}, [])





  return (
    <main className={Styles.container} data-testid="login-test">
      <div className={Styles.loginCont}>
        {!mobile && (
          <div className={Styles.welcomeDiv}>
            <div className={Styles.welcome_img}>
              <h3 className={Styles.welcomeBackHeader}>
                Manage your Studies
                <br />
                <span className={Styles.span}>with ease</span>
              </h3>

              <img src={image} alt="students" className={Styles.img__} />
            </div>
          </div>
        )}
        <div
          className={`${Styles.loginDiv} ${mobile && Styles.loginDivMobile}`}
        >
          {mobile && (
            <h3 className={Styles.welcomeBackHeader} style={{marginBottom: '0', fontSize: '1.5rem'}}>
              Manage your Studies
              <br />
              <span className={Styles.span}>with ease</span>
            </h3>
          )}
          <LoginCard users={users} dispatch={dispatch} navigate={navigate} />
          {mobile && (
            <img src={image} alt="students" className={Styles.img__} />
          )}
        </div>
      </div>
    </main>
  );
};

export default Login;
