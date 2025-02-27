import * as http from "http";
import * as fs from "fs";
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
http
    .createServer(function (req, res) {
    var url = req.url ? req.url : "/";
    res.writeHead(200, { "content-type": "text/html" });
    fs.readFile(getHtmlUrl(url), { encoding: "utf-8" }, function (err, data) {
        res.write(data);
        res.end();
    });
})
    .listen(3000);
//# sourceMappingURL=index.js.map