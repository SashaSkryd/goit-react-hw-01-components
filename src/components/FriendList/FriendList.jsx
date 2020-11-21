import React from 'react';
import PropTypes from 'prop-types';
import Style from './Friends.module.css';

export default function FriendList({ friends }) {
    return (
        <section className={Style.friends}>
        <ul className={Style.friendList}>
            {friends.map(frend => (
                <li key={frend.id} className={Style.friendListItem}>
                    <span className={Style.status} style={{ backgroundColor: frend.isOnline ? 'green' :'red'}}>
                        {frend.isOnline ? 'Online' : 'Offline'}</span>
                    <img className={Style.avatar} src={frend.avatar} alt={frend.name} width="48"/>
                    <p className={Style.name}>{frend.name}</p>
                </li>
            ))}
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