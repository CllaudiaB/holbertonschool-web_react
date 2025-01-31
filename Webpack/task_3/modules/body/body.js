import $ from "jquery";
import _ from "lodash";
import "./body.css";


const button = $("<button>Click here to get started</button>");
const p = $("<p id ='count'></p>");

$("body").append(button).append(p);

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
