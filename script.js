// hint - this is how you get the current date/time
//  var today= new Date();


const viewAllButton = document.querySelector("#view-all");
const errorMessage = document.querySelector(".message");


var clockIn = new XMLHttpRequest();
clockIn.onreadystatechange = function () {
  if(clockIn.readyState === 4 && clockIn.status === 200) {
    var employees = JSON.parse(clockIn.responseText);
    document.getElementById('employee-number').innerHTML = clockIn.responseText;
  }
};
clockIn.open('GET', 'employees.json');
function sendAJAX() {
clockIn.send();
document.getElementById('clock-in').style.display = "none";
}




viewAllButton.addEventListener('click', () => {

  let employeeContainer = document.querySelector("ul");
  employeeContainer.innerHTML = "";
  //console.log(employeeContainer);
  for (var i = 0; i < staff.length; i++) {
    //console.log(staff[i].id);
    let employeeCard = `<li>
     <p class="id">#${staff[i].id}</p>
    	<img  src="${staff[i].photo}" alt="${staff[i].firstName} ${staff[i].lastName} Photo" />
<div class="titleposition">
      <h1 >${staff[i].firstName} ${staff[i].lastName}</h1>
    	<p >
    		Position: ${staff[i].position}
    	</p>
      </div>
    	<p class="clockin">
    		Last Clockin In: ${staff[i].clockIn}
    	</p>
    </li>`;
    employeeContainer.insertAdjacentHTML('beforeend', employeeCard);
  }

});


var xhr = new XMLHttpRequest();
xhr.open('GET', 'produce.json');
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var produce = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<produce.length; i += 1) {
      if (produce[i].instock === true) {
        statusHTML += '<li class="in">';
        statusHTML += '<p class="istock"> In Stock </p>';
      } else {
        statusHTML += '<li class="out">';
        statusHTML += '<p class="ostock"> Out Stock </p>';
      }
      statusHTML += produce[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('produceList').innerHTML = statusHTML;
  }
};
xhr.send();