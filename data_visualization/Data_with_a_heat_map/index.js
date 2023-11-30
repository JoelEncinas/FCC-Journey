const dataURL =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json";

async function draw() {
  try {
    const response = await d3.json(dataURL);
    const data = response.monthlyVariance;
    const baseTemp = response.baseTemperature;

    console.log(data, baseTemp);

    const margin = { top: 60, right: 60, bottom: 60, left: 60 };
    const width = 1600 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const svg = d3
      .select("body")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const tooltip = d3.select("#tooltip");

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.year))
      .range([0, width]);

    const yScale = d3
      .scaleBand()
      .domain(data.map((d) => d.month))
      .range([height, 0]);

    const colorScale = d3
      .scaleLinear()
      .domain([2.8, 12.8])
      .range([
        "#4575B4",
        "#74ADD1",
        "#ABD9E9",
        "#E0F3F8",
        "#FFFFBF",
        "#FEE090",
        "#FDAE61",
        "#F46D43",
        "#D73027",
      ]);

    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .attr("id", "x-axis")
      .call(d3.axisBottom(xScale));

    svg.append("g").attr("id", "y-axis").call(d3.axisLeft(yScale));

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "cell")
      .attr("x", (d) => xScale(d.year))
      .attr("y", (d) => yScale(d.month))
      .attr("data-month", (d) => yScale(d.month))
      .attr("width", xScale.bandwidth())
      .attr("height", yScale.bandwidth())
      .attr("fill", (d) => colorScale(baseTemp - d.variance));

    const legendContainer = svg.append("g").attr("id", "legend");
  } catch (error) {
    console.error("Error", error);
  }
}

draw();
