'use strict';
const express = require('express');
const app = express();
const router = require('./routes/catRoute.js');
const userRoute = require('./routes/userRoute');
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use('/cat', router);
app.use('/user', userRoute);




app.listen(port, () => console.log(`Example app listening on port ${port}!`));



