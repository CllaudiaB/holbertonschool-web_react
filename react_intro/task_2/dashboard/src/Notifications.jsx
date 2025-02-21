import closeButton from "./assets/close-button.png";
import { getLatestNotification } from "./utils";

function Notifications() {
  return (
    <>
      <div className="notifications">
        <p>Here is the list of notifications</p>
        <ul>
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
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
