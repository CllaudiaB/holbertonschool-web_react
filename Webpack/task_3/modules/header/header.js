import $ from "jquery";
import _ from "lodash";
import "./header.css";


const logo = $("<div id='logo'></div>").css({
    height: "200px",
    width: "200px",
  });

const title = $("<h1>Holberton Dashboard</h1>");

$("body").append(logo).append(title);

console.log("Init header");
