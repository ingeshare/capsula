

console.log("Entró a main.js");

//var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
//var LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output
//var blinkInterval = setInterval(blinkLED, 250); //run the blinkLED function every 250ms


var button_click_fan = document.getElementsByClassName("button_fan");
var button_click_water = document.getElementsByClassName("button_water");
var button_click_scent_1 = document.getElementsByClassName("button_scent_1");
var button_click_scent_2 = document.getElementsByClassName("button_scent_2");



function click_button_fan(){

  console.log("Entró a click_button_fan");
 
  document.getElementById("button_fan").disabled=true;
  document.getElementById("button_fan").style.backgroundColor="green";

      function blinkLED() 
      { //function to start blinking
        if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
          LED.writeSync(1); //set pin state to 1 (turn LED on)
        } else {
          LED.writeSync(0); //set pin state to 0 (turn LED off)
        }
      }
      




      function endBlink() 
      { //function to stop blinking
        clearInterval(blinkInterval); // Stop blink intervals
        LED.writeSync(0); // Turn LED off
        LED.unexport(); // Unexport GPIO to free resources
      }
      
      setTimeout(endBlink, 5000); //stop blinking after 5 seconds

    
  }





  function click_button_water()
  {
    console.log("Entró a click_button_water");
    document.getElementById("button_water").style.backgroundColor="green";
  }

  function click_button_scent1()
  {
    console.log("Entró a click_button_scent1");
    document.getElementById("button_scent1").style.backgroundColor="green";
  }

  function click_button_scent2()
  {
    console.log("Entró a click_button_scent2");
    document.getElementById("button_scent2").style.backgroundColor="green";
  }




