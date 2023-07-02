const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require("body-parser");

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));


const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
"mongodb+srv://admin1:test123@cluster0.9kxay50.mongodb.net/";

const client = new MongoClient(uri);
app.get("/",(req,res)=>{
      res.sendFile(__dirname +'/index.html')
})

async function run() {
  try {
    await client.connect();
  console.log("Databash connacted")
    const db = client.db("userAdmin1");
    const coll = db.collection("userA1");
    

   app.post("/addProduct",(req,res)=>{
        const product=req.body;
        // console.log(product)
      coll.insertOne(product)
        .then(result=>{
          console.log('Data Sended successfully')
          res.send('Send successfully Data mongo Server')
        })
   })

  } finally {
    // Ensures that the client will close when you finish/error
    
  }
}
run().catch(console.dir);

app.listen(3000,()=>{
  console.log('i m listening port 3000')
})