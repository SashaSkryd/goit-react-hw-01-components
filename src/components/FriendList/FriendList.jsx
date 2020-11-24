import React from 'react';
import PropTypes from 'prop-types';
import style from './Friends.module.css';
import FriendListItem from './FriendListItem.jsx';

export default function FriendList({ friends }) {
    return (
        <section className={style.friends}>
            <ul className={style.friendList}>
            <FriendListItem friends={friends}/>
            </ul>
        </section>
    )
}

FriendList.propTypes = {
    item: PropTypes.arrayOf(
        PropTypes.exact({
           avatar : PropTypes.string.isRequired,
           name : PropTypes.string.isRequired,
           isOnline : PropTypes.bool.isRequired,
           id : PropTypes.number.isRequired,
        })
    )
}