"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var express_1 = require("express");
require("dotenv/config");
var port = process.env.PORT || 3000;
var app = (0, express_1.default)();
console.log(port);
function getHtmlUrl(url) {
    switch (url) {
        case "/":
            return "./html/index.html";
            break;
        case "/about-me":
            return "./html/about-me.html";
            break;
        case "/contact-me":
            return "./html/contact-me.html";
            break;
        default:
            return "./html/404.html";
            break;
    }
}
app.get(["/", "/about-me", "/contact-me"], function (req, res) {
    fs_1.default.readFile(getHtmlUrl(req.originalUrl), { encoding: "utf-8" }, function (err, data) {
        res.send(data);
    });
});
app.get("*", function (req, res) {
    fs_1.default.readFile(getHtmlUrl(req.originalUrl), { encoding: "utf-8" }, function (err, data) {
        res.send(data);
    });
});
app.listen(port);
