// Data
const dataURL =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";

// set up svg container dimensions
const margin = { top: 60, right: 60, bottom: 60, left: 60 };
const width = 600 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

// create svg container
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json(dataURL)
  .then(function (data) {
    // Convert date strings to JavaScript Date objects
    data.data.forEach(function (d) {
      d[0] = new Date(d[0]);
    });

    // Create x and y scales
    const xScale = d3
      .scaleBand()
      .domain(data.data.map((d) => d[0]))
      .range([0, width])
      .padding(0.1);

    // Extract unique years from the data
    const uniqueYears = Array.from(
      new Set(data.data.map((d) => d[0].getFullYear()))
    );

    // Create x-axis with ticks at 5-year intervals
    const xTicks = uniqueYears.filter((year) => year % 5 === 0);
    const xAxis = d3
      .axisBottom(xScale)
      .tickValues(xTicks)
      .tickFormat(d3.timeFormat("%Y"));

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data.data, (d) => d[1])])
      .range([height, 0]);

    // Create bars
    svg
      .selectAll("rect")
      .data(data.data)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d[0]))
      .attr("width", xScale.bandwidth())
      .attr("y", (d) => yScale(d[1]))
      .attr("height", (d) => height - yScale(d[1]));

    // Add x-axis
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    // Add y-axis
    svg.append("g").call(d3.axisLeft(yScale));
    // console.log(data);
  })
  .catch(function (error) {
    console.error("Error loading data:", error);
  });
