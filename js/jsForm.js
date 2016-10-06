var csVal;
var timeVal;

function saveRadioValue(rads) {
  for(var i = 0; i < rads.length; i++) {
    if(rads[i].checked)
      return rads[i].value;
  }
}

function validate() {
  var csRads = document.getElementsByName("cs");
  var timeRads = document.getElementsByName("time");
  csVal = saveRadioValue(csRads);
  timeVal = saveRadioValue(timeRads);
  if(csVal && timeVal)
    return true;
  else{
    alert("You have not finished yet!")
    return false;
  }
}

function submitForm() {
  if(validate()) {
    var msg = document.getElementById("message");
    msg.innerHTML = '<p id="message" style="text-align: center; font-size: 20px">Thank you for taking the survey!</p>';
    var f = document.getElementById("form");
    f.parentNode.removeChild(f);
    var text;
    if(csVal == "yes") {
      switch(Number(timeVal)) {
        case 1:
          text = document.createTextNode("Enjoy your freshman year buddy!");
          break;
        case 2:
          text = document.createTextNode("You have a healthy life like others do!");
          break;
        case 3:
          text = document.createTextNode("life is hard, I know.");
          break;
        case 4:
          text = document.createTextNode("Stop day-dreaming and start your projects early!");
          break;
        case 5:
          text = document.createTextNode("You are a true geek my friend!");
          break;
        case 6:
          text = document.createTextNode("You are not a human my friend!");
          break;
      }
    }
    else{
      text = document.createTextNode("But what are you doing here if you are not a Computer Science student?!");
      var img = document.createElement("IMG");
      img.setAttribute("src", "./img/yeah-u-get-outta-here.jpg");
      document.body.appendChild(img);
    }
    msg.appendChild(text);
  }
}
