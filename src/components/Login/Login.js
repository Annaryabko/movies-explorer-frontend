import React, { useState, useEffect } from "react";
import {login} from '../../utils/Auth';
const url = process.env.REACT_APP_ROUTE_PREFIX || '';

function Login({history, ...props}) {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [serverError, setServerError] = useState("");

    const[formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
      if (email && password && !emailError && !passwordError)  {
        setFormIsValid(true);
      } else {
        setFormIsValid(false);
      }
    }, [email, password, emailError, passwordError]);

    function onSubmit(e) {
        e.preventDefault();

        if (!formIsValid) {
          return;
        }
        
        login(email, password)
          .then((token) => {
            props.onSuccess('test');
          })
          .catch((error) => {
            setServerError(error.message);
            props.onError();
          });
      }
    
      function handleLoginChange(e) {
        setEmail(e.target.value);

        if(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(e.target.value)) {
          setEmailError("");
        } else {
          setEmailError("Email is unvalid");
        }
      }
    
      function handlePasswordChange(e) {
        setPassword(e.target.value);

        if(e.target.value) {
          setPasswordError("");
        } else {
          setPasswordError("Enter password");
        }
      }

  return (
    <main>
        <section className="login">
        <a className="register__logo-link" href={`${url}/`}>
            <div className="register__logo"></div>
          </a>
            <h2 className="register__title">Welcome!</h2>
            <form className="register__elems" name="login" onSubmit={onSubmit}>
                <div className="register__elem">
                    <span className="register__input-description">E-mail</span>
                    <input
                        value={email}
                        onChange={handleLoginChange}
                        className={"register__input" + (emailError ? " register__input-error" : "")}
                        type="email"
                        id="register__input-email" 
                        name="email"
                        required
                        />
                    <span className="register__input-errorText">{emailError}</span>
                </div>
                <div className="register__elem">
                    <span className="register__input-description">Password</span>
                    <input
                        value={password}
                        onChange={handlePasswordChange}
                        className={"register__input" + (passwordError ? " register__input-error" : "")}
                        type="password"
                        id="register__input-password" 
                        name="password"
                        required
                        />
                    <span className="register__input-errorText">{passwordError}</span>
                </div>
                <span className="register__input-errorText">{serverError}</span>

                <div className="register__buttons">
                    <input className={"register__button register__button-edit " + (formIsValid ? "" : "register__button-unactive")} type="submit" value="Enter"></input>
                    <span className="register__login-text">Not registered yet?</span>
                    <a href="/signup" className="register__login-link">Registration</a>
                </div>
                
            </form>
    </section>
  </main>
  );
}

export default Login;