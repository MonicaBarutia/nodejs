const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "monica.barutia@freshbyteinc.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "monica.barutia@freshbyteinc.com",
    subject: "Sorry to see you go.",
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}