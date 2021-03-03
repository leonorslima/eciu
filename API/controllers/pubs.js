const express = require("express");
const router = express.Router();
const {create } = require("../Pedidos/posts");


router.route("/")
    .post(async (req, res) => {
        const publicacao = await create(req.body);
        res.json(publicacao);
        res.status(201);
        res.end();
    });



module.exports = router;