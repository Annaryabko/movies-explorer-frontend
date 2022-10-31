import React from "react";

function Login() {

  return (
    <section className="login">
       <div className="register__logo"></div>
        <h2 class="register__title">Рады видеть!</h2>
        <form className="register__elems">
            <div className="register__elem">
                <span class="register__input-description">Name</span>
                <input 
                    class="register__input"
                    type="text"
                    id="register__input-name" 
                    name="name"
                    placeholder="Anna"
                    />
                <span class="register__input-errorText"></span>
            </div>
            <div className="register__elem">
                <span class="register__input-description">E-mail</span>
                <input 
                    class="register__input"
                    type="text"
                    id="register__input-email" 
                    name="email"
                    placeholder="anna@gmail.com"
                    />
                <span class="register__input-errorText"></span>
            </div>

            <div className="register__buttons">
                <input class="register__button register__button-edit" type="submit" value="Войти"></input>
                <span className="register__login-text">Ещё не зарегистрированы?</span>
                <a href="/signup" className="register__login-link">Регистрация</a>
            </div>
            
        </form>
  </section>
  );
}

export default Login;