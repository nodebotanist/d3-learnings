let generateData = () => {
  let result = []

  for(let i = 0; i < 30; i++) {
    result.push(Math.floor(Math.random() * 25))
  }

  return result
}

let dataset = generateData()

let chart1 = d3.select('#visualization')
            .append('svg')
              .attr('width', 1375)
              .attr('height', 100)
 
let circles = chart1.selectAll('circle')
                .data(dataset)
                .enter()
                .append('circle')

circles.attr('cx', (data, index) => {
    return (index * 45) + 25
  })
  .attr('cy', 50)
  .attr('r', (data) => {
    return data
  })
  .attr('fill', 'orange')
  .attr('stroke', 'yellow')
  .attr('stroke-width', (data) => {
    return Math.floor(data / 2)
  })

let chart2 = d3.select('#visualization')
  .append('svg')
  .attr('width', 1375)
  .attr('height', 100)

let bars = chart2.selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')

bars.attr('x', (data, index) => {
    return (index * 25) + 5
  })
  .attr('y', (data) => {
    return 100 - (Math.floor(data * 3))
  })
  .attr('width', 20)
  .attr('height', (data) => {
    return Math.floor(data) * 3
  })
  .attr('fill', (data) => {
    if(data > 20) {
      return 'red'
    } else if (data > 10) {
      return 'yellow'
    } else {
      return 'green'
    }
  })

