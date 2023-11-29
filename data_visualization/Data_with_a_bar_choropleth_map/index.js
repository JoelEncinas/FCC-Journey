// Data
const dataURL =
  "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json";

async function fetchData() {
  try {
    const geojson = await d3.json(dataURL);

    console.log(geojson);

    const margin = { top: 60, right: 60, bottom: 60, left: 60 };
    const width = 1000 - margin.left - margin.right;
    const height = 700 - margin.top - margin.bottom;

    const svg = d3.select("#map").attr("width", width).attr("height", height);

    const tooltip = d3.select("#tooltip");

    // Create a GeoPath function
    const path = d3.geoPath();

    // Draw the map
    svg
      .selectAll("path")
      .data(geojson.objects.counties.geometries)
      .enter()
      .append("path")
      .attr("d", path)
      .style("fill", "steelblue")
      .style("stroke", "black")
      .style("stroke-width", 1)
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);

    function handleMouseOver(e, d) {
      tooltip
        .style("visibility", "visible")
        .style("opacity", 0.95)
        // .attr("data-year", d.Year)
        .style("left", e.pageX + 10 + "px")
        .style("top", e.pageY - 30 + "px");
    }

    function handleMouseOut(e, d) {
      tooltip.style("visibility", "hidden");
    }
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

fetchData();
