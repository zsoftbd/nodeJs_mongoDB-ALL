const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri =
  
  "mongodb+srv://admin1:test123@cluster0.9kxay50.mongodb.net/adminData"

async function connect() {
  try {
    await mongoose.connect(uri);
    const product={name:"alo",price:20,quantety:10};
    // mongoose.insertOne({product})
    // .then(result=>{
    //     console.log('one product added')
    // })
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}

connect();

app.listen(8000, () => {
  console.log("Server started on port 8000");
});