import css from '../TransactionHistory/TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {

   const transactionStyles = {
        invoice: css.invoice,
        payment: css.payment,
        withdrawal: css.withdrawal,
        deposit: css.deposit
   };
  
    return (
        <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th className={css.tableHead}>Type</th>
      <th className={css.tableHead}>Amount</th>
      <th className={css.tableHead}>Currency</th>
    </tr>
  </thead>
    <tbody>
          {items.map(({ id, type, amount, currency }) => {
            const transactionClass = transactionStyles[type];
            return (
                <tr key={id} className={[css.tableData, transactionClass].join(' ')}>
                    <td className={css.tableDataCell}>{type}</td>
                    <td className={css.tableDataCell}>{amount}</td>
                    <td className={css.tableDataCell}>{currency}</td>
                </tr>
                );
                })}
  </tbody>
        </table>
    );
};