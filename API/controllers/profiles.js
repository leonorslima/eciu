const express = require("express");
const router = express.Router();
const { getAll } = require("../Pedidos/profiles");

router.route("/")
    .get(async (req, res) => {
        const profiles = await getAll();

        res.status(200);
        res.json(profiles);
        res.end();
    })

module.exports = router;