const express = require('express');
const app = express();
const port = 3000;
const pug = require('pug');

//app.get('/', (req, res) => res.send('Hello World!'));
app.use(express.static('public'));

/*const compiledFunction = pug.compileFile('/public/index-old.html');
console.log(compiledFunction({
  name: 'Timothy'
})); ???????????????*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`));