function handleEditAvatarClick() {
  document.querySelector(".popup_change-avatar").classList.add("popup_show");
  console.log(document.querySelector(".popup_change-avatar"));
}
function handleEditProfileClick() {
  document.querySelector(".popup_edit").classList.add("popup_show");
  console.log(document.querySelector(".popup_edit"));
}
function handleAddPlaceClick() {
  document.querySelector(".popup_add-post").classList.add("popup_show");
  console.log(document.querySelector(".popup_add-post"));
}

function Main() {
  return (
    <main className="content">
      <section className="profile" aria-label="Профиль">
        <div className="profile__avatar-container">
          <div className="profile__avatar-icon">
            <button className="profile__avatar-edit" type="button" aria-label="Иконка карандаша" onClick={handleEditAvatarClick}></button>
          </div>
          <img className="profile__img" alt="Фото профиля" />
        </div>

        <div className="profile__info">
          <h1 className="profile__title"></h1>
          <button
            className="profile__edit-icon"
            type="button"
            aria-label="Иконка корректировка личных данных"
            onClick={handleEditProfileClick}
          ></button>
          <p className="profile__subtitle"></p>
        </div>
        <button className="profile__add-button" type="button" aria-label="Иконка добавления поста" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="posts" aria-label="Посты"></section>
    </main>
  );
}
export default Main;
