const mongoose = require("mongoose");

const uri = process.env.MONGODB_URL;

const connectDB = () => { 
   console.log("DB Connected")
   return mongoose.connect(uri);
}

module.exports = connectDB;