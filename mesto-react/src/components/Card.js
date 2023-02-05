function Card(props) {
  function handleClick() {
    props.onPostClick(props);
  }
  return (
    <div id="post-template">
      <article className="post" id={props.id}>
        <img className="post__img" src={props.link} alt={props.name} onClick={handleClick} />
        <button className="post__delete" type="button" aria-label="Иконка удаления поста"></button>
        <div className="post__info">
          <h2 className="post__title">{props.name}</h2>
          <div className="post__like">
            <button className="post__like-icon" type="button" aria-label="Иконка лайка"></button>
            <span className="post__likes-counter">{props.likes}</span>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Card;
