'use strict';
const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const bodyParser = require('body-parser');
//const passport = require('passport');
//const multer = require('multer');


router.get('/', userController.user_list_get);
router.get('/:id', userController.user_get);

/*router.get('/:id', (req, res) => {
  const vastaus = 'You requested a users whose id is ';
  let id = vastaus + req.params.id;
  res.send(id)
});*/


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile', function(req, res, next) {
  res.send(req.user);
});

router.post('/', (req, res) => {
  res.send('With this endpoint you can add users.');
  console.log(req.body)
});

router.put('/', (req, res) =>{
  res.send('With this endpoint you can edit users.');
});

router.delete('/', (req, res) =>{
  res.send('With this endpoint you can delete users.');
});

module.exports = router;