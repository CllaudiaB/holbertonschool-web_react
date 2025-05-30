import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import { getLatestNotification } from "../utils/utils";
import CourseList from "../CourseList/CourseList";


function App({ isLoggedIn = true }) {
  let notificationsList = []

  const coursesList = [
    {
      "id": 4,
      "name": "ES6",
      "credit": 60,
    },
    {
      "id": 5,
      "name": "Webpack",
      "credit": 20,
    },
    {
      "id": 6,
      "name": "React",
      "credit": 40,
    },
  ];
  return (
    <>
      <div>
        <Notifications notificationsList={notificationsList} />
      </div>
      <Header />
      {!isLoggedIn ? <Login /> : <CourseList courses={coursesList} />}
      <Footer />
    </>
  );
}

export default App;
