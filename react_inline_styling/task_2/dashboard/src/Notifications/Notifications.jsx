import React from "react";
import PropTypes from "prop-types";
import closeImage from "../assets/close-button.png";
import NotificationItem from "./NotificationItem";
import { StyleSheet, css } from "aphrodite";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if (
      nextProps.notificationsList.length !== this.props.notificationsList.length
    )
      return true;

    return false;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { notificationsList, displayDrawer } = this.props;
    return (
      <>
        <div className="notifications-title">
          <p>Your notifications</p>
        </div>
        {displayDrawer ? (
          <div className={css(styles.notifications)}>
            {notificationsList.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <button
                  aria-label="Close"
                  onClick={() => console.log("Close button has been clicked")}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={closeImage}
                    alt="Close icon"
                    style={{ width: "10px", height: "10px" }}
                  />
                </button>
                <ul>
                  {notificationsList.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={this.markAsRead.bind(this, notification.id)}
                    />
                  ))}
                </ul>
              </>
            )}
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  notificationsList: PropTypes.arrayOf(PropTypes.object),
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  notificationsList: [],
  displayDrawer: true,
};

const styles = StyleSheet.create({
  notifications: {
    border: "2px dashed  #e1003c",
    padding: "16px",
  },
});

export default Notifications;
