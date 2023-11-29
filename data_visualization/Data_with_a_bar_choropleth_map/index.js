// Data
const dataURL =
  "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json";

const dataURL2 =
  "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json";

async function fetchData() {
  try {
    const data = await d3.json(dataURL);
    const countyData = await d3.json(dataURL2);

    const counties = topojson.feature(data, data.objects.counties);

    const margin = { top: 60, right: 60, bottom: 60, left: 60 };
    const width = 1100 - margin.left - margin.right;
    const height = 800 - margin.top - margin.bottom;

    const svg = d3.select("#map").attr("width", width).attr("height", height);

    const tooltip = d3.select("#tooltip");

    // Create a mapping between FIPS codes and data
    const fipsToDataMap = new Map(countyData.map((d) => [d.fips, d]));

    // Choose a color scale based on your data values
    const colorScale = d3.scaleSequential(d3.interpolateBlues).domain([3, 66]);

console.log(countyData);

    // Draw the map
    svg
      .selectAll("path")
      .data(counties.features)
      .enter()
      .append("path")
      .attr("class", "county")
      .attr("data-fips", (d) => fipsToDataMap.get(d.id).fips)
      .attr("data-education", (d) => fipsToDataMap.get(d.id).bachelorsOrHigher)
      .attr("d", d3.geoPath())
      .attr("fill", (d) =>
        colorScale(fipsToDataMap.get(d.id).bachelorsOrHigher)
      )
      .style("stroke", "white")
      .style("stroke-width", 0.1)
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);

    function handleMouseOver(e, d) {
      const county = fipsToDataMap.get(d.id);

      tooltip
        .style("visibility", "visible")
        .style("opacity", 0.8)
        .attr("data-education", fipsToDataMap.get(d.id).bachelorsOrHigher)
        .style("left", e.pageX + 10 + "px")
        .style("top", e.pageY - 30 + "px");

      document.getElementById(
        "tooltip"
      ).innerText = `${county.area_name}, ${county.state}: ${county.bachelorsOrHigher}%`;
    }

    function handleMouseOut(e, d) {
      tooltip.style("visibility", "hidden");
    }

    // Add legend
    const legendWidth = 300;
    const legendHeight = 10;

    const legend = svg
      .append("g")
      .attr(
        "transform",
        `translate(${width - legendWidth - 20}, ${height - legendHeight - 20})`
      );

    const legendScale = d3
      .scaleLinear()
      .domain([3, 66])
      .range([0, legendWidth]);

    const legendAxis = d3
      .axisBottom(legendScale)
      .tickValues([3, 12, 21, 30, 39, 48, 57, 66])
      .tickFormat((d) => `${d}%`);

    legend
      .append("rect")
      .attr("id", "legend")
      .attr("width", legendWidth)
      .attr("height", legendHeight)
      .style("fill", "url(#legendGradient)");

    legend
      .append("g")
      .attr("transform", `translate(0, ${legendHeight})`)
      .call(legendAxis);

    // Add gradient to the legend
    const defs = svg.append("defs");

    const linearGradient = defs
      .append("linearGradient")
      .attr("id", "legendGradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "0%");

    linearGradient
      .selectAll("stop")
      .data(colorScale.range())
      .enter()
      .append("stop")
      .attr("offset", (d, i) => i / (colorScale.range().length - 1))
      .attr("stop-color", (d) => d);
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

fetchData();
