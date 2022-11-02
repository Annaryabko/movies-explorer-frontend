import React from "react";
import Header from "../Header/Header";

function Profile(props) {

  return (
    <section className="profile-page">
        <Header 
        navOpen = {props.navOpen}
        />
        <main>
            <section className="profile">
                <h2 class="profile__title">Hi Anna</h2>
                <form className="profile__elems">
                    <div className="profile__elem">
                        <span class="profile__input-description">Name</span>
                        <input 
                            class="profile__input"
                            type="text"
                            id="profile__input-name" 
                            name="name"
                            placeholder="Anna"
                            required
                            />
                        <span class="profile__input-error"></span>
                    </div>
                    <div className="profile__divider"></div>
                    <div className="profile__elem">
                        <span class="profile__input-description">Email</span>
                        <input 
                            class="profile__input"
                            type="text"
                            id="profile__input-email" 
                            name="email"
                            placeholder="anna@gmail.com"
                            required
                            />
                        <span class="profile__input-error"></span>
                    </div>
                    <input class="profile__button profile__button-edit" type="submit" value="Редактировать"></input>
                    <input class="profile__button profile__button-exit" type="submit" value="Выйти из аккаунта"></input>
                </form>
            </section>
        </main>
  </section>
  );
}

export default Profile;