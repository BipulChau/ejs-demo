const express = require('express');
const app = express();

//set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', (req, res) => {
  var mascots = [
    {name: 'Sammy', organization: 'DigitalOcean', birth_year: 2012},
    {name: 'Tux', organization: 'Linus', birth_year: 1996},
    {name: 'Moby Dock', organization: 'Docker', birth_year: 2013}
  ];

  var tagline = "No programming concept is complete without a cute animal mascot.";

  res.render('pages/index', {mascots: mascots, // this code defines an array called mascots and a string called tagline. Next, let's use them in index.js
    tagline: tagline});
});

// about page
app.get('/about', (req, res) => {
  res.render('pages/about');
})

app.listen(8080);
console.log("Server is listening on port 8080");
