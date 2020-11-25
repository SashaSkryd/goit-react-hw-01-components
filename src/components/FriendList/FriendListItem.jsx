import React from 'react'
import style from './Friends.module.css';

export default function FriendItem({frend}) {
    
    return ( <li key={frend.id} className={style.friendListItem}>
                        <span className={style.status} style={{ backgroundColor: frend.isOnline ? 'green' :'red'}}>
                            {frend.isOnline ? 'Online' : 'Offline'}</span>
                        <img className={style.avatar} src={frend.avatar} alt={frend.name} width="48"/>
                        <p className={style.name}>{frend.name}</p>
                    </li>
                )
}

