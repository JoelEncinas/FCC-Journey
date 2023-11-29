const dataURL =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";

async function draw() {
  try {
    const response = await d3.json(dataURL);
    const data = response.data;

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

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d[0]))
      .range([0, width])
      .padding(0.1);

    const yScale = d3.scaleLinear().domain([0, 18000]).range([height, 0]);

    const axisDates = [
      "1950-01-01",
      "1955-01-01",
      "1960-01-01",
      "1965-01-01",
      "1970-01-01",
      "1975-01-01",
      "1980-01-01",
      "1985-01-01",
      "1990-01-01",
      "1995-01-01",
      "2000-01-01",
      "2005-01-01",
      "2010-01-01",
      "2015-01-01",
    ];

    const xAxis = d3
      .axisBottom(xScale)
      .tickValues(axisDates)
      .tickFormat((d) => {
        return d.substring(0, 4);
      });

    const tooltip = d3.select("#tooltip");

    svg
      .selectAll("mybar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d[0]))
      .attr("y", (d) => yScale(d[1]))
      .attr("data-date", (d) => d[0])
      .attr("data-gdp", (d) => d[1])
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d[1]))
      .attr("fill", "#69b3a2")
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);

    function handleMouseOver(e, d) {
      d3.select(this).attr("fill", "#f7a400");

      tooltip
        .style("visibility", "visible")
        .style("opacity", 0.9)
        .attr("data-date", d[0])
        .style("left", e.pageX + 10 + "px")
        .style("top", 350 + "px");

      let quarter = "";

      switch (d[0].substring(5, 7)) {
        case "01":
          quarter = "Q1";
          break;
        case "04":
          quarter = "Q2";
          break;
        case "07":
          quarter = "Q3";
          break;
        case "10":
          quarter = "Q4";
          break;
      }

      document.getElementById("tooltip").innerText = `${d[0].substring(
        0,
        4
      )} ${quarter}\n$${parseInt(d[1]).toLocaleString("en-US", {
        style: "decimal",
      })} Billion`;
    }

    function handleMouseOut(e, d) {
      d3.select(this).attr("fill", "#69b3a2");

      tooltip.style("visibility", "hidden");
    }

    svg
      .append("g")
      .attr("id", "x-axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg.append("g").attr("id", "y-axis").call(d3.axisLeft(yScale));

    svg
      .append("text")
      .attr("id", "gdp-text")
      .attr("x", 110)
      .attr("y", 40)
      .attr("transform", "rotate(270, 100, 120)")
      .style("text-anchor", "middle")
      .text("Gross Domestic Product");

    svg
      .append("text")
      .attr("id", "more-info")
      .attr("x", 325)
      .attr("y", 325)
      .style("text-anchor", "middle")
      .text("More Information: http://www.bea.gov/national/pdf/nipaguid.pdf");
  } catch (error) {
    console.error("Error", error);
  }
}

draw();
