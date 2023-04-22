// Import the payment form object from config.js
var paymentForm = require('./config').paymentForm;

// Handle form submission
function submitForm(event) {
  event.preventDefault();
  paymentForm.requestCardNonce();
}

// Handle card nonce response from Square API
function cardNonceResponse(errors, nonce, cardData) {
  if (errors) {
    // Handle errors returned by the Square API
    console.error(errors);
  } else {
    // Send the card nonce to your server to process the payment
    fetch('/process-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nonce: nonce,
        amount: 100.00, // Replace with the actual order amount
        currency: 'USD' // Replace with the actual currency code
      })
    }).then(function (response) {
      // Handle successful response from server
      console.log(response);
    }).catch(function (error) {
      // Handle error from server or network
      console.error(error);
    });
  }
}

// Add event listener to the payment form submit button
document.getElementById('submit-button').addEventListener('click', submitForm);

// Register the card nonce response handler with the payment form object
paymentForm.build().then(function () {
  paymentForm.on('cardNonceResponseReceived', cardNonceResponse);
});
