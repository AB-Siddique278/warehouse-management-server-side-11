const { request } = require('express');
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();

//middleware
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.a3mzi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log("Fruits Basket Connected");
    // perform actions on the collection object
    client.close();
});



app.get('/', (req, res) => {
    res.send('Running Fruits Basket Server')
});

app.listen(port, () => {
    console.log('Leasing to port', port);
})

//fruitsBasket
//9sj6QIJtdgtHqsxg




//fruits_Basket
//M6e2Skc597UqEoGY