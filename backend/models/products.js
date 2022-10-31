const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
      name: {
        type: String,
        unique: true,
        required: [true],
        
      },
      gender: {
        type: String,
        required: [true],
        trim: true,
        enum: {
          values: ["Boy", "Girl", "Men", "Women"],
         
        },
      },
      category: {
        type: String,
        enum: {
          values: ["Sneakers", "Sandals&Slides", "Soccer", "Golf"],
          
        },
      },
      color:{
        type: String,
        required: [true]
      },
      price: {
        type: String,
        required: [true],
        
      },
      image: {
        type: [String],
      }
    })

const Product = new mongoose.model("Product", productSchema);

module.exports = Product;