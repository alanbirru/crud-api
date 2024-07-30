const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./Routes/product.route.js');

const app = express();

// enable json
app.use(express.json());
// adding form url encoded for insomnia
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', productRoute);

app.get('/', (req, res) => {
  res.send('hola que tal server');
});

mongoose
  .connect(
    'mongodb+srv://admin:ELeKpaoctLNzoTnt@backend.6t7vyon.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=backend'
  )
  .then(() => {
    console.log('Connected!');
    app.listen(3000, () => {
      console.log('server 3000');
    });
  })
  .catch(() => console.log('Conection failed'));
