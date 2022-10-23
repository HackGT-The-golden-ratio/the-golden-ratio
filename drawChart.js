var timeScale = d3.scale.linear()
    .domain([300, 1700])
    .range([300, 1700])
    .clamp(true);

// define value scale
var valueScale = d3.scale.linear()
    .domain([0, 1])
    .range([30, 95]);

// create the real time chart
var chart = realTimeChart()
    .title("Chart Title")
    .yTitle("Y Scale")
    .xTitle("X Scale")
    .border(true)
    .width(600)
    .height(400)
    .barWidth(15)


// invoke the chart
var chartDiv = d3.select("#viewDiv").append("div")
    .attr("id", "chartDiv")
    .call(chart);

