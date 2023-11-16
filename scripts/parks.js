// //get html elements into variables
const locationRadio = document.querySelector("#locationRadio");
const typeRadio = document.querySelector("#typeRadio");

const locationContainer = document.querySelector("#locationContainer");
const parkTypeContainer = document.querySelector("#parkTypeContainer");

const statesList = document.getElementById("statesList");
const parkTypesList = document.getElementById("parkTypesList");

const nationalParkTableBody = document.getElementById("nationalParkTableBody");

function loadNationalParkTable() {
  nationalParkTableBody.innerHTML = "";
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
    let cell7 = row.insertCell(6);
    if (parks.Visit) {
      var link = document.createElement("a");

      link.href = parks.Visit;
      link.innerText = parks.LocationName;
      cell7.appendChild(link);
    }
  }
}

function loadNationalParkTableByStateName() {
  nationalParkTableBody.innerHTML = "";
  const parkName = statesList.value;
  for (const park of nationalParksArray) {
    if (park.State == parkName) {
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
      let cell7 = row.insertCell(6);
      if (park.Visit) {
        var link = document.createElement("a");
        link.href = park.Visit;
        link.innerText = park.LocationName;
        cell7.appendChild(link);
      }
      console.log(park);
    }
  }
}
function loadNationalParkTableByType() {
  nationalParkTableBody.innerHTML = "";
  const parkName = parkTypesList.value;

  const selectedType = parkTypesArray.find((type) => parkName.includes(type));

  for (const park of nationalParksArray) {
    const islandState = parkName == "Rhode Island" || parkName == "Virgin Islands";
    if (park.State == parkName || (park.LocationName.includes(selectedType) && !islandState)) {
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
        let cell7 = row.insertCell(6);

        var link = document.createElement("a");
        link.href = park.Visit;
        link.innerText = park.LocationName;
        cell7.appendChild(link);
      }
    }
  }
}

function loadStatesList() {
  for (const parkName of locationsArray) {
    let option = document.createElement("option");
    option.textContent = parkName;
    option.value = parkName;
    statesList.appendChild(option);
  }
}

function loadTypeList() {
  for (const parkType of parkTypesArray) {
    let option = document.createElement("option");
    option.textContent = parkType;
    option.value = parkType;
    parkTypesList.appendChild(option);
  }
}

function searchTypeChanged() {
  if (locationRadio.checked) {
    locationContainer.style.display = "block";
  } else {
    locationContainer.style.display = "none";
  }
  if (typeRadio.checked) {
    parkTypeContainer.style.display = "block";
  } else {
    parkTypeContainer.style.display = "none";
  }
}

locationRadio.onchange = searchTypeChanged;
typeRadio.onchange = searchTypeChanged;

//wire-up functions that was created in the last step
statesList.onchange = loadNationalParkTableByStateName;
parkTypesList.onchange = loadNationalParkTableByType;

searchTypeChanged();
loadStatesList();
loadTypeList();
loadNationalParkTable();
