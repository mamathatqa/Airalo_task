const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    baseUrl:"https://www.airalo.com/",
    apiUrl:"https://sandbox-partners-api.airalo.com",
    client_id:" 974d515d41f86868eccd2d22aae8d10e",
    client_secret:"tILYEqQRq5PnZ5nccQZ1IiVugUWhZN2UveJZ9rVa"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
