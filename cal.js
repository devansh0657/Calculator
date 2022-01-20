let display = document.getElementById('display');
var buttons = document.querySelectorAll('button');
let displayValue = " ";
for (item of buttons) {
  item.addEventListener('click', function (event) {
    var buttonText = event.target.innerText;
    if (buttonText == "x") {
      buttonText = "*";
      displayValue += buttonText;
      display.value = displayValue;
    }
    else if (buttonText == "C") {
      displayValue = "";
      display.value = displayValue;
    }
    else if (buttonText == "="){
      display.value=eval(displayValue);
    }
    else if (buttonText == "%"){
      buttonText = "/";
      displayValue += buttonText;
      display.value = displayValue;
    }
    else{
      displayValue += buttonText;
      display.value = displayValue;
    }
  })
}