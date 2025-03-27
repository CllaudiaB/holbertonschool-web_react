import React from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Courselist from "../CourseList/CourseList";
import PropTypes from "prop-types";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import WithLogging from "../HOC/WithLogging";

const notificationsList = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  {
    id: 3,
    type: "urgent",
    value: "<strong>Urgent requirement</strong> - complete by EOD",
  },
];

const coursesList = [
  { id: 1, name: "ES6", credit: "60" },
  { id: 2, name: "Webpack", credit: "20" },
  { id: 3, name: "React", credit: "30" },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: props.isLoggedIn || false };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

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
    return (
      <>
        <div className="root-notifications">
          <Notifications notificationsList={notificationsList} />
        </div>
        <Header />
        {this.state.isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <WithLogging Component={Courselist} courses={coursesList} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <WithLogging Component={Login} />
          </BodySectionWithMarginBottom>
        )}
        <BodySectionWithMarginBottom title="News from the School">
          <p>Holberton School News goes here</p>
        </BodySectionWithMarginBottom>
        <Footer />
      </>
    );
  }
}

export default App;

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  logOut: () => {},
};
