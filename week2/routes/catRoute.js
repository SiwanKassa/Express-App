'use strict';
const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');
const multer  = require('multer');
const upload = multer({ dest: './uploads/' });
const passport = require('passport');
//const app = express;

router.post('/', upload.single('avatar'), (req, res, next) =>{
});
router.post('/', upload.array('cat', 12), function (req, res, next) {
});
const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
router.post('/', cpUpload, function (req, res, next) {
});

router.get('/', catController.cat_list_get);
router.get('/:id', catController.cat_get);

/*router.get('/:id', (req, res) => {
  if (req.params.id > 2 || req.params.id < 1) {
    res.send('You requested a cat whose id is: ' + req.params.id);
  } else {
    router.get('/:id', catController.cat_get);
  }
});*/

//passport.authenticate('jwt', {session: false});

router.post('/', (req, res) => {
  res.send('With this endpoint you can add cats.');
});

router.put('/', (req, res) => {
  res.send('With this endpoint you can edit cats.');
});

router.delete('/', (req, res) => {
  res.send('With this endpoint you can delete cats.');
});


module.exports = router;