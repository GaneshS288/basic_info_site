import http from "http";
import fs from "fs";
import "dotenv/config";

const port = process.env.PORT || 3000;

console.log(port);

function getHtmlUrl(url: string) {
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
  .createServer((req, res) => {
    const url: string = req.url ? req.url : "/";
    res.writeHead(200, { "content-type": "text/html" });

    fs.readFile(getHtmlUrl(url), { encoding: "utf-8" }, (err, data) => {
      res.write(data);
      res.end();
    });
  })
  .listen(port);
