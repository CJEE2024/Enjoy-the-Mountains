"use strict";

// console.log(mountainsArray);

//get html elements
const mountainsList = document.getElementById("mountainsList");

//create functions
function loadMountainsList() {
  for (const mountain of mountainsArray) {
    let option = document.createElement("option");
    option.textContent = mountain.name;
    option.value = mountain.name;
    mountainsList.appendChild(option);
  }
}

//wire-up functions
loadMountainsList();


