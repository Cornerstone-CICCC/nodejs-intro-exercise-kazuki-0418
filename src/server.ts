import http from "http";

const PORT = 3000;

const server = http.createServer((req: any, res: any) => {
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
