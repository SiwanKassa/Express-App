'use strict';
// userRoute
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const bodyParser = require('body-parser');
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