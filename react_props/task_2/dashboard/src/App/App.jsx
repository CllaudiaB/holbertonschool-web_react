import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import {getLatestNotification} from "../utils/utils";


function App() {
  let notificationsList = [];

  notificationsList = [
    {
      "id": 1,
      "type": "default",
      "value": "New course available",
    },
    {
      "id": 2,
      "type": "urgent",
      "value": "New resume available",
    },
    {
      "id": 3,
      "type": "urgent",
      "value": getLatestNotification(),
    },
  ];
  return (
    <>
      <div>
        <Notifications notificationsList={notificationsList}/>
        <Header />
        <Login />
        <Footer />
      </div>
    </>
  );
}

export default App;
