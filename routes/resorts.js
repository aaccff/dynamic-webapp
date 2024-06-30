// models/Resort.js
const mongoose = require('mongoose');

const ResortSchema = new mongoose.Schema({
  name: String,
  location: String,
  description: String,
  price: Number,
  rating: Number,
  imageUrl: String,
});

module.exports = mongoose.model('Resort', ResortSchema);
