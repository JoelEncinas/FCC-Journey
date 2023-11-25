// Data
const dataURL =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";

// TODO modularize
async function fetchData() {
  try {
    const response = await d3.json(dataURL);
    const data = response.data;

    console.log(data);

    // set up svg container dimensions
    const margin = { top: 60, right: 60, bottom: 60, left: 60 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3
      .select("body")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // X scale: use the year values from the data
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d[0]))
      .range([0, width])
      .padding(0.1);

    // Y scale: from 0 to 18000, in steps of 2000
    const yScale = d3.scaleLinear().domain([0, 18000]).range([height, 0]);

    // Create x-axis with custom values
    const xAxis = d3.axisBottom(xScale).tickValues(data.map((e) => e[0]));

    // bars
    svg
      .selectAll("mybar")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d[0]))
      .attr("y", (d) => yScale(d[1]))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d[1]))
      .attr("fill", "#69b3a2");

    // Add the X Axis
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    // Add the Y Axis
    svg.append("g").call(d3.axisLeft(yScale));
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

fetchData();
