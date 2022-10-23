var population = [
  {name: "Upright", value: 3.3},
  {name: "Forward", value: 1.3},
  {name: "Crook", value: 0.9}
]

var chart = PieChart(population, {
  name: d => d.name,
  value: d => d.value,
  width: 350,
  height: 350,
  colors: ["#4BD0D4", "#4CD446", "#D42D40"]
})

d3.selectAll(".stack-down").select(function() {
  return this.appendChild(chart);
});