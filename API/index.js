const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();



app.use(cors({ origin: 'http://localhost:3001', optionsSuccessStatus: 200 }))
app.use(bodyParser.json());


app.listen(3002, () => { console.log("Servidor a funcionar!");});
