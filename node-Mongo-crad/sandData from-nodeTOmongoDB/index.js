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

    // insert code goes here
    const pruducts = [
      {name: "Halley's Comet", officialName: "1P/Halley", orbitalPeriod: 75, radius: 3.4175, mass: 2.2e14},
      {name: "Wild2", officialName: "81P/Wild", orbitalPeriod: 6.41, radius: 1.5534, mass: 2.3e13},
      {name: "Comet Hyakutake", officialName: "C/1996 B2", orbitalPeriod: 17000, radius: 0.77671, mass: 8.8e12}
    ];

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