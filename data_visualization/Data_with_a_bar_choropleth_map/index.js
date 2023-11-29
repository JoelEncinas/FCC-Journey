// Data
const dataURL = "./gz_2010_us_050_00_20m.json";

async function fetchData() {
  try {
    const response = await d3.json(dataURL);
    const geojson = response;

    console.log(geojson);

    const margin = { top: 60, right: 60, bottom: 60, left: 60 };
    const width = 800 - margin.left - margin.right;
    const height = 600 - margin.top - margin.bottom;

    // Create a projection
    const projection = d3.geoAlbersUsa().fitSize([width, height], geojson);

    // Create a GeoPath function with the projection
    const path = d3.geoPath().projection(projection);

    const svg = d3.select("#map").attr("width", width).attr("height", height);

    // Draw the map
    svg
      .selectAll("path")
      .data(geojson.features)
      .enter()
      .append("path")
      .attr("d", path)
      .style("fill", "steelblue")
      .style("stroke", "black")
      .style("stroke-width", 1);
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

fetchData();
