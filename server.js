const exec = require('child_process').exec;
const server = exec('http-server -c-1');
server.stdout.on('data', function (data) {
  if (data.includes('Available on')) {
    //exec('open http://localhost:8080/index.html'); // Abre el archivo index.html en el navegador predeterminado (MacOS)
     exec('start http://localhost:8080/index.html'); // Abre el archivo index.html en el navegador predeterminado (Windows)
  }
  process.stdout.write(data);
});
