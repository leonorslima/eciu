const  Firestore  = require("@google-cloud/firestore");

module.exports = (() =>
    new Firestore({ keyFilename: ".api_key.json" })
);

