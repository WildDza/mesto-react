import React, { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ posts, ...props }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile" aria-label="Профиль">
        <div className="profile__avatar-container">
          <div className="profile__avatar-icon" onClick={props.onEditAvatar}>
            <button className="profile__avatar-edit" type="button" aria-label="Иконка карандаша"></button>
          </div>
          <img className="profile__img" alt="Фото профиля" src={currentUser.avatar} />
        </div>

        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button className="profile__edit-icon" type="button" aria-label="Иконка корректировка личных данных" onClick={props.onEditProfile}></button>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="Иконка добавления поста" onClick={props.onAddPlace}></button>
      </section>

      <section className="posts" aria-label="Посты">
        {posts.map((post) => (
          <Card key={post._id} id={post._id} name={post.name} link={post.link} likes={post.likes.length} onPostClick={props.onPostClick} />
        ))}
      </section>
    </main>
  );
}
export default Main;
