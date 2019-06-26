const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AuthorSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  firstName: {
    type: String,
    default: '',
    trim: true
  },
  lastName: {
    type: String,
    default: '',
    trim: true
  },
  availableIn: {
    type: [String], // TODO: Remove this
    default: []
  }
})

AuthorSchema.path('firstName').validate(function (firstName) {
  return firstName.length
}, 'firstName cannot be blank')

AuthorSchema.statics = {
  load: function (id, cb) {
    this.findOne({
      _id: id
    }).exec(cb)
  }
}

mongoose.model('Author', AuthorSchema)
