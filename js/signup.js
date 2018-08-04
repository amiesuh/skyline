
var register =  [ ];

register = JSON.parse(localStorage.getItem('register'));

//localStorage.setItem('register', JSON.stringify(register));
// // Name and Password from the register-form
var nm = document.getElementById('nm');
var pw = document.getElementById('pw');

// // storing input from register-form
function store() {
    localStorage.setItem('nm', nm.value);
    localStorage.setItem('pw', pw.value);

    var data = {"un": nm.value, "pw": pw.value};
    register.push(data);
    localStorage.setItem('register', JSON.stringify(register));

    //alert(register[register.length - 1].un + " " + register[register.length - 1].pw);
}

// // check if stored data from register-form is equal to entered data in the   login-form
function check() {
//
//     // stored data from the register-form
    var storedName = localStorage.getItem('nm');
    var storedPw = localStorage.getItem('pw');

// //     // entered data from the login-form
    var userName = document.getElementById('userName').value;
    var userPw = document.getElementById('userPw').value;

    var tf = false;
    for (var i in register) {
      if (register[i].un == userName) {
        if (register[i].pw == userPw) {
          // alert ("Login successful!");
          // window.location.href='home.html';
          tf = true;
        if (window.confirm('Login success!'))
      {
        window.location.href = "home.html"  //NOT WORKING! HOW DO I MAKE ANOTHER PAGE LOAD AUTOMATICALLY WHEN THE USER CLICKS "OK" ON ALERT???
      }
      else
      {
        window.location.href = "signup.js"
      }
          break;
        }
        else {
          alert ("Incorrect password! Try again.");
          tf = true;
          break;
        }
      }
    }
    if(tf == false){
      alert("Incorrect username! Try again.")
    }




// //     // check if stored data from register-form is equal to data from login form
    // if(userName == storedName && userPw == storedPw) {
    //     alert('You are logged in.');
    // }else {
    //   alert('ERROR');
    // }
}
