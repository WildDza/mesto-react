import React, { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({ posts, ...props }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    api
      .getProfileInformation()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((error) => console.log("Ошибка... " + error));
  }, []);

  return (
    <main className="content">
      <section className="profile" aria-label="Профиль">
        <div className="profile__avatar-container">
          <div className="profile__avatar-icon" onClick={props.onEditAvatar}>
            <button className="profile__avatar-edit" type="button" aria-label="Иконка карандаша"></button>
          </div>
          <img className="profile__img" alt="Фото профиля" src={userAvatar} />
        </div>

        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button className="profile__edit-icon" type="button" aria-label="Иконка корректировка личных данных" onClick={props.onEditProfile}></button>
          <p className="profile__subtitle">{userDescription}</p>
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
