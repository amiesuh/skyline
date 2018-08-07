var account = JSON.parse(localStorage.getItem('activeAccount'));
var register = JSON.parse(localStorage.getItem('register'));
var welcomeTag = document.getElementById("welcome");
userPage();
function userPage(){
  welcomeTag.innerHTML = "Welcome, " + account.nm + "!";
}

function signOut(){
  for (var i in register){
    register[i].isActive = false;
  }
  localStorage.setItem('activeAccount', null);
}

function myFunction() {
    document.getElementById("articles").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("articles");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function miFunction() {
    document.getElementById("chats").classList.toggle("shows");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.chatrooms')) {

    var dropdowns = document.getElementsByClassName("chats");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('shows')) {
        openDropdown.classList.remove('shows');
      }
    }
  }
}
