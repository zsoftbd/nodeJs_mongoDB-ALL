const express=require('express');
const mongoose=require('mongoose');

const app = express();


const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
"mongodb+srv://admin1:test123@cluster0.9kxay50.mongodb.net/";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
  console.log("databash cannacted")
    // database and collection code goes here
    const db = client.db("MyUser");
    const coll = db.collection("user1");


    // insert code goes here
    const docs = [
      {name:'Zeaul', age:20,address:"Chakoria",status:'student'},
      {name:'Rasif', age:20,address:"Anowara",status:'student'},
      {name:'Takmim', age:19,address:"Fali",status:'student'}
    ];

    const result = await coll.insertMany(docs);

    // display the results of your operation
    console.log(result.insertedIds);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.listen(3000,()=>{
  console.log('i m listening port 3000')
})