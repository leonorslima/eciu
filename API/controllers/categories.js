const express = require("express");
const router = express.Router();
const { getAll } = require("../Pedidos/categories");

router.route("/categories")
    .get(async (req, res) => {
        const categories = await getAll();

        res.status(200);
        res.json(categories);
        res.end();
    })

module.exports = router;