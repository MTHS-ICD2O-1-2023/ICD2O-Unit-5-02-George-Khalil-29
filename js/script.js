// Copyright (c) 2024 George, Khalil All rights reserved
//
// Created by: George, Khalil
// Created on: Apr 2024
// This file contains the JS functions for index.html

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  alwaysOnButtonChecked = document.getElementById('option-Positive').checked
  
  if (alwaysOnButtonChecked == true) {
    document.getElementById("radio-button-value").innerHTML =
      "<p>Value is: On</p>"
  } else {
    document.getElementById("radio-button-value").innerHTML =
      "<p>Value is: Off</p>"
  }
}
