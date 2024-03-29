const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  employeeId: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('User', UserSchema);
