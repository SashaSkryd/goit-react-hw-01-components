import React from "react";
import PropTypes from 'prop-types';
import style from './Transation.module.css'

export default function Transaction ({ items }) {
  return (
    <table className={style.transactionHistory}>
      <thead className={style.titleContainer}>
        <tr>
          <th className={style.title}>Type</th>
          <th className={style.title}>Amount</th>
          <th className={style.title}>Currency</th>
        </tr>
      </thead>
      <tbody className={style.titleContainer}>
        {items.map((item) => {
          return (
            <tr key={item.id} className={style.row}>
              <td className={style.type}>{item.type}</td>
              <td className={style.type}>{item.amount}</td>
              <td className={style.type}>{item.currency}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

Transaction.propTypes = {
    item: PropTypes.arrayOf(
        PropTypes.exact({
           id : PropTypes.string.isRequired,
           type : PropTypes.string.isRequired,
           amount : PropTypes.string.isRequired,
           currency : PropTypes.string.isRequired,
        })
    )
}