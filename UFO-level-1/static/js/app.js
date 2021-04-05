var sightings = data;
var button = d3.select("#button");
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select(".form-control");

    var inputValue = inputElement.property('value').toLowerCase();
    console.log(inputValue);

    var tableElement = d3.select("table");
    tableElement.attr('class', 'table table-striped');
    var tobodyElement = d3.select('tbody');

    var dataArray = (s => {
        var trElement = tbodyElement.append("tr");
        trElement.append("td").text(s);
    })

}