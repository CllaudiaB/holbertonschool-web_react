import React, { Component } from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import { getLatestNotification } from "../utils/utils";
import CourseList from "../CourseList/CourseList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationsList: [
        {
          id: 1,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          type: "urgent",
          value: getLatestNotification(),
        },
      ],
      coursesList: [
        {
          id: 4,
          name: "ES6",
          credit: 60,
        },
        {
          id: 5,
          name: "Webpack",
          credit: 20,
        },
        {
          id: 6,
          name: "React",
          credit: 40,
        },
      ],
      isLoggedIn: true, // default value for isLoggedIn
    };
  }

  render() {
    const { notificationsList, coursesList, isLoggedIn } = this.state;

    return (
      <>
        <div>
          <Notifications notificationsList={notificationsList} />
          <Header />
          {!isLoggedIn ? <Login /> : <CourseList courses={coursesList} />}
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
