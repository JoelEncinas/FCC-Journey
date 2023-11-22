// Data
const dataURL =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";

d3.json(dataURL)
  .then(function (data) {
    console.log(data);

    // p with data
    d3.select("body").append("p").text("Data loaded successfully!");
  })
  .catch(function (error) {
    console.error("Error loading data:", error);
  });
