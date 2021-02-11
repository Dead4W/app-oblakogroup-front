
// подключение express
const express = require("express");
// создаем объект приложения
const app = express();

const staticPath = './dist/app-oblakogroup-front/'

app.use(express.static(staticPath));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: staticPath});
});

app.listen(process.env.PORT || 8011);