const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://bhuvaneshwarisubramani58_db_user:BBrWKSkCZx4mOlk9@cluster0.v7tdxz1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
