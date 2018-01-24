(() =>{
  let generateData = () => {
    result = []
    for(let index = 0; index < 50; index++){
      result.push([
        Math.floor(Math.random() * 20),
        Math.floor(Math.random() * 50)
      ])
    }

    return result
  }

  let dataset = generateData()

  let chart1Height = 600
  let chart1Width = 1000

  let padding = 20

  let chart1 = d3.select('#visualization')
                .append('svg')
                  .attr('width', chart1Width)
                  .attr('height', chart1Height)

  let xScale = d3.scaleLinear()
                .domain([0, d3.max(dataset, (data)=>{ return data[0] })])
                .range([padding, chart1Width - padding])

  let yScale = d3.scaleLinear()
                .domain([0, d3.max(dataset, (data)=>{ return data[1] })])
                .range([chart1Height - padding, padding])

  let rScale = d3.scaleLinear()
                .domain([0, d3.max(dataset, (data) => { return data[1] })])
                .range([2, 10])
                
  let circles = chart1.selectAll('circle')
                .data(dataset)
                .enter()
                .append('circle')
                  .attr('cx', (data)=> {
                    return xScale(data[0])
                  })
                  .attr('cy', (data) => {
                    return yScale(data[1])
                  })
                  .attr('r', (data) => {
                    return rScale(data[1])
                  })
  
  let labels = chart1.selectAll('text')
                .data(dataset)
                .enter()
                .append('text')
                  .text((data) => { return data[0] + ', ' + data[1]})
                  .attr('x', (data) => { return xScale(data[0]) })
                  .attr('y', (data) => { return yScale(data[1]) })
                  .attr('fill', 'blue')
                  

  
})()