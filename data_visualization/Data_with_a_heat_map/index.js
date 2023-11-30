const dataURL =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json";

async function draw() {
  try {
    const response = await d3.json(dataURL);
    const data = response;

    console.log(data)

    const margin = { top: 60, right: 60, bottom: 60, left: 60 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select("body")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const tooltip = d3.select("#tooltip");
  } catch (error) {
    console.error("Error", error);
  }
}

draw();
