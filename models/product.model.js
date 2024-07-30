const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter product name'],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true, // Corrected 'require' to 'required'
      default: 0,
    },

    image: {
      type: String,
      required: false, // Corrected 'require' to 'required'
    },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product; // Added export statement
