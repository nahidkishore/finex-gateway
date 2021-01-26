const express = require('express');
require('dotenv').config();
const { MongoClient } = require('mongodb');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
app.use(express());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jolmh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  
  const sellCoin = client.db('finexGateway').collection('sell');
  const buyCoin = client.db('finexGateway').collection('buy');

  console.log('Database connected properly');

  app.post('/buy', (req, res) => {
    buyCoin.insertOne(req.body).then((result) => {
      res.send(result.insertedCount > 0);
    });
  });

  app.post('/sell', (req, res) => {
    sellCoin.insertOne(req.body).then((result) => {
      res.send(result.insertedCount > 0);
    });
  });
});

app.get('/', (req, res) => {
  res.send('backend side work properly');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listen on ${process.env.PORT}`);
});
