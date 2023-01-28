// var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
var dataset = [2, 3, 1, 4, 5];

var svgWidth = 500;
var svgHeight = 300;
var barPadding = 25;
var barWidth = (svgWidth / dataset.length) - 10;

// svg to draw on top
var svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)
    .style('background-color', 'lightblue');

// y scale
var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, svgHeight]);

// x scale
var xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, svgWidth]);

// chart
var barChart = svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')  
    .attr('y', (d) => svgHeight - yScale(d))
    .attr('height', (d) => yScale(d) - 20)
    .attr('width', barWidth - barPadding)
    .attr('transform', (d, i) => {
        var translate = [(barWidth * i) + 60, 10];
        return 'translate(' + translate +')';
    });

// labels
/*
var text = svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text((d) => d)
    .attr('y', (d, i) => svgHeight - d - 2)
    .attr('x', (d, i) => barWidth * i)
    .style('fill', 'red');
*/

// axes
var x_axis = d3.axisBottom().scale(xScale);
var y_axis = d3.axisLeft().scale(yScale);

svg.append('g')
    .attr('transform', 'translate(50, 10)')
    .call(y_axis);

var axisTranslate = svgHeight - 20;

svg.append('g')
    .attr('transform', 'translate(50' + axisTranslate + ')')
    .call(x_axis);