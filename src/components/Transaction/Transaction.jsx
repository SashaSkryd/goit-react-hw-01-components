import React from "react";
import PropTypes from 'prop-types';
import Style from './Transation.module.css'

export default function Transaction ({ items }) {
  return (
    <table className={Style.transactionHistory}>
      <thead className={Style.titleContainer}>
        <tr>
          <th className={Style.title}>Type</th>
          <th className={Style.title}>Amount</th>
          <th className={Style.title}>Currency</th>
        </tr>
      </thead>
      <tbody className={Style.titleContainer}>
        {items.map((item) => {
          return (
            <tr key={item.id} className={Style.row}>
              <td className={Style.type}>{item.type}</td>
              <td className={Style.type}>{item.amount}</td>
              <td className={Style.type}>{item.currency}</td>
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