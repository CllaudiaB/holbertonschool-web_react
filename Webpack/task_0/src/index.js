var $ = require( "jquery" );

const p1 = $("<p></p>)").text("Holberton Dashboard");
const p2 = $("<p></p>)").text("Dashboard data for the students");
const p3 = $("<p></p>)").text("Copyright - Holberton School");

$("body").append(p1).append(p2).append(p3);
