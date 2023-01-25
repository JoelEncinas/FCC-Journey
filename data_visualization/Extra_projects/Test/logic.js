const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body")
    .data(dataset)
    .enter()
    .append('div')
    .text(d => d)
    .style('color', d => {
        return d < 15 ? 'red' : 'green'
    });