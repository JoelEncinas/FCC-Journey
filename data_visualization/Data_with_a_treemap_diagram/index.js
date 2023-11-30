const dataURL =
  "https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json";

async function draw() {
  try {
    const response = await d3.json(dataURL);
    const data = response.children;

    const margin = { top: 20, right: 120, bottom: 60, left: 0 };
    const width = 800 - margin.left - margin.right;
    const height = 600 - margin.top - margin.bottom;

    const svg = d3
      .select("body")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const root = d3.hierarchy({ children: data }).sum((d) => +d.value);
    const treemap = d3.treemap().size([width, height]).padding(0.5);

    treemap(root);

    const colorScale = d3
      .scaleOrdinal()
      .domain(data.map((d) => d.name))
      .range(d3.schemePaired);

    const cells = svg
      .selectAll("g")
      .data(root.leaves())
      .enter()
      .append("g")
      .attr("transform", (d) => "translate(" + d.x0 + "," + d.y0 + ")");

    cells
      .append("rect")
      .attr("class", "tile")
      .attr("width", (d) => d.x1 - d.x0)
      .attr("height", (d) => d.y1 - d.y0)
      .attr("data-name", (d) => d.data.name)
      .attr("data-category", (d) => d.data.category)
      .attr("data-value", (d) => d.data.value)
      .attr("fill", (d) => colorScale(d.data.category))
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);

    const legendContainer = svg
      .append("g")
      .attr("id", "legend")
      .attr("transform", "translate(" + (width + 100) + "," + 0 + ")");

    const legend = legendContainer
      .selectAll(".legend-item")
      .data(colorScale.domain())
      .enter()
      .append("g")
      .attr("transform", (d, i) => "translate(0," + i * 18 + ")");

    legend
      .append("rect")
      .attr("class", "legend-item")
      .attr("x", 0)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", colorScale);

    legend
      .append("text")
      .attr("x", -6)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text((d) => d);

    const tooltip = d3.select("#tooltip");

    function handleMouseOver(e, d) {
      tooltip
        .style("visibility", "visible")
        .style("opacity", 0.8)
        .attr("data-value", d.data.value)
        .style("left", e.pageX + 10 + "px")
        .style("top", e.pageY - 30 + "px");

      tooltip.html(`${d.data.name}<br>${d.data.value}<br>${d.data.category}`);
    }

    function handleMouseOut(e, d) {
      tooltip.style("visibility", "hidden");
    }
  } catch (error) {
    console.error("Error", error);
  }
}

draw();
