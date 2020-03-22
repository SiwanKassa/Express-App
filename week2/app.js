'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/catRoute');
const user = require('./routes/userRoute');
const authRoute = require('./routes/authRoute');
const pass = require('./utils/pass');
const passport = require('passport');

const port = 3000;
const loggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect('/form');
  }
};

app.use(cors());

app.use('/cat', router);
app.use('/auth', authRoute);
app.use('/user', passport.authenticate('jwt', {session: false}), user);

app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

app.use(passport.initialize());
app.use(passport.session());

app.post('/login',
    passport.authenticate('local', {failureRedirect: '/form'}),
    (req, res) => {
      console.log('success');
      res.redirect('/secret');
    });

// modify app.get('/secret',...
app.get('/secret', loggedIn, (req, res) => {
  res.render('secret');
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));