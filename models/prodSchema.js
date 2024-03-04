const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    
    name:{
      type: String,
      required: true,
    },

    price:{
      type: Number,
      required: [true, "price must be provided"],
    },

    feature:{
      type: Boolean,
      default: false,
    },

    company:{
      type: String,
      enum:{
        values: ["apple", "samsung", "dell", "mi"],
        message: `{VALUE} is not supported`,
      },
    }
});

module.exports = mongoose.model("Item", productSchema);