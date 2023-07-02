const express = require("express");
const mongoose = require("mongoose");
const app = express();

const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.

const uri =
"mongodb+srv://admin1:test123@cluster0.9kxay50.mongodb.net/";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("admin2");
    const coll = db.collection("user2");


    const result = await coll.insertMany(pruducts);
    console.log('databse cunnacted')
    // display the results of your operation
    console.log(result.insertedIds);
   

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



app.get('/getUser',(req,res)=>{

})

app.listen(8000, () => {
  console.log("Server started on port 8000");
});