

const exec = require('child_process').exec;
const server = exec('http-server -c-1');
server.stdout.on('data', function (data) {
  if (data.includes('Available on')) {
      //exec('open http://localhost:8080/index.html'); // Abre el archivo index.html en el navegador predeterminado (MacOS)
     //exec('start http://localhost:8080/index.html'); // Abre el archivo index.html en el navegador predeterminado (Windows)
     exec('xdg-open http://localhost:8080/index.html')
  }
  process.stdout.write(data);
});

console.log("exito")

/*

const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'index.html');

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Error en el servidor');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});


*/
