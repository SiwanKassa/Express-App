'use strict';
const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get = (req, res) => {
  let result = (cat) => req.params.id  === cat.id;
  res.json(cats.filter(result));
};


module.exports = {
  cat_list_get,
  cat_get,
};
