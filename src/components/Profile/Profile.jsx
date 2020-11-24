import React from 'react';
import PropTypes from 'prop-types';
import style from './Profile.module.css';


export default function Profile({ name, tag, location, avatar, stats}) {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt={name} className={style.avatar} />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>{tag}</p>
        <p className={style.location}>{location}</p>
      </div>
      <ul className={style.stats}>
        <li className={style.statsItem}>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{stats.followers}</span>
        </li>
        <li className={style.statsItem}>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{stats.views}</span>
        </li>
        <li className={style.statsItem}>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
}
Profile.defaultProps = {
    avatar: 'https://i.quotev.com/img/q/u/15/9/10/5859.jpg',
}
Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
}