//Define display box
var displayBox = document.getElementById("calcinput");

//C button
var cButton = document.getElementById("clear")
  var cClick= function () {
    calcinput.value = ""
  };

cButton.addEventListener ("click", cClick)

//7 Button
var sevenButton = document.getElementById('7')
  var sevenClick = function () {
    calcinput.value +=  "7"
  };

  sevenButton.addEventListener ("click", sevenClick);

//8 Button
  var eightButton = document.getElementById('8')
    var eightClick = function () {
      calcinput.value += "8"
    };

    eightButton.addEventListener ("click", eightClick);

//9 Button
  var nineButton = document.getElementById('9')
    var nineClick = function () {
      calcinput.value += "9"
    };

    nineButton.addEventListener ("click", nineClick);

//4 Button
var fourButton = document.getElementById('4')
  var fourClick = function () {
    calcinput.value += "4"
  };

  fourButton.addEventListener ("click", fourClick);

//5 Button
  var fiveButton = document.getElementById('5')
    var fiveClick = function () {
      calcinput.value += "5"
    };

    fiveButton.addEventListener ("click", fiveClick);

//6 Button
var sixButton = document.getElementById('6')
  var sixClick = function () {
    calcinput.value += "6"
  };

  sixButton.addEventListener ("click", sixClick);

//1 Button
var oneButton = document.getElementById('1')
  var oneClick = function () {
    calcinput.value += "1"
  };

  oneButton.addEventListener ("click", oneClick);

//2 Button
var twoButton = document.getElementById('2')
  var twoClick = function () {
    calcinput.value += "2"
  };

  twoButton.addEventListener ("click", twoClick);

//3 Button
var threeButton = document.getElementById('3')
  var threeClick = function () {
    calcinput.value += "3"
  };

  threeButton.addEventListener ("click", threeClick);

//0 Button
  var zeroButton = document.getElementById('0')
    var zeroClick = function () {
      calcinput.value += "0"
    };

    zeroButton.addEventListener ("click", zeroClick);

//Divide Button
  var divideButton = document.getElementById('divide')
    var divideClick = function () {
      calcinput.value += "/"
    };

    divideButton.addEventListener ("click", divideClick);

//Multiply Button
  var multiplyButton = document.getElementById('multiply')
    var multiplyClick = function () {
      calcinput.value += "*"
    };

    multiplyButton.addEventListener ("click", multiplyClick);

//Subtract Button
var subtractButton = document.getElementById('subtract')
  var subtractClick = function () {
    calcinput.value += "-"
  };

  subtractButton.addEventListener ("click", subtractClick);

//Add Button
var addButton = document.getElementById('addition')
  var addClick = function () {
    calcinput.value += "+"
  };

  addButton.addEventListener ("click", addClick);

//Equal Sign Button --not needed
/*var equalButton = document.getElementById('equals')
  var equalClick = function () {
    calcinput.value += "="
  };

  equalButton.addEventListener ("click", equalClick);*/

//Decimal Button
var decimalButton = document.getElementById('decimal')
  var decimalClick = function () {
    calcinput.value += "."
  };

  decimalButton.addEventListener ("click", decimalClick);
