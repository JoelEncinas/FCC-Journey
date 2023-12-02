const dataURL =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json";

async function draw() {
  try {
    const response = await d3.json(dataURL);
    const data = response.monthlyVariance;
    const baseTemp = response.baseTemperature;

    const margin = { top: 60, right: 60, bottom: 150, left: 60 };
    const width = 1600 - margin.left - margin.right;
    const height = 550 - margin.top - margin.bottom;

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
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const yScale = d3
      .scaleBand()
      .domain(data.map((d) => d.month))
      .range([0, height]);

    let yearsArray = [];

    for (let year = 1760; year <= 2015; year += 10) {
      yearsArray.push(year);
    }

    const xAxis = d3
      .axisBottom(xScale)
      .tickValues(yearsArray)
      .tickFormat((d) => {
        return d;
      });

    const colorScale = d3
      .scaleThreshold()
      .domain([2.8, 3.9, 5.0, 6.1, 7.2, 8.3, 9.5, 10.6, 11.7, 12.8])
      .range([
        "#313695",
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
      .attr("data-month", (d) => d.month - 1)
      .attr("data-year", (d) => d.year)
      .attr("data-temp", (d) => (baseTemp + d.variance).toFixed(1))
      .attr("width", xScale.bandwidth())
      .attr("height", yScale.bandwidth())
      .attr("fill", (d) => {
        const fillValue = colorScale(baseTemp + d.variance);
        return fillValue;
      })
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);

    function handleMouseOver(e, d) {
      d3.select(this).style("stroke", "#000").style("stroke-width", "1px");

      tooltip
        .style("visibility", "visible")
        .style("opacity", 0.75)
        .style("left", e.pageX - 60 + "px")
        .style("top", e.pageY - 120 + "px")
        .attr("data-year", d.year);

      tooltip.html(
        `${d.year} - ${months[d.month - 1]}<br>${(
          baseTemp + d.variance
        ).toFixed(1)} ºC<br>${d.variance.toFixed(1)} ºC`
      );
    }

    function handleMouseOut(e, d) {
      d3.select(this).style("stroke", "none").style("stroke-width", "0");

      tooltip.style("visibility", "hidden");
    }

    const legendContainer = svg
      .append("g")
      .attr("id", "legend")
      .attr("transform", "translate(" + 0 + "," + (height + margin.top) + ")");

    const legendWidth = 300;
    const legendHeight = 20;

    const legend = legendContainer
      .selectAll("g")
      .data(colorScale.range())
      .enter()
      .append("g")
      .attr(
        "transform",
        (d, i) => "translate(" + (i * legendWidth) / 11.05 + ", 0)"
      )
      .style("display", (d, i) => (i === 0 ? "none" : "block"));

    legend
      .append("rect")
      .attr("width", legendWidth / 10)
      .attr("height", legendHeight)
      .style("fill", (d) => d);

    const legendAxis = d3
      .axisBottom()
      .scale(d3.scaleLinear().domain([1.7, 13.9]).range([0, legendWidth]))
      .tickValues(colorScale.domain())
      .tickFormat(d3.format(".1f"));

    legendContainer
      .append("g")
      .attr("transform", "translate(0," + legendHeight + ")")
      .call(legendAxis);
  } catch (error) {
    console.error("Error", error);
  }
}

draw();
