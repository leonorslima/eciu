const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();



app.use(cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }))
app.use(bodyParser.json());

app.use("/categories",
    require("./controllers/categories"),
    require("./controllers/posts")
);

app.use("/users",
    require("./controllers/users"),
    )

app.use("/universities",
    require("./controllers/universities")

)

app.listen(3001, () => { console.log("Servidor a funcionar!");});

