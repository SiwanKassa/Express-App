'use strict';
require('dotenv').config();

const express = require('express');
const db = require('./model/db');
const cat = require('./model/cat');
const user = require('./model/user');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  console.log('someone visit my url ☺');
  res.send(await cat.find().populate('owner'));
});

app.post('/cat', async(req, res) => {
  const mycat = await cat.create({ name: 'testing', age: 7, owner: '5e79c7a3cc5bcc7e3df7608c' });
  //const myuser = find
  //myuser.cats.push(mycat._id);
  //save()
  res.send(`cat created with id: ${mycat._id}`);
});

app.post('/user', async (req, res) => {
  const myuser = await user.create({ name: 'Mary', email: 'm@met.fi', password: 'abc' });
  res.send(`user created with id ${myuser._id}`);
});

app.get('/test', (req, res) => {
  console.log('test url', req);
  const cat = {
    name: 'Garfield',
    age: 15,
    weight: 25
  };
  res.json(cat);
});

db.on('connected', () => {
  app.listen(port, () => console.log(`app listening on port ${port}!`));
});