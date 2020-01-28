const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pds-auth', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);
module.exports = mongoose;


