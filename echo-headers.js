const handlers = require('./lib/handlers');

const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/', handlers.home);

app.get('/about', handlers.about);

app.get('/headers', (req, res) => {
  res.type('text/plain');
  const headers = Object.entries(req.headers)
    .map(([key, value]) => `${key}: ${value}`);
  res.send(headers.join('\n'));
})

app.use(handlers.notFound)

app.use(handlers.serverError);

if(require.main === module) {
  app.listen(port, () => {
    console.log(`Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`)
  });
} else {
  module.exports = app;
}