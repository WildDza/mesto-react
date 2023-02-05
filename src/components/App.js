import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import PopupWithImage from "./PopupWithImage";
import api from "../utils/Api";
import "../index.css";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.log("Ошибка... " + error));
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handlePostClick(data) {
    setIsImagePopupOpen(!selectedPost);
    setSelectedPost(data);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedPost(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onPostClick={handlePostClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        posts={posts}
      />
      <Footer />

      <PopupWithForm name="edit" title="Редактировать профиль" buttonSave="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input
          className="popup__input popup__input_name-area"
          type="text"
          name="name"
          id="userName-input"
          placeholder="Ваше имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__input-error userName-input-error"></span>
        <input
          className="popup__input popup__input_type_about popup__input_addictions"
          type="text"
          name="about"
          id="userAddictions-input"
          placeholder="Чем Вы занимаетесь?"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__input-error userAddictions-input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="add" title="Новое место" buttonSave="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input
          className="popup__input popup__input_name-img"
          type="text"
          name="name"
          id="postName-input"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__input-error postName-input-error"></span>
        <input
          className="popup__input popup__input_type_about popup__input_url-img"
          type="url"
          name="link"
          id="link-input"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error link-input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="avatar" title="Обновить аватар" buttonSave="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input
          className="popup__input popup__input_type_about popup__input_type_avatar popup__input_url-img"
          type="url"
          name="avatar"
          id="avatar-input"
          placeholder="Ссылка на аватар"
          required
        />
        <span className="popup__input-error avatar-input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="delete" title="Вы уверены?" buttonSave="Да" onClose={closeAllPopups} />

      <PopupWithImage post={selectedPost} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
