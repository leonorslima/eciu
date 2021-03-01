const usersSchema = require('./usersSchema');
const express = require("express");
const router = express.Router();
const { getAll, create } = require("../Pedidos/users");


router.route("/")
    .get(async (req, res) => {
        const posts = await getAll();

        res.status(200);
        res.json(posts);
        res.end();
    })

    .post(async (req, res) => {
        try {
            await usersSchema.validate(req.body);
        } catch (e) {
            res.status(400);
            res.send(e.errors);
            res.end();

            return;
        }

        const user = await create(req.body);
        res.json(user);
        res.status(201);
        res.end();
    });

module.exports = router;