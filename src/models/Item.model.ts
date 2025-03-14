import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  hash: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 10,
  },
});

export default mongoose.model('Item', itemSchema);
