require('./src/db/mongoose')
const User = require('./src/models/user')

User.findByIdAndUpdate('6110fa4380162e46cc4a8568', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

const updateAgeAndCount = async (id, age) => {
    const user =  await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('6110fa4380162e46cc4a8568', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})