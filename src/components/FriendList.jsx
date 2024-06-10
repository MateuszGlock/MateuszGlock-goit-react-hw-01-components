import { Component } from "react";
import PropTypes from "prop-types";
import "../styles/FriendList.css";

export default class FriendList extends Component {
  static defaultProps = {};
  static propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  };
  setStatusColor(isOnline) {
    if (isOnline) {
      return "#7FFF00";
    } else {
      return "#FF0000";
    }
  }
  render() {
    const { friends } = this.props;
    return (
      <section className="friend-list">
        <ul className="friends">
          {friends.map(({ avatar, name, isOnline, id }) => (
            <li key={id} className="friend-item">
              <span
                className="status"
                style={{
                  backgroundColor: this.setStatusColor(isOnline),
                }}>
                {isOnline}
              </span>
              <img
                className="avatar"
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p className="name">{name}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
