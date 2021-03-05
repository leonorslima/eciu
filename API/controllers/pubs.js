const express = require("express");
const router = express.Router();
const {create, getAll, update } = require("../Pedidos/posts");


router.route("/")
    .get(async (req, res) => {
        const posts = await getAll();

        res.status(200);
        res.json(posts);
        res.end();
    })
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