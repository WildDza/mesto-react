import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <body className="root">
        <div className="page">
          <Header />
          <Main handleEditAvatarClick handleEditProfileClick handleAddPlaceClick />
          <Footer />
        </div>

        <template id="post-template">
          <article className="post">
            <img className="post__img" src="#" alt="" />
            <button className="post__delete" type="button" aria-label="Иконка удаления поста"></button>
            <div className="post__info">
              <h2 className="post__title" name=""></h2>
              <div className="post__like">
                <button className="post__like-icon" type="button" aria-label="Иконка лайка"></button>
                <span className="post__likes-counter"></span>
              </div>
            </div>
          </article>
        </template>

        <div className="popup popup_edit">
          <fieldset className="popup__content">
            <button className="popup__close-icon" type="button" aria-label="Иконка закрытия попапа"></button>
            <form className="popup__content-container popup__form popup__form-edit" name="profile-form" novalidate>
              <h2 className="popup__title">Редактировать профиль</h2>
              <input
                className="popup__input popup__input_name-area"
                type="text"
                name="name"
                id="userName-input"
                value=""
                placeholder="Ваше имя"
                minlength="2"
                maxlength="40"
                required
              />
              <span className="popup__input-error userName-input-error"></span>
              <input
                className="popup__input popup__input_type_about popup__input_addictions"
                type="text"
                name="about"
                id="userAddictions-input"
                value=""
                placeholder="Чем Вы занимаетесь?"
                minlength="2"
                maxlength="200"
                required
              />
              <span className="popup__input-error userAddictions-input-error"></span>
              <button className="popup__button-save popup__button-save_edit" type="submit">
                Сохранить
              </button>
            </form>
          </fieldset>
        </div>

        <div className="popup popup_add-post">
          <fieldset className="popup__content">
            <button className="popup__close-icon" type="button" aria-label="Иконка закрытия попапа"></button>
            <form className="popup__content-container popup__form popup__form-add-post" name="card-form">
              <h2 className="popup__title">Новое место</h2>
              <input
                className="popup__input popup__input_name-img"
                type="text"
                name="name"
                id="postName-input"
                value=""
                placeholder="Название"
                minlength="2"
                maxlength="30"
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
              <button className="popup__button-save popup__button-save_add-post" type="submit">
                Создать
              </button>
            </form>
          </fieldset>
        </div>

        <div className="popup popup_open-image">
          <div className="popup__post-container">
            <button className="popup__close-icon" type="button" aria-label="Иконка закрытия попапа"></button>
            <img className="popup__image" src="#" alt="" />
            <h2 className="popup__image-title"></h2>
          </div>
        </div>

        <div className="popup popup_confirm-delete-post">
          <fieldset className="popup__content">
            <button className="popup__close-icon" type="button" aria-label="Иконка закрытия попапа"></button>
            <div className="popup__content-container">
              <h2 className="popup__title">Вы уверены?</h2>
              <button className="popup__button-save">Да</button>
            </div>
          </fieldset>
        </div>

        <div className="popup popup_change-avatar">
          <fieldset className="popup__content">
            <button className="popup__close-icon" type="button" aria-label="Иконка закрытия попапа"></button>
            <form className="popup__content-container popup__form" name="change-avatar-form">
              <h2 className="popup__title">Обновить аватар</h2>
              <input
                className="popup__input popup__input_type_about popup__input_type_avatar popup__input_url-img"
                type="url"
                name="avatar"
                id="avatar-input"
                placeholder="Ссылка на аватар"
                required
              />
              <span className="popup__input-error avatar-input-error"></span>
              <button className="popup__button-save popup__button-save_avatar" type="submit">
                Сохранить
              </button>
            </form>
          </fieldset>
        </div>
      </body>
    </div>
  );
}

export default App;
