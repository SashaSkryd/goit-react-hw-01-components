import React from 'react';
import PropTypes from 'prop-types';
import Style from './Profile.module.css';


export default function Profile({ name, tag, location, avatar, stats}) {
  return (
    <div className={Style.profile}>
      <div className={Style.description}>
        <img src={avatar} alt={name} className={Style.avatar} />
        <p className={Style.name}>{name}</p>
        <p className={Style.tag}>{tag}</p>
        <p className={Style.location}>{location}</p>
      </div>
      <ul className={Style.stats}>
        <li className={Style.statsItem}>
          <span className={Style.label}>Followers</span>
          <span className={Style.quantity}>{stats.followers}</span>
        </li>
        <li className={Style.statsItem}>
          <span className={Style.label}>Views</span>
          <span className={Style.quantity}>{stats.views}</span>
        </li>
        <li className={Style.statsItem}>
          <span className={Style.label}>Likes</span>
          <span className={Style.quantity}>{stats.likes}</span>
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