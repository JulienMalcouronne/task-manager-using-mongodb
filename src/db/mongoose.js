const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {})


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
