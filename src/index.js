const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled')
//   } else {
//     next()
//   }
// })

// app.use((req, res, next) => {
//   res.status(503).send('Site is currently down. Check back soon')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


// const router = new express.Router()
// router.get('/test', (req, res) => {
//   res.send('This is from my other router')
// })
// app.use(router)

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5c2e505a3253e18a43e612e6')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('61e55d7847de5d785f95821f')
//     await user.populate('tasks')
//     console.log(user.tasks)
// }

// main()
