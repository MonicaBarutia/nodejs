const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is not valid!')
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number!')
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (validator.contains(value, 'password', {ignoreCase: true})) {
        throw new Error('Password cannot contain the word "password"!')
      }
    }
  }
})

// const me = new User({
//   name: "   Monica  ",
//   email: "MYEMAIL@MONICA.RO    ",
//   password: 'monica1995'
// })
//
// me.save().then(() => {
//   console.log(me)
// }).catch((error) => {
//   console.log("Error ", error)
// })

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  }
})

const task1 = new Task({
  description: "Do the dishes       ",
  // completed: true
})

task1.save().then(() => {
  console.log(task1)
}).catch((error) => {
  console.log(error)
})