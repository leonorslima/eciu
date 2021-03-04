const express = require("express");
const router = express.Router();
const {create } = require("../Pedidos/posts");


router.route("/")
    .post(async (req, res) => {
        const publicacao = await create(req.body);
        res.json(publicacao);
        res.status(201);
        res.end();
    })
    .put(async (req, res) => {

        await update(req.params.id, req.body);

        res.json({ id: req.params.id, ...req.body });
        res.status(200);
        res.end();
    })
;



module.exports = router;