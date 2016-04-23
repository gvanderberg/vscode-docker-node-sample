"use strict";
const express = require("express");
const ArticleController = require("./../../app/controllers/ArticleController");
let router = express.Router();
class ArticleRoutes {
    constructor() {
        this._articleController = new ArticleController();
    }
    get routes() {
        var controller = this._articleController;
        router.get("/articles", controller.retrieve);
        //router.delete("/articles/:_id", controller.delete);
        //router.put("/articles/:_id", controller.update);
        router.get("/articles/view/:_id", controller.findById);
        router.get("/articles/post", (req, res) => {
            res.render("articles/post");
        });
        router.post("/articles/post", controller.create);
        return router;
    }
}
Object.seal(ArticleRoutes);
module.exports = ArticleRoutes;
