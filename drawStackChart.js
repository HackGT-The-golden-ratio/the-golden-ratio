var w = 680;
			var h = 250;


			var dataset = [ 10, 10, 13, 70, 40, 50, 50, 18, 90, 13,
							80, 12, 90, 20, 60, 17, 90, 18, 23, 90, 10, 20 ];

			//create ordinal scale
			var xScale = d3.scaleBand()
							.domain(d3.range(dataset.length))
							.rangeRound([0,w])
							.paddingInner(0.05);

			var yScale = d3.scaleLinear()
							.domain([0, d3.max(dataset)])
							.range([0, h]);


			//Create SVG element
			var svg = d3.selectAll(".pie-chart")
						.append("svg")
						.attr("width", w)
						.attr("height", h);

			//build bars
			svg.selectAll("rect")
				.data(dataset)
				.enter()
				.append("rect")
				.attr("x", function(d,i){
					return xScale(i);
				})
				.attr("y", 100)
				.attr("width", xScale.bandwidth())
				.attr("height", 100)
				.attr("fill" , function(d, i) {
          var color = "#C44A53";
          if (d < 30) {
            color = "#C44A53";
          } else if (d < 60) {
            color = "#F1B16E";
          } else if (d < 85) {
            color = "#7DBFA7";
          } else {
            color = "#4B86B8";
          }
          return color;
        });

			//text labels on bars
			// svg.selectAll("text")
			// 	.data(dataset)
			// 	.enter()
			// 	.append("text")
			// 	.text(function(d) {
			// 		return d;
			// 	})
			// 	.attr("x", function(d,i){
			// 		return xScale(i) + xScale.bandwidth() / 2;
			// 	})
			// 	.attr("y", function(d){
			// 		return h - yScale(d) + 14 ;
			// 	})
			// 	.attr("font-family" , "sans-serif")
			// 	.attr("font-size" , "11px")
			// 	.attr("fill" , "white")
			// 	.attr("text-anchor", "middle");