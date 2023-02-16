import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  // const post = props.card
  const currentUser = React.useContext(CurrentUserContext);
  const postLikeButtonClassName = `post__like-icon ${isLiked && "post__like-icon_active"}`;

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.owner._id === currentUser._id;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.likes.some((i) => i._id === currentUser._id);

  function handleClick() {
    props.onPostClick(props);
  }

  function handleLikeClick() {
    props.onPostLike(props);
  }

  function handleDeleteClick() {
    props.onPostDelete(props);
  }

  return (
    <div id="post-template">
      <article className="post" id={props.id}>
        <img className="post__img" src={props.link} alt={props.name} onClick={handleClick} />
        {isOwn && <button className="post__delete" onClick={handleDeleteClick} type="button" aria-label="Иконка удаления поста" />}
        <div className="post__info">
          <h2 className="post__title">{props.name}</h2>
          <div className="post__like">
            <button className={postLikeButtonClassName} onClick={handleLikeClick} type="button" aria-label="Иконка лайка"></button>
            <span className="post__likes-counter">{props.likes}</span>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Card;
