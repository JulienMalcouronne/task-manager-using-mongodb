const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

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
