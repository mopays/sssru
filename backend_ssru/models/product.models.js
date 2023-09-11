const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
        type: "string",
        required: true,
    },
    details: { 
        type: Array, 
        required: true, 
    },
    img: { 
        type: String, 
        required: true 
    },
    categories: { 
        type: String 
    },
    rank: { 
        type: Number 
    },
    price: {
        type: Number, 
        required: true 
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);