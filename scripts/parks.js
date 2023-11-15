//get html elements into variables
const statesList = document.getElementById("statesList");

const nationalParkTableBody = document.getElementById("nationalParkTableBody");

function loadNationalParkTable() {
  for (const parks of nationalParksArray) {
    let row = nationalParkTableBody.insertRow(-1);
    let cell1 = row.insertCell(0);
    cell1.innerText = parks.LocationName;

    let cell2 = row.insertCell(1);
    cell2.innerText = parks.Address;

    let cell3 = row.insertCell(2);
    cell3.innerText = parks.City;

    let cell4 = row.insertCell(3);
    cell4.innerText = parks.State;

    let cell5 = row.insertCell(4);
    cell5.innerText = parks.ZipCode;

    let cell6 = row.insertCell(5);
    cell6.innerText = parks.Phone;

    if (parks.Visit) {
      var link = document.createElement("a");
      let cell7 = row.insertCell(6);
      link.href = parks.Visit;
      link.innerText = parks.LocationName;
      cell7.appendChild(link);
    }
  }
}
function loadNationalParkTableByStateName() {
  const stateName = statesList.value
  for (const park of nationalParksArray) {
    if (park.State == stateName) {
      let row = nationalParkTableBody.insertRow(-1);
      let cell1 = row.insertCell(0);
      cell1.innerText = park.LocationName;
      let cell2 = row.insertCell(1);
      cell2.innerText = park.Address;
      let cell3 = row.insertCell(2);
      cell3.innerText = park.City;
      let cell4 = row.insertCell(3);
      cell4.innerText = park.State;
      let cell5 = row.insertCell(4);
      cell5.innerText = park.ZipCode;
      let cell6 = row.insertCell(5);
      cell6.innerText = park.Phone;
      if (park.Visit) {
        var link = document.createElement("a");
        let cell7 = row.insertCell(6);
        link.href = park.Visit;
        link.innerText = park.LocationName;
        cell7.appendChild(link);
      }
      console.log(park);
    }
  }
}

//wire-up function to events that was created in the last step
// loadNationalParkTable();


//write functions
function loadStatesList() {
  for (const stateName of locationsArray) {
    let option = document.createElement("option");
    option.textContent = stateName;
    option.value = stateName;
    statesList.appendChild(option);
  }
}
function statesListChanged() {
  const stateName = statesList.value;
  console.log(stateName);
  loadNationalParkTableByStateName(stateName);
}

//wire-up functions that was created in the last step
loadStatesList();
statesList.onchange = loadNationalParkTableByStateName;













































