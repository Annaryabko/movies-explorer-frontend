import React from "react";

function Register() {

  return (
    <main>
        <section className="register">
        <div className="register__logo"></div>
            <h2 class="register__title">Добро пожаловать!</h2>
            <form className="register__elems">
                <div className="register__elem">
                    <span class="register__input-description">Name</span>
                    <input 
                        class="register__input"
                        type="text"
                        id="register__input-name" 
                        name="name"
                        placeholder="Anna"
                        required
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
                        required
                        />
                    <span class="register__input-errorText"></span>
                </div>
                <div className="register__elem">
                    <span class="register__input-description">Пароль</span>
                    <input 
                        class="register__input register__input-error"
                        type="password"
                        id="register__input-password" 
                        name="password"
                        placeholder="123"
                        required
                        />
                    <span class="register__input-errorText">Что-то пошло не так...</span>
                </div>

                <div className="register__buttons">
                    <input class="register__button register__button-edit" type="submit" value="Зарегистрироваться"></input>
                    <span className="register__login-text">Уже зарегистрированы?</span>
                    <a href="/signin" className="register__login-link">Войти</a>
                </div>

            </form>
    </section>
  </main>
  );
}

export default Register;