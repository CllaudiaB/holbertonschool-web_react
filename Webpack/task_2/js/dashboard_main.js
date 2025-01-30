import $ from "jquery";
import _ from "lodash";
import "../css/main.css";


const logo = $("<div id='logo'></div>").css({
    height: "200px",
    width: "200px",
  });

const p1 = $("<p>Holberton Dashboard</p>");
const p2 = $("<p>Dashboard data for the students</p>");
const button = $("<button>Click here to get started</button>");
const p3 = $("<p id ='count'></p>");
const p4 = $("<p>Copyright - Holberton School</p>");

$("body").append(logo)
    .append(p1)
    .append(p2)
    .append(button)
    .append(p3)
    .append(p4);

let count = 0;

function updateCounter() {
    count += 1;
  $("#count").text(count + " clicks on the button");
}

const debouncedUpdateCounter = _.debounce(updateCounter, 500, {
    leading: true,
    trailing: false,
});

$("button").on("click", debouncedUpdateCounter);
