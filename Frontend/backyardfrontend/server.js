
// Start the app by listening on the dault heroku port
app.listen(process.env.PORT || 8080);

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/backyardfrontend'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/backyardfrontend/index.html'));
});
app.listen(process.env.PORT || 8080);