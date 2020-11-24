import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export default function Statistics({stats, title }) {

    function Color() {
    let colorOne = Math.floor(Math.random() * 255)
    let colorTwo = Math.floor(Math.random() * 255)
    let colorThree = Math.floor(Math.random() * 255)
    return `rgba(${colorOne},${colorTwo},${colorThree})`   
   }
    
    return (
        <div className={style.StatisticsContainer}>
        <section className={style.statistics}>
         {title && <h2 className={style.title}>{title}</h2>}       
        <h2 className={style.title}>{title}</h2>
        <ul className={style.statList}>
            {stats.map(item => (
                <li key={item.id} className={style.statListItem} style={{ backgroundColor: `${Color()}`}}>
                    <span className={style.label}>{item.label}</span>  
                    <span className={style.percentage}>{item.percentage}%</span>
                </li>
            ))}
            </ul>
            </section>
            </div>
    )
}

Statistics.propTypes = {
    item: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}
