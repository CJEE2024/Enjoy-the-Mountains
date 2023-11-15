"use strict";

// console.log(mountainsArray);

//get html elements
const mountainsList = document.getElementById("mountainsList");

//create functions
function loadMountainsList() {
  for (const mountainName of mountainsArray) {
    let option = document.createElement("option");
    option.textContent = mountainName;
    option.value = mountainName;
    mountainsList.appendChild(option);
  }
}

//wire-up functions
loadMountainsList();


