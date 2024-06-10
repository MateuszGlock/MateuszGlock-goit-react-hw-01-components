import { Component } from "react";
import PropTypes from "prop-types";
import "../styles/Transactions.css";

export default class Transactions extends Component {
  static defaultProps = {};
  static propTypes = {
    transactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    const { transactions } = this.props;
    return (
      <table className="transaction-history">
        <thead className="transactions-head">
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className="transactions-body">
          {transactions.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td className="transaction-type">{type}</td>
              <td className="transaction-amount">{amount}</td>
              <td className="transaction-currency">{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
