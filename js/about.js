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
