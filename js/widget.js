function seeEmployees(){
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<h2>Employee Office Status</h2><ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', '../data/employees.json');
xhr.send();
}


function seeRooms(){
var roomReq = new XMLHttpRequest();
roomReq.onreadystatechange = function () {
  if(roomReq.readyState === 4 && roomReq.status === 200) {
    var rooms = JSON.parse(roomReq.responseText);
    var statusHTML = '<h2>Meeting Rooms</h2><ul class="bulleted">';
    for (var i=0; i<rooms.length; i += 1) {
      if (rooms[i].available === true) {
        statusHTML += '<li class="full">';
      } else {
        statusHTML += '<li class="empty">';
      }
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};
  roomReq.open('GET', '../data/rooms.json');
roomReq.send();
}

function resetPage(){
  document.getElementById('employeeList').innerHTML = "";
  document.getElementById('roomList').innerHTML = "";
}

