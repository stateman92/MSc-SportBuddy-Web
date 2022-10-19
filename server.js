const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + './dist/sportbuddyweb'));
app.listen(process.env.PORT || 8080);