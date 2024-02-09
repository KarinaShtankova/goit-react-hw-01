import css from './Profile.module.css';

export const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.container}>
      <div>
        <img className={css.pic} src={image} alt="User avatar" />
        <p className={css.title}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.subtitle}>Followers</span>
          <span className={css.data}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.subtitle}>Views</span>
          <span className={css.data}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.subtitle}>Likes</span>
          <span className={css.data}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
