import holbertonLogo from "./assets/holberton-logo.jpg";
import './App.css'
import { getCurrentYear, getFooterCopy } from "../../../task_1/dashboard/src/utils";
import Notifications from "../../../task_1/dashboard/src/Notifications";
import "../../../task_1/dashboard/src/Notifications.css";


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
      </div>
      <div className="App-footer">
        <p>Copyright { currentYear } - { footerCopy }</p>
      </div>
    </>
  );
}

export default App;
