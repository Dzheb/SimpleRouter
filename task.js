// Урок 1. Введение в Node.js
// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.
const http = require('http');
let cntMain = 1;
let cntAbout = 1;
let cnt404 = 1;
const server = http.createServer((req, res) => {
  console.log('Запрос получен');
  if (req.url === '/') {
    res.writeHead(200, { 'Content-type': 'text/html; charset=UTF-8' });
    res.end(`<h1>Добро пожаловать на мой сайт</h1>
    <h2>Вы посетили эту страницу ${cntMain} раз</h2>
    <a href="http://localhost:5000/about">Для перехода на страницу about</a>`);
    cntMain++;
  }
  else if (req.url === '/about') {
     res.writeHead(200, { 'Content-type': 'text/html; charset=UTF-8' });
     res.end(`<h1>Добро пожаловать на страницу about</h1>
     <h2>Вы посетили эту страницу ${cntAbout} раз</h2>
     <a href="http://localhost:5000/">Для перехода на главную </a>`);
     cntAbout++;
  } else {
    res.writeHead(404, { 'Content-type': 'text/html; charset=UTF-8' });
    res.end(`<h1>Страница не найдена</h1>
    <h2>Вы посетили эту страницу ${cnt404} раз</h2>`);
    cnt404++;
  }
});
const port = 5000;
server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});