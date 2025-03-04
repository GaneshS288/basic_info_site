import fs from "fs";
import express from "express";
import "dotenv/config";
var port = process.env.PORT || 3000;
var app = express();
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
    fs.readFile(getHtmlUrl(req.originalUrl), { encoding: "utf-8" }, function (err, data) {
        res.send(data);
    });
});
app.get("*", function (req, res) {
    fs.readFile(getHtmlUrl(req.originalUrl), { encoding: "utf-8" }, function (err, data) {
        res.send(data);
    });
});
app.listen(port);
//# sourceMappingURL=index.js.map