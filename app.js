// Standard stuff
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Mongoose stuff
mongoose.connect('mongodb://localhost:27017/family-tree');

// This user is not saved yet
// const gerry = new User({
//   first_name: 'Gerry',
//   email: 'gerry@gmail.com',
//   meta:{
//     age: 27
//   }
// });
//
// gerry.sayHello();
//
// gerry.save(function(err) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log('User created!');
//   }
// });
// Find All
User.find({}, function(err, users) {
  if (err) console.log(err);
  console.log(users);
});

User.find({ first_name: 'Gerry' }, function(err, user) {
  if (err) console.log(err);
  console.log(user);
});

User.findById('56fb7555f1a61997f379adc7', function(err, user) {
  if (err) console.log(err);
  console.log(user);
});
