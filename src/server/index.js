const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 3000;

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
      return res.redirect(`https://${req.header('host')}${req.url}`)
    }
    next();
  });
}
// Serve any static files
app.use(express.static(path.join(__dirname, '../../build')));

// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
