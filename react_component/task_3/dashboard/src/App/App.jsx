import React, { Component } from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import { getLatestNotification } from "../utils/utils";
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";

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
      isLoggedIn: false
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  };

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(event) {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  }
  

  render() {
    const { notificationsList, coursesList, isLoggedIn } = this.state;

    return (
      <>
        <div>
          <Notifications notificationsList={notificationsList} />
          <Header />
          {this.state.isLoggedIn ? (
           <BodySectionWithMarginBottom title="Course list">
             <CourseList courses={coursesList} />
           </BodySectionWithMarginBottom>
         ) : (
           <BodySectionWithMarginBottom title="Log in to continue">
             <Login />
           </BodySectionWithMarginBottom>
         )}
         <BodySection title="News from the School">
           <p>Holberton School News goes here</p>
         </BodySection>
         < Footer />
        </div>
      </>
    );
  }
}

App.defaultProps = {
  logOut: () => {},
};

export default App;
