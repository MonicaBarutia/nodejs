const myFunction = async (input) => {
  try {
    return JSON.parse(input)
  } catch (e) {
    console.log(e.message)
    return false
  }
}

const run = async () => {
  const y = await myFunction(JSON.stringify(false))
  console.log(y)
  const z = await myFunction('{"user": 1}')
  console.log(z)
}

run()