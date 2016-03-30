const mongoose = require('mongoose');

var childSchema = new mongoose.Schema({ name: 'string' });

var parentSchema = new mongoose.Schema({
  children: [childSchema]
})
var Parent = mongoose.model('Parent', parentSchema);

module.exports = Parent
