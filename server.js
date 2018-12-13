const express = require('express');
const bodyParser = require('body-parser');
// const request = require('ajax-request');
const https = require('https');
const app = express();
const port = process.env.PORT || 3000;
const $ = require('jquery');
// const API_key = require('./config/API_key');
const API_key = '31cc7e28cc7b977ca09f20a5af2cfb14';

app.listen(port, () => console.log(`Listening on port ${port}...`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('dist'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/api/movies', (req, res) => {
  console.log('Request body!!!', req.body);
  var title = req.body.title;
  var response = res;

  https.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_key}&language=en-US&query=${title}&page=1&include_adult=false`, (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data));
    response.send(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

});

// app.all('*', (req, res) => {
//   res.send('Hello world!');
// });