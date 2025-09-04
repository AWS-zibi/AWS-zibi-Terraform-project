const http = require('http');

const port = process.env.PORT || 3000;
 
const server = http.createServer((req, res) => {

  if (req.url === "/") {

    res.writeHead(200, {"Content-Type": "text/plain"});

    res.end("Hello World from using Terraform and AWS Project Using LLM !\n");

  } else {

    res.writeHead(404);

    res.end("Not found\n");

  }

});
 
server.listen(port, () => {

  console.log(`Server listening on port ${port}`);

});
 