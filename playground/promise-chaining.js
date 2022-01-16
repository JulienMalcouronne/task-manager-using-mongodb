require('../src/db/mongoose')
const User = require('../src/models/user')

// 61e3ef28ea4e45627d0c3e38

// User.findByIdAndUpdate('61e3ef28ea4e45627d0c3e38', { age: 1 }).then((user) => {
//   console.log(user)
//   return User.countDocuments({ age: 1 })
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age })
  const count = await User.countDocuments({ age })
  return count
}

updateAgeAndCount('61e3ef28ea4e45627d0c3e38', 10).then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})
