const express = require('express');
const app = express();
const port = 7865;

app.get('/', (_, res) => res.end('Welcome to the payment system'));

app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.end(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_, res) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.json(paymentMethods);
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.end(`Welcome ${userName}`);
});

app.listen(port, () => console.log(`API available on localhost port ${port}`));
