const {GatryScraping} = require('../modules/scraping/scraping');
const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});

router.get('/api/results', async (req, res) => {
  console.log('------- WEB SERVICE');
  const scrap = new GatryScraping();
  const response = await scrap.getResults();
  res.send(response);
});

router.get('/api/check-updates/:timestamp', async (req, res) => {
  const timestamp = req.params.timestamp;
  const scrap = new GatryScraping();
  const response = await scrap.getUpdates();
  res.send(response);
});


const env = process.env.NODE_ENV || 'development';
if (env === 'development') {
  const routePath = '/';
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Environment = "${env}". Listening on port ${port}.`));
  app.use(routePath, router);
}
else {
  const routePath = '/.netlify/functions/server';
  console.log(`Environment = "${env}". Routing requests to "${routePath}".`);
  app.use(routePath, router);
}

module.exports = app;
module.exports.handler = serverless(app);

