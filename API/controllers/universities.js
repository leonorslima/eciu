const express = require("express");
const router = express.Router();
const { getAll } = require("../Pedidos/universities");

router.route("/")
    .get(async (req, res) => {
        const universities = await getAll();

        res.status(200);
        res.json(universities);
        res.end();
    })

module.exports = router;