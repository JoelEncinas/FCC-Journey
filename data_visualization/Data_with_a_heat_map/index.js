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

    const months = [
      "December",
      "November",
      "October",
      "September",
      "August",
      "July",
      "June",
      "May",
      "April",
      "March",
      "February",
      "January",
    ];

    const yScale = d3
      .scaleBand()
      .domain(data.map((d) => d.month))
      .range([height, 0]);

    let yearsArray = [];

    for (let year = 1753; year <= 2015; year++) {
      yearsArray.push(year);
    }

    console.log(yearsArray);

    const xAxis = d3
      .axisBottom(xScale)
      .tickValues(yearsArray)
      .tickFormat((d) => {
        return d;
      });

    const colorScale = d3
      .scaleThreshold()
      .domain([2.8, 3.8, 4.9, 6.7, 8.5, 10.7, 11.7, 12.8])
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
      .call(xAxis);

    svg
      .append("g")
      .attr("id", "y-axis")
      .call(d3.axisLeft(yScale).tickFormat((d, i) => months[i]));

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
      .attr("fill", (d) => {
        const fillValue = colorScale(baseTemp + d.variance);
        // console.log((baseTemp + d.variance).toFixed(1));
        // console.log(d.variance);
        return fillValue;
      })
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);

    function handleMouseOver(e, d) {
      d3.select(this).style("stroke", "#000").style("stroke-width", "1px");

      tooltip
        .style("visibility", "visible")
        .style("opacity", 0.75)
        .style("left", e.pageX - 30 + "px")
        .style("top", e.pageY - 90 + "px");
    }

    function handleMouseOut(e, d) {
      d3.select(this).style("stroke", "none").style("stroke-width", "0");

      tooltip.style("visibility", "hidden");
    }

    const legendContainer = svg.append("g").attr("id", "legend");
  } catch (error) {
    console.error("Error", error);
  }
}

draw();
