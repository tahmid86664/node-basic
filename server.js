const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 9000;
// const server = http.createServer();
let homePage = fs.readFileSync("./index.html", "utf-8");
const server = http.createServer((req, res) => {
  if (req.url === "/") return res.end(homePage);
  if (req.url === "/about") return res.end("<h1>About Page</h1>");
  if (req.url === "/contact") return res.end("<h1>Contact Page</h1>");
  if (req.url === "/admin") return res.end("<h1>Admin Page</h1>");
  else return res.end("<h1>404! Page Not Found</h1>");
});

server.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running at ${PORT}`);
});
