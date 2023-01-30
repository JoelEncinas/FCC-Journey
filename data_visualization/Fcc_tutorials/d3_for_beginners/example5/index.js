const api = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end=2018-04-01';

// api call & draw chart
document.addEventListener('DOMContentLoaded', (e) => {
    fetch(api)
    .then(res => res.json())
    .then(data => {
        var parsedData = parseData(data);
        // drawChart(parssedData);
    })
    .catch(err => console.log(err));
})

// parse ddata into key-value pairs
function parseData(data) {
    var arr = [];
    for(var i in data.bpi) {
        arr.push({
            date: new Date(i),
            value: +data.bpi[i] // (+) convert string to number
        });
    }

    return arr;
}

//  create chart with d3
function drawChart(data) {
    var svgWidth = 500;
    var svgHeight = 400;
    var margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 50
    };
    var width = svgWidth - margin.left - margin.right;
    var height = svgHeight - margin.top - margin.bottom;

    var svg = d3.select('svg')
        .attr('width', svgWidth)
        .attr('height', svgHeight);
    
    
}