const http = require("http");
const PORT = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"})
  res.write("it's alive!!!");
  res.end();
});

server.listen(PORT, (err) => {
  if (err) return console.log(`El error es ${err}`);
  console.log(`escuchando en ${PORT}`);
});
