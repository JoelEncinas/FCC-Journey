// Data
const dataURL = "./gz_2010_us_050_00_20m.json";

async function fetchData() {
  try {
    const response = await d3.json(dataURL);
    const geojson = response;

    console.log(geojson);

    const statesResponse = await fetch("states.json");
    const states = await statesResponse.json();

    console.log(states);

    const margin = { top: 60, right: 60, bottom: 60, left: 60 };
    const width = 1000 - margin.left - margin.right;
    const height = 700 - margin.top - margin.bottom;

    // Create a projection
    const projection = d3.geoAlbersUsa().fitSize([width, height], geojson);

    // Create a GeoPath function with the projection
    const path = d3.geoPath().projection(projection);

    const svg = d3.select("#map").attr("width", width).attr("height", height);

    const tooltip = d3.select("#tooltip");

    // Draw the map
    svg
      .selectAll("path")
      .data(geojson.features)
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

      document.getElementById("tooltip").innerText = `${d.properties.NAME} ${
        d.properties.LSAD === "CA" ? "Census Area" : d.properties.LSAD
      }, ${d.properties.STATE} `;
    }

    function handleMouseOut(e, d) {
      tooltip.style("visibility", "hidden");
    }
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

fetchData();
