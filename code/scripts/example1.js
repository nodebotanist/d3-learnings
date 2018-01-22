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
})

