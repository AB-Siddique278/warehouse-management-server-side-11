const { request } = require('express');
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

//middleware
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6hfog.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });







async function run(){
    try{

        await client.connect();
        const serviceCollection = client.db('fruits').collection('service');
       app.get('/service', async (req, res) =>{
        const query = {};
        const cursor =serviceCollection.find(query);
        const service = await cursor.toArray();
        res.send(service);

       });
       app.get('/service:id', async(req, res)=>{
           const id = req.params.id;
           const query={_id: ObjectId(id)};
           const service =await serviceCollection.findOne(query);
           res.send(service);
       })

    }
    finally{

    }



}
run().catch(console.dir);












app.get('/', (req, res) => {
    res.send('Running Fruits Basket Server')
});

app.listen(port, () =>{
    console.log('Leasing to port', port);
})

//fruitsBasket
//9sj6QIJtdgtHqsxg




//fruits_Basket
//M6e2Skc597UqEoGY

//fruits
//QdvRMqzLa3doNM5B

//DB_USER=fruits
//DB_PASS=QdvRMqzLa3doNM5B