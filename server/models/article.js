const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
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
    type: [String],
    default: []
  }
})

ArticleSchema.path('firstName').validate(function (firstName) {
  return firstName.length
}, 'Title cannot be blank')

ArticleSchema.statics = {
  load: function (id, cb) {
    this.findOne({
      _id: id
    }).exec(cb)
  }
}

mongoose.model('Article', ArticleSchema)
