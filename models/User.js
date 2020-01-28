const mongoose = require('../database/index.js');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false  
  },
},
  { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema);
