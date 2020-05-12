const express = require('express')
const app = express()
const path = require('path')
//var engines = require('consolidate');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
//app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('index.html');
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})