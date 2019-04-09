const express = require('express');
const app = express();

require('./routes/index')(app);

app.listen(3333);
console.log('serveren er startet på http://localhost:3333');
