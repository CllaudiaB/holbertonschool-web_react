import closeButton from "../assets/close-button.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import "./Notifications.css"

function Notifications({ notificationsList=[] }) {
  return (
    <>
      <div className="notifications">
        <p>Here is the list of notifications</p>
        <ul>
          {notificationsList.map((notification) => (
            <NotificationItem
              key={notification.id}
              type={notification.type}
              value={notification.value}
              html={notification.value}
            />
          ))}
        </ul>
        <button
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          aria-label="Close"
          onClick={() => console.log("Close button has been clicked")}>
          <img
            src={closeButton}
            alt="close button"
            style={{ width: "10px", height: "10px" }}>
          </img>
        </button>
      </div>
    </>
  );
}

export default Notifications;
