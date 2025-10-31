const express = require('express');
const serverless = require('serverless-http'); // debes instalar esta dependencia
const app = express();

app.use(express.json());

let receivedData = [];

app.post('/data', (req, res) => {
  const data = req.body;
  receivedData.push(data);
  res.json({ success: true, message: 'Datos recibidos' });
});

app.get('/data', (req, res) => {
  res.json(receivedData);
});

app.get('/', (req, res) => {
  res.send('API lista para recibir datos');
});

module.exports = app;
module.exports.handler = serverless(app);
