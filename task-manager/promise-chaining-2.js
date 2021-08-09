require('./src/db/mongoose')
const Task = require('./src/models/task')

Task.findByIdAndDelete('6110e1f632593855c021d19c').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('6110e1f632593855c021d19c').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})