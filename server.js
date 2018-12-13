const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('dist'));

// app.get('', (req, res) => {

// });

// app.post('', (req, res) => {
  
// });

app.all('*', (req, res) => {
  res.send('Hello world!');
});