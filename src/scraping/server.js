const {GatryScraping} = require('./modules/scraping/scraping');
const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

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

app.use('/.netlify/functions/server', router);

module.exports.handler = serverless(app);
