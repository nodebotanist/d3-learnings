d3.csv('../data/food.csv', (data) => {
  console.log(data)
})

d3.select('#visualization').append('p').text('D3 added this paragraph!')