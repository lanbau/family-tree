const mongoose = require('mongoose');

// a schema is like a template
const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: { type: String, required: true, unique: true },
  meta: {
    age: Number,
    website: String,
    address: String,
    country: String,
  },
  created_at: Date,
  updated_at: Date
});

userSchema.pre('save', function(next){
  // set current date
  var now = new Date();
  // update existing attribute
  this.updated_at = now;
  // if don't have the field, create it
  if (!this.created_at){
    this.created_at = now;
  }
  next()
});

userSchema.methods.sayHello = function() {
  // console.log("Hi " + this.first_name);
  console.log(`Hi ${this.first_name}`)
};

// create an object based on schema
var User = mongoose.model('User', userSchema);

// export created object
module.exports = User;
