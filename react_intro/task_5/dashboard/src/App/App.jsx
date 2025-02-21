import holbertonLogo from "../assets/holberton-logo.jpg";
import '.App.css'
import { getCurrentYear, getFooterCopy } from "../utils/utils";
import Notifications from "../Notifications/Notifications";
import "../Notifications/Notifications.css";


const currentYear = getCurrentYear();
const footerCopy = getFooterCopy(false);

function App() {
  return (
    <>
      <div>
          <Notifications />
      </div>
      <div className="App-header">
        <img src={holbertonLogo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email"></input>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password"></input>
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright { currentYear } - { footerCopy }</p>
      </div>
    </>
  );
}

export default App;
