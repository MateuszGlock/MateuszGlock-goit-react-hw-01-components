import { Component } from "react";
import PropTypes from "prop-types";
import "../styles/Statistics.css";

export default class Statistics extends Component {
  static defaultProps = {};
  static propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    ).isRequired,
  };

  getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  render() {
    const { title, stats } = this.props;

    return (
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}

        <ul className="stat-list">
          {stats.map(({ id, label, percentage }) => (
            <li
              key={id}
              className="item"
              style={{ backgroundColor: this.getRandomColor() }}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
