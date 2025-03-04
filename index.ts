import fs from "fs";
import express from "express";
import "dotenv/config";

const port = process.env.PORT || 3000;
const app = express();

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

app.get(["/", "/about-me", "/contact-me"], (req, res) => {
  fs.readFile(
    getHtmlUrl(req.originalUrl),
    { encoding: "utf-8" },
    (err, data) => {
      res.send(data);
    }
  );
});

app.get("*", (req, res) => {
  fs.readFile(
    getHtmlUrl(req.originalUrl),
    { encoding: "utf-8" },
    (err, data) => {
      res.send(data);
    }
  );
});

app.listen(port);
