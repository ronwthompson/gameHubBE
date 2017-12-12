const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.use(bodyParser.json());

const gamerProfiles = require('./src/routes/gamerProfiles')
app.use('/api/gamers/:id/profile', gamerProfiles)

const gamer = require('./src/routes/gamer');
app.use('/api/gamer', gamer);

const profile = require('./src/routes/profile');
app.use('/api/profile', profile);

const users = require('./src/routes/users')
app.use('/api/users', users)

const auth = require('./src/routes/auth');
app.use('/auth', auth)

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
