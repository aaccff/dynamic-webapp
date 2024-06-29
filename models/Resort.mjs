import mongoose from 'mongoose';

const ResortSchema = new mongoose.Schema({
  name: String,
  location: String,
  description: String,
  price: Number,
  rating: Number,
  imageUrl: String,
});

export default mongoose.model('Resort', ResortSchema);
