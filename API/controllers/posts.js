const express = require("express");
const router = express.Router();
const { getAll } = require("../Pedidos/posts");

router.route("/:id")
    .get(async (req, res) => {
        const posts = await getAll();

        res.status(200);
        res.json(posts);
        res.end();
    })



module.exports = router;