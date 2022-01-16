require('../src/db/mongoose')
const Task = require('../src/models/task')

// 61e40db696d44294d0cb4527

// Task.findByIdAndDelete('61e40db696d44294d0cb4527').then((task) => {
//   console.log(task)
//   return Task.countDocuments({ completed: false })
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ complete: false })
  return count
}

deleteTaskAndCount('61e3f05aa8f447a9cd706cda').then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})
