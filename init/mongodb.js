const mongoose = require("mongoose");

const connectMongodb = async () => {
    try{
    await mongoose.connect(process.env.CONNECTION_URL);
    console.log("Database Connection Successful");
    }catch(error){
        console.log(error.message);
        process.exit(1);
    }
} 

module.exports = connectMongodb;