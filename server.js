const express = require('express');

const app = express();

app.use(express.static('browser'))

app.listen(3333);