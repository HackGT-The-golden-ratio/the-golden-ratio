var population = [
  {name: "Upright", value: 8},
  {name: "Forward", value: 1},
  {name: "Crook", value: 2}
]

var chart = PieChart(population, {
  name: d => d.name,
  value: d => d.value,
  width: 200,
  height: 200,
  colors: ["#4BD0D4", "#4CD446", "#D42D40"]
})

d3.selectAll(".stack-chart").select(function() {
  return this.appendChild(chart);
});