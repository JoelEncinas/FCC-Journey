// Data
const dataURL =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json";

async function fetchData() {
  try {
    const response = await d3.json(dataURL);
    let data = response;

    console.log(data);

    const margin = { top: 60, right: 60, bottom: 60, left: 60 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select("body")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const parseTime = d3.timeParse("%M:%S");

    data.forEach((d) => {
      d.Time = parseTime(d.Time);
    });

    console.log(data);

    const xScale = d3.scaleLinear().domain([1993, 2016]).range([0, width]);

    const yScale = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.Time))
      .range([0, height]);

    // Create circles for each data point
    svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => xScale(d.Year))
      .attr("cy", (d) => yScale(d.Time))
      .attr("r", 5);

    // Add axes
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    svg
      .append("g")
      .call(d3.axisLeft(yScale).tickFormat(d3.timeFormat("%M:%S")));

    // Add Y axis label
    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 60 - height / 2)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Time in Minutes");
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

fetchData();
