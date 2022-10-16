


import PropTypes from 'prop-types';
import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ items }) {
    
    return <table className={css.table}>
  <thead >
    <tr className={css.table_head}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

        <tbody>
            {items.map(item => (
                <tr className={css.table_body} key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
            )) }  
    
    
  </tbody>
</table>
    
}

TransactionHistory.propTypes = {
   items: PropTypes.arrayOf(
        PropTypes.exact({
    type:PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number,
  })
    ),
}