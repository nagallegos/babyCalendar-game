const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const SquareConnect = require('square-connect');
const crypto = require('crypto');

// Set up Square client
const accessToken = '<YOUR_ACCESS_TOKEN>';
const squareClient = SquareConnect.ApiClient.instance;
squareClient.authentications['oauth2'].accessToken = accessToken;

// Set up middleware
app.use(bodyParser.json());

// Handle POST requests to process payments
app.post('/process-payment', function(req, res) {
  const request_params = req.body;
  const amount = request_params.amount;
  const currency = request_params.currency;
  const nonce = request_params.nonce;

  // Create a new payment object with the Square API
  const apiInstance = new SquareConnect.PaymentsApi();
  const idempotencyKey = crypto.randomBytes(22).toString('hex');
  const paymentRequest = {
    sourceId: nonce,
    amountMoney: {
      amount: amount * 100, // Square API uses smallest denomination (e.g. cents for USD)
      currency: currency
    },
    idempotencyKey: idempotencyKey
  };
  apiInstance.createPayment(paymentRequest).then(function(data) {
    // Payment successful - do something here (e.g. update calendar)
    console.log('Payment successful:', data);
    res.sendStatus(200);
  }, function(error) {
    // Payment failed - handle error here (e.g. display error message to user)
    console.error('Payment failed:', error);
    res.status(500).send('Payment failed');
  });
});

// Start the server
app.listen(3000, function () {
  console.log('Server listening on port 3000');
});
