// Data
const dataURL =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";

async function fetchData() {
  try {
    const response = await d3.json(dataURL);
    const dataToUse = response.data;

    console.log(dataToUse);
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

fetchData();

