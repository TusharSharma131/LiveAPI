require("dotenv").config();

const connectDB = require('./db/connect');
const SchemaData = require('./models/prodSchema');
const ActualData = require('./products.json');

const start = async() =>{
   try{
      await connectDB(process.env.MONGODB_URL);
      
      // Whenever product.json is changed prev + updated both data are kept but with the below statement it will not happen further.
      
      // SchemaData.deleteMany() will delete prev data and keep updated data in DB.
      await SchemaData.deleteMany();  
      await SchemaData.create(ActualData);
      console.log("Yes, Data Added to DB !!");
   }catch(error){
      console.log(error);
   }
}

start();