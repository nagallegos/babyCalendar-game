// Replace with your application's production credentials
var applicationId = "REPLACE_WITH_YOUR_APPLICATION_ID";
var locationId = "REPLACE_WITH_YOUR_LOCATION_ID";

// Initialize the payment form object
var paymentForm = new SqPaymentForm({
  // Replace with your application's sandbox credentials for testing
  applicationId: applicationId || 'REPLACE_WITH_YOUR_SANDBOX_APPLICATION_ID',
  locationId: locationId || 'REPLACE_WITH_YOUR_SANDBOX_LOCATION_ID',
  inputClass: 'sq-input',
  autoBuild: false,
  // Customize the payment form fields and styles as needed
  cardNumber: {
    elementId: 'card-number',
    placeholder: 'Card number'
  },
  cvv: {
    elementId: 'cvv',
    placeholder: 'CVV'
  },
  expirationDate: {
    elementId: 'expiration-date',
    placeholder: 'MM/YY'
  },
  callbacks: {
    methodsSupported: function (methods) {
      // Hide the Apple Pay button if Apple Pay is not supported
      if (!methods.applePay) {
        document.getElementById('apple-pay-button').style.display = 'none';
      }
    },
    createPaymentRequest: function () {
      // Define the payment request object with the order amount and currency
      var paymentRequestJson = {
        requestShippingAddress: false,
        requestBillingInfo: true,
        currencyCode: 'USD',
        countryCode: 'US',
        total: {
          label: 'Total',
          amount: '100.00',
          pending: false
        },
        lineItems: [
          {
            label: 'Item 1',
            amount: '100.00',
            pending: false
          }
        ]
      };
      return paymentRequestJson;
    }
  }
});

// Build the payment form and mount it to the page
paymentForm.build();

// Export the payment form object for use in other files
module.exports = {
  applicationId: applicationId,
  locationId: locationId,
  paymentForm: paymentForm
};
