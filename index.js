const { request } = require('express');
const express = require('express');
const cors = require('cors');

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const { query } = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

//middleware
app.use(cors());
app.use(express.json());













const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6hfog.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });







async function run() {
    try {

        await client.connect();
        const serviceCollection = client.db('fruits').collection('service');
        


        app.get('/service', async (req, res) => {

            const email = req.query.email;
            const query = { email: email };

            // const query = {};
            const cursor = serviceCollection.find(query);
            const service = await cursor.toArray();
            res.send(service);

        });


        // app.get('/service', async (req, res) => {
        //     // const email = req.query?.email;

        //     // const query = { email: email };
            
        //     const query = {};

        //     const cursor = myCollection.find(query);
        //     const service = await cursor.toArray();
        //     res.send(service);

        // });








        app.get('/service:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const service = await serviceCollection.findOne(query);
            res.send(service);
        });


        //post items
        app.post('/service', async (req, res) => {
            const newSevice = req.body;
            const result = await serviceCollection.insertOne(newSevice)
            res.send(result);
        });

        //update items

        app.put('/service:id', async (req, res) => {
            const id = req.params.id;
            const updateItem = req.body;
            const filter = { _id: ObjectId(id) };
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    quantity: updateItem.quantity
                }
            };
            const result = await serviceCollection.updateOne(filter, updatedDoc, options);
            res.send(result);
        })


        //items
        // app.get('/service', async(req, res) =>{
        //     const email = req.query.email;

        //     const query = {email: email};
        //     const cursor = serviceCollection.find(query);
        //     const myItems = await cursor.toArray();
        //     req.send(myItems)
        // })









        //Delete items
        app.delete('/service/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await serviceCollection.deleteOne(query);
            res.send(result);

        });


        //quantity

        // app.put('/service/:id', async (req, res) => {
        //     const id =req.params.id;
        //     const updateUser = req.body;
        //     const filter = {_id:ObjectId(id)};
        //     const options = {upsert:true};
        //     const updateDoc = {
        //         $set: {
        //             quantity:updateUser.quantity,
        //         },

        //     };
        //     const result = await serviceCollection.updateOne(filter, updateDoc, options);
        //     res.send(request)
        // })


        //quantaty

        app.put('/service:id', async (req, res) => {
            const id = req.params.id;
            const updateItem = req.body;
            const filter = { _id: ObjectId(id) };
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    quantity: updateItem.quantity
                }
            };
            const result = await serviceCollection.updateOne(filter, updatedDoc, options);
            res.send(result);
        })










    }
    finally {

    }



}
run().catch(console.dir);












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

//fruits
//QdvRMqzLa3doNM5B

//DB_USER=fruits
//DB_PASS=QdvRMqzLa3doNM5B






//'2b6b9b35c7abfd465f4d03eb978976b09790ac8337cf5f42a1b7a78f69b37f09b4682464b7d081d27842f6cd1a4c76a914e3f5f3257ded94ebde12715083ec11'