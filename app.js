require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

const Products_data = require('./routes/products');
const connectDB = require('./db/connect');

app.get('/', (req, res)=>{
   res.send("Hi, I am live"); 
})

app.use('/api/products', Products_data);

const start = async() =>{
    try{
      await connectDB(process.env.MONGODB_URL);

      app.listen(PORT, ()=>{
        console.log(`${PORT} Yes, I am connected`);
      })
    }catch(error)
    {
      console.log(error);
    }
}
start();
