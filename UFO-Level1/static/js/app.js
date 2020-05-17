// from data.js
var tableData = data;
console.log(tableData);

//create references
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ['datetime', 'city', 'state', 'country', 'shape', 'durationMinutes', 'comments']


//UFO sighting values for each column
var addData = (dataInput) => {
    dataInput.forEach(ufosighting => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufosighting[column])
        )    
    });
}

addData(tableData);

//Create event feature and filter for Date & City
button.on("click",() => {
    d3.event.preventDefault();

    var inputDate = inputFieldDate.property("value").trim();
    console.log(inputDate);

    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);

    $tbody.html("");

    let response = {
        filterDate
    }

    if (response.filterDate.length !==0){
        addData(filterDate);
    }

        else {
            $tbody.append("tr").append("td").text("NO UFO SIGHTINGS ON THIS DATE. PLEASE TRY AGAIN.");
        }
})

