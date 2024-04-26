// Copyright (c) 2024 George, Khalil All rights reserved
//
// Created by: George, Khalil
// Created on: Apr 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates pay and taxes.
 */
function generateNumber () {
  // generate randome number
  const randomNumber = Math.floor(Math.random() * 6) + 1

  // input
  const numberKind = document.getElementById('option-positive').checked

  // process
  if (numberKind == true) {
    // output
    document.getElementById('number-output').innerHTML = 'The random number is: ' + randomNumber
  } else {
    // output
    document.getElementById('number-output').innerHTML = 'The random number is: ' + (-1 * randomNumber)
  }
}
