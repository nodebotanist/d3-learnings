let rowConverter = (data) => {
  return {
    Food: data.Food,
    Deliciousness: parseFloat(data.Deliciousness)
  }
}

d3.csv('../data/food.csv', (data) => {
  console.log(data)

  d3.select('body')
    .data(data)
    .enter()
    .append('p')
    .text((data) => {
      return (data.Food + ': ' + data.Deliciousness)
    })
    .style('color', (data) => {
      if (data.Deliciousness > 9) {
        return '#00F'
      } else if (data.Deliciousness > 6) {
        return '#0F0'
      } else if (data.Deliciousness > 2) {
        return '#F00'
      } else {
        return '#AAA'
      }
    })
})

