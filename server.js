/**
 * https://medium.com/@ryanchenkie_40935/angular-cli-deployment-host-your-angular-2-app-on-heroku-3f266f13f352
 */
const express = require('express');
const path = require('path');
const app = express();

// Run the app by serving the static files
// in the dist directory

app.use(express.static(__dirname + '/dist'));


// force SSL
// app.use(function (req, res, next) {
//   if (req.headers['x-forwarded-proto'] !== 'https') {
//     return res.redirect('https://' + req.get('Host') + req.url);
//   }
//   next();
// });


// For all GET requests, send back index.html
// so that PathLocationStrategy can be used

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});


// Start the app by listening on the default
// Heroku port

const server = app.listen(process.env.PORT || 8080, function () {
  const port = server.address().port;
  console.log('App now running on port', port);
});
