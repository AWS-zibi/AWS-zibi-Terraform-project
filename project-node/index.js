const http = require('http');

const port = process.env.PORT || 3000;
 
const server = http.createServer((req, res) => {

  if (req.url === "/") {

    res.writeHead(200, {"Content-Type": "text/plain"});

    res.end("“ Oops… I accidentally deployed Hello World to the Cloud ☁️ with Terraform Keep calm ☕ and terraform apply !\n");

  } else {

    res.writeHead(404);

    res.end("Not found\n");

  }

});
 
server.listen(port, () => {

  console.log(`Server listening on port ${port}`);

});
 
