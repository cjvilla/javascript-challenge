// from data.js
var sightings = data;
console.log(sightings);

var tbody = d3.select("tbody");
console.log(data);


sightings.forEach(ufoSighting => {
    console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key,value]){
        console.log(key,value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", function(event){
    d3.event.preventDefault();
    tbody.html("");

var inputElement = d3.select("#datetime"); 
var inputValue = inputElement.property("value");

var filteredData = sightings.filter(tableData => tableData.datetime === inputValue);
filteredData.forEach(function(dateData){
    var row=tbody.append("tr");
    Object.entries(dateData).forEach(function([key,value]){
    var cell=tbody.append("td");
    cell.text(value);
        });
    });
});