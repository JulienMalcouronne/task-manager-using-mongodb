const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


// sgMail.send({
//   to: 'malcouronnejulien@gmail.com',
//   from: 'malcouronnejulien@gmail.com',
//   subject: 'this is my first creation',
//   text: 'I hope it will be send'
// })

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'malcouronnejulien@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app `
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'malcouronnejulien@gmail.com',
    subject: 'We will miss you',
    text: `We are so sad and we will miss you ${name}`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}
