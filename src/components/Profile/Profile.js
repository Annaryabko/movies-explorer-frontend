import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router";
import Header from "../Header/Header";
import { api } from "../../utils/MainApi";
import { logout } from "../../utils/Auth";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


function Profile({history, ...props}) {
    const user = useContext(CurrentUserContext);
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [serverError, setServerError] = useState("");
    const[formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
      setName(user.name);
      setEmail(user.email);
    }, [user]);

    useEffect(() => {
      if (name && email && !nameError && !emailError && (name !== user.name || email !== user.email))  {
        setFormIsValid(true);
      } else {
        setFormIsValid(false);
      }
    }, [name, email, nameError, emailError, user]);

    function onSubmit(e) {
        e.preventDefault();

        if (!formIsValid) {
          return;
        }
        
        api.editUser({name, email})
          .then((token) => {
            props.onSuccess();
          })
          .catch((error) => {
            setServerError(error.message);
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

      function logOut() {
        logout()
        .then(() => {
          props.onLogout();
        })
        .catch((error) => {
          props.onError(error.message);
        });
      }

  return (
    <section className="profile-page">
        <Header 
        navOpen = {props.navOpen}
        />
        <main>
            <section className="profile">
                <h2 className="profile__title">Hi, {name}</h2>
                <form className="profile__elems" onSubmit={onSubmit}>
                    <div className="profile__elem">
                        <span className="profile__input-description">Name</span>
                        <input
                            value={name || ""}
                            onChange={handleNameChange}
                            className={"profile__input" + (nameError ? " profile__input-error" : "")}
                            type="text"
                            id="profile__input-name" 
                            name="name"
                            required
                            />
                    </div>
                    <span className="profile__input-errorText">{nameError}</span>
                    <div className="profile__divider"></div>
                    <div className="profile__elem">
                        <span className="profile__input-description">Email</span>
                        <input 
                            value={email || ""}
                            onChange={handleEmailChange}
                            className={"profile__input" + (emailError ? " profile__input-error" : "")}
                            type="email"
                            id="profile__input-email" 
                            name="email"
                            required
                            />
                    </div>
                    <span className="profile__input-errorText">{emailError}</span>
                    <span className="profile__input-errorText">{serverError}</span>
                    <input className={"profile__button profile__button-edit " + (formIsValid ? "" : "profile__button-unactive")} type="submit" value="Редактировать"></input>
                    <input className="profile__button profile__button-exit" type="submit" value="Выйти из аккаунта" onClick={logOut}></input>
                </form>
            </section>
        </main>
  </section>
  );
}

export default withRouter(Profile);