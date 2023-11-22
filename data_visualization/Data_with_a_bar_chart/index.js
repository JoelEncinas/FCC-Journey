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
    let dataToUse = data.data;

    console.log(dataToUse);
  })
  .catch(function (error) {
    console.error("Error loading data:", error);
  });
