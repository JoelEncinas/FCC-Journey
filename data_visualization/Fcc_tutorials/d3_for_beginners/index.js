// DOM selection
/*
d3.select('h1') // return first h1
    .style('color', 'red')
    .attr('class', 'heading')
    .text('updated h1 tag'); 
*/

var dataset = [1, 2, 3, 4, 5];

d3.select('body')
    .selectAll('p')
    .data(dataset)
    .enter()
    .append('p') // appends p for each data element
    .text((d) => d);
    