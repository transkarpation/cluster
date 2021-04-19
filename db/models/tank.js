const mongoose = require('mongoose')

const schema = new mongoose.Schema({ name: 'string', size: 'string' });
module.exports = mongoose.model('Tank', schema);