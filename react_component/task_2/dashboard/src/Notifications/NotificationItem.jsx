import React from "react";

class NotificationItem extends React.Component {
  render() {
    const { type, html, value, markAsRead } = this.props;
    return (
      <li
        style={{ color: type === "urgent" ? "red" : "blue" }}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead()}
      >
        {value}
      </li>
    );
  }
}

export default NotificationItem;
