import React, { useState, useEffect } from "react";
import {register} from '../../utils/Auth';
const url = process.env.REACT_APP_ROUTE_PREFIX || '';

function Register({history, ...props}) {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [serverError, setServerError] = useState("");

    const[formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
      if (name && email && password && !nameError && !emailError && !passwordError)  {
        setFormIsValid(true);
      } else {
        setFormIsValid(false);
      }
    }, [name, email, password, nameError, emailError, passwordError]);

    function onSubmit(e) {
        e.preventDefault();
        
        if (!formIsValid) {
          return;
        }
        
        register(name, email, password)
          .then((token) => {
            props.onSuccess(email, password);
          })
          .catch((error) => {
            if (error.code === 409) {
              setServerError("Пользователь с таким мейлом уже есть");
            } else {
              setServerError(error.message);
            }
          });
      }

      function handleNameChange(e) {
        setName(e.target.value);

        if (/^[a-zа-я -]+$/i.test(e.target.value)) {
          setNameError("");
        } else {
          setNameError("Имя не соответствует требованиям");
        }
      }
    
      function handleEmailChange(e) {
        setEmail(e.target.value);

        if(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(e.target.value)) {
          setEmailError("");
        } else {
          setEmailError("Мейл неверный");
        }
      }
    
      function handlePasswordChange(e) {
        setPassword(e.target.value);

        if(e.target.value) {
          setPasswordError("");
        } else {
          setPasswordError("Введите пароль");
        }
      }

  return (
    <main>
        <section className="register">
          <a className="register__logo-link" href={`${url}/`}>
            <div className="register__logo"></div>
          </a>
            <h2 className="register__title">Добро пожаловать!</h2>
            <form className="register__elems" onSubmit={onSubmit}>
                <div className="register__elem">
                    <span className="register__input-description">Name</span>
                    <input
                        value={name}
                        onChange={handleNameChange}
                        className={"register__input" + (nameError ? " register__input-error" : "")}
                        type="text"
                        id="register__input-name" 
                        name="name"
                        />
                    <span className="register__input-errorText">{nameError}</span>
                </div>
                <div className="register__elem">
                    <span className="register__input-description">E-mail</span>
                    <input
                        value={email}
                        onChange={handleEmailChange}
                        className={"register__input" + (emailError ? " register__input-error" : "")}
                        type="email"
                        id="register__input-email" 
                        name="email"
                        />
                    <span className="register__input-errorText">{emailError}</span>
                </div>
                <div className="register__elem">
                    <span className="register__input-description">Пароль</span>
                    <input
                        value={password}
                        onChange={handlePasswordChange}
                        className={"register__input" + (passwordError ? " register__input-error" : "")}
                        type="password"
                        id="register__input-password" 
                        name="password"
                        />
                    <span className="register__input-errorText">{passwordError}</span>
                </div>
                <span className="register__input-errorText">{serverError}</span>
                <div className="register__buttons">
                    <input className={"register__button register__button-edit " + (formIsValid ? "" : "register__button-unactive")} type="submit" value="Зарегистрироваться"></input>
                    <span className="register__login-text">Уже зарегистрированы?</span>
                    <a href="/signin" className="register__login-link">Войти</a>
                </div>

            </form>
    </section>
  </main>
  );
}

export default Register;