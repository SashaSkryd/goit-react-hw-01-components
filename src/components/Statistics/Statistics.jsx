import React from 'react';
import PropTypes from 'prop-types';
import Style from './Statistics.module.css';

export default function Statistics({ items }) {

    function Color() {
    let colorOne = Math.floor(Math.random() * 255)
    let colorTwo = Math.floor(Math.random() * 255)
    let colorThree = Math.floor(Math.random() * 255)
    return `rgba(${colorOne},${colorTwo},${colorThree})`   
   }
    
    return (
        <section className={Style.statistics}>
        <ul className={Style.statList}>
            {items.map(item => (
                <li key={item.id} className={Style.statListItem} style={{ backgroundColor: `${Color()}`}}>
                    <span className={Style.label}>{item.label}</span>
                    <span className={Style.percentage}>{item.percentage}%</span>
                </li>
            ))}
            </ul>
        </section>
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
