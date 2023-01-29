var data = [
    {
        'platform': 'Android',
        'percentage': 40.11
    },
    {
        'platform': 'Windows',
        'percentage': 36.69
    },
    {
        'platform': 'iOS',
        'percentage': 13.06
    }
];

var svvgWidth = 500;
var svgHeight = 300;
var radius  = Math.min((svvgWidth, svgHeight) / 2);

var svg = d3.select('svg')
    .attr('width', svvgWidth)
    .attr('height', svgHeight);

var g = svg.append('g')
    .attr("transform", "translate(" + radius + "," + radius + ")");

var color = d3.scaleOrdinal(d3.schemeCategory10);

var pie  = d3.pie().value(d => d.percentage);

var path = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);

var arc = g.selectAll('arc')
    .data(pie(data))
    .enter()
    .append('g');

arc.append('path')
    .attr('d', path)
    .attr('fill', d => color(d.data.percentage));

var label = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);

    arc.append("text")
    .attr("transform", function(d) { 
        return "translate(" + label.centroid(d) + ")"; 
    })
    .attr("text-anchor", "middle")
    .text(function(d) { return d.data.platform+":"+d.data.percentage+"%"; });