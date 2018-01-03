const express = require('express')
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const request = require('request')
const cors = require('cors')
const SteamStrategy = require('passport-steam').Strategy
require('dotenv').config({path: __dirname + '/.env'})

const app = express()
app.use(cors())
app.use(bodyParser.json())

// passport.serializeUser(function(user, done) {
//   done(null, user)
// })

// passport.deserializeUser(function(obj, done) {
//   done(null, obj)
// })

passport.use(new SteamStrategy({
    returnURL: 'http://localhost:3000/auth/steam/return', //website to redirect to AFTER openID login
    realm: 'http://localhost:3000/',
    apiKey: process.env.STEAM_API_KEY
  },
  function(identifier, profile, done) {
    User.findByOpenID({ openId: identifier }, function (err, user) {
      console.log('passport success')
      return done(err, user)
    })
  }
))

app.use(passport.initialize())
app.use(passport.session())

// const gamerProfiles = require('./src/routes/gamerProfiles')
// app.use('/api/gamers/:id/profile', gamerProfiles)

// const gamer = require('./src/routes/gamer');
// app.use('/api/gamer', gamer);

// const profile = require('./src/routes/profile');
// app.use('/api/profile', profile);

const services = require('./src/routes/services')
app.use('/services', services)

const users = require('./src/routes/users')
app.use('/api/users', users)

const auth = require('./src/routes/auth')
app.use('/auth', auth)

const steam = require('./src/routes/steam')
app.use('/steam/auth', steam)

app.use((req, res) => {
  const status = 404;
  const message = `Could not ${req.method} ${req.path}`;
  res.status(status).json({ status, message });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  const status = err.status || 500;
  const message = err.message || 'Something went wrong!';
  res.status(status).json({ message, status });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('listening on port', port);
});
