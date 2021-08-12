const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, add } = require("../src/math")

test('Should calculate total with tip', () => {
  const total = calculateTip(10, .3)
  expect(total).toBe(13)
})

test('Should calculate total with default tip', () => {
  const total = calculateTip(10)
  expect(total).toBe(12.5)
})

test('Should convert 77 F to 25 C', () => {
  const celsius = fahrenheitToCelsius(77)
  expect(celsius).toBe(25)
})

test('Should convert 25 C to 77 F', () => {
  const fahrenheit = celsiusToFahrenheit(25)
  expect(fahrenheit).toBe(77)
})

// test('Async test demo', (done) => {
//   setTimeout(() => {
//     expect(1).toBe(2)
//     done()
//   }, 2000)
// })

test('Should add two numbers', (done) => {
  add(2,3).then((sum) => {
    expect(sum).toBe(5)
    done()
  })
})

test('Should add two numbers async/await', async () => {
  const sum = await add(30, 2)
  expect(sum).toBe(32)
})
