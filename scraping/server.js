const {GatryScraping} = require('./modules/scraping/scraping');
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/results', async (req, res) => {
  console.log('------- WEB SERVICE');
  const scrap = new GatryScraping();
  const response = await scrap.getResults();
  res.send(response);
});

app.get('/api/check-updates/:timestamp', async (req, res) => {
  const timestamp = req.params.timestamp;
  const scrap = new GatryScraping();
  const response = await scrap.getUpdates();
  res.send(response);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
