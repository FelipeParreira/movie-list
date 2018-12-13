const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('dist'));

app.get('/api/movies', (req, res) => {
  var movies = [
    {title: 'Mean Girls', Year: 1889, Runtime: '107 min', Metascore: 46, imdbRating: 6.2, watched: false},
    {title: 'Hackers', Year: 1999, Runtime: '106 min', Metascore: 49, imdbRating: 6.1, watched: true},
    {title: 'The Grey', Year: 2000, Runtime: '105 min', Metascore: 42, imdbRating: 5.0, watched: true},
    {title: 'Sunshine', Year: 2010, Runtime: '97 min', Metascore: 47, imdbRating: 6.4, watched: false},
    {title: 'Ex Machina', Year: 1988, Runtime: '87 min', Metascore: 50, imdbRating: 7.9, watched: true},
  ];
  res.send(movies);
});

// app.post('', (req, res) => {
  
// });

app.all('*', (req, res) => {
  res.send('Hello world!');
});