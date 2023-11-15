//get html elements into variables
const parksList= document.getElementById("parksList");
const selectParkButton = document.getElementById("selectParkButton");

//write functions
function loadParksList() {
  for (const park of parks) {
    //creates an option element
    let option = document.createElement("option");
    //setting the option element's inner text content
    option.textContent = park.name;
    //setting the value property is creating an attribute on the option element
    option.value = park.abbrev;

    //or
    //   let option = new Option(park.name, park.abbrev);

    parksList.appendChild(option);
  }
}

function displayParkInformation() {
  console.log(parksList.value);
}


//wire-up functions to events

//advanced page load
//   function init() {
//     loadParksList();
//     selectParkButton.onclick = displayParkInformation;
//   }
//   window.onload = init;




loadParksList();
selectParkButton.onclick = displayParkInformation;
