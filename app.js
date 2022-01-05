const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render("index", {
    myAnswer: ""
  })
});

app.post('/', (req, res) => {
  const firstNum = parseFloat(req.body.number1);
  const secondNum = parseFloat(req.body.number2);
  const operate = req.body.operator;

  let myResult = JSON.stringify(doCalc(firstNum, secondNum, operate));
  let roundedResult = +parseFloat(myResult).toFixed(6);

  res.render('index', {
    myAnswer: roundedResult
  });
});

app.listen(3000, () => {
  console.log('server is listening on Port 3000');
});

function doCalc(num1, num2, bidniz) {
  var result = 0;
  switch (bidniz) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    case "powerOf":
      result = num1 ** num2;
      break;
    case "rootOf":
      result = num1 ** -num2;
      break;
  }
  return result;
}