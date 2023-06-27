const express = require('express');
const app = express();
const port = 7865;

app.get('/', (req, res) => res.end('Welcome to the payment system'));

app.get('/cart/:id([0-9]+)', (req, res) => {
  const cartId = req.params.id;
  res.end(`Payment methods for cart ${cartId}`);
});

app.get('/available_payments', (req, res) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.json(paymentMethods);
});

app.post('/login', (req, res) => {
  const username = req.body.userName;
  res.end(`Welcome ${username}`);
});

app.listen(port, () => console.log(`API available on localhost port ${port}`));
