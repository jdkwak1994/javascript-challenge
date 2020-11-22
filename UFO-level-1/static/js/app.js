// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputdate = d3.select("#datetime");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];

button.on("click", filterdisplay);

function filterdisplay() {
    d3.event.preventDefault();
	var searchdate = inputdate.property("value").trim();
    var filteredData = data.filter(data => data.datetime === searchdate);
    console.log(searchdate);
	showtable(filteredData);
};