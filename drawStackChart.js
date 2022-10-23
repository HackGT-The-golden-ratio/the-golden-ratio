var state = [{name: "AL", "<10": 598478, "10-19": 638789, "20-29": 661666, "30-39": 603013, "40-49": 625599, "50-59": 673864, "60-69": 548376, "70-79": 316598,"≥80": 174781}]
var ages = ["<10", "10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70-79", "≥80"]

chart = StackedBarChart(state, ages, {
  y: d => d.state,
  z: d => d.age,
  zDomain: ages,
  colors: d3.schemeSpectral[ages.length],
  width: 100
})

console.log(chart)

d3.selectAll(".pie-chart").select(function() {
  return this.appendChild(chart);
});
