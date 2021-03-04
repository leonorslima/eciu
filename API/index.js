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
    require("./controllers/user")
    )

app.use("/universities",
    require("./controllers/universities")
)

app.use("/profiles",
    require("./controllers/profiles"))

app.use("/posts",
    require("./controllers/posts"),
    require("./controllers/pubs"))

app.listen(3001, () => { console.log("Servidor a funcionar!");});

