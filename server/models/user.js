import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.Promise = global.Promise

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [5, 'Username must be 5 char or more']
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'Password must be 8 char or more']
  },
  isDeleted: { type: Boolean, default: false},
  createdAt: { type: Date, default: Date.now },
})

//write some encryption here for password

const User = mongoose.model('User', userSchema)

export default User
