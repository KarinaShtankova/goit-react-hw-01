import css from './TransactionHistory.module.css'
import clsx from 'clsx';

export const TransactionHistory = ({
  items
}) => {
  return (
    <table className= {css.table}>
      <thead className= {css.head}>
        <tr >
          <th className= {css.th}>Type</th>
          <th className= {css.th}>Amount</th>
          <th className= {css.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
              {items.map(({ id, type, amount, currency })=>(        <tr className= {css.item} key={id

}>
                  <td className={clsx(css.type, css.td)} >{type}</td>
          <td className= {css.td}>{amount}</td>
          <td className= {css.td}>{currency}</td>
              </tr>))}
              
      </tbody>
    </table>
  );
};



// : { id, type, amount, currency }Z