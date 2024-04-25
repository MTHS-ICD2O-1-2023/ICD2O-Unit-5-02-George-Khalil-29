// Copyright (c) 2024 George, Khalil All rights reserved
//
// Created by: George, Khalil
// Created on: Apr 2024
// This file contains the JS functions for index.html

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  Positive = document.getElementById('Positive').checked
  const randomNumber = Math.floor(Math.random() * 6) + 1
  if (Positive == true) {
    document.getElementById("radio-button-value").innerHTML =
      "<p>The random number is :</p>"
  } else {
    document.getElementById("radio-button-value").innerHTML =
      "<p>The random number is : </p>"
  }
}
