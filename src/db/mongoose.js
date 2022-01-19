const mongoose = require('mongoose')

// test
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {})


// learning purpose
// const learn = new Task({
//   description:'Learn Node.js',
//   complete: false
// })

// learn.save().then(() => {
//   console.log(learn)
// }).catch((error) => {
//   console.log('Error', error)
// })

// const me = new User({
//   name: '   Julien   ',
//   email: ' MYEMAIL@GMAIL.COM',
//   age: 28,
//   password: 'phone098!
// })

// me.save().then(() => {
//   console.log(me)
// }).catch((error) => {
//   console.log('Error', error)
// })
