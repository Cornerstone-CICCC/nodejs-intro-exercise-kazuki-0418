"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const PORT = 3000;
const server = http_1.default.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>Home</h1>");
        res.end();
    }
    if (req.url === "/about" && req.method === "GET") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>About</h1>");
        res.end();
    }
    if (req.url === "/my-account" && req.method === "GET") {
        res.statusCode = 403;
        res.setHeader("Content-Type", "text/html");
        res.end("You have no access to this page");
    }
    if (req.url !== "/" && req.url !== "/about" && req.url !== "/my-account") {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.write("Page not found");
        res.end();
    }
});
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
