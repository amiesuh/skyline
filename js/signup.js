
var register =  [ ];

register = JSON.parse(localStorage.getItem('register'));
var signupAlertText = document.getElementById("signupAlert");
var loginAlertText = document.getElementById("loginAlert");

//localStorage.setItem('register', JSON.stringify(register));
// // Name and Password from the register-form
var nm = document.getElementById('nm');
var pw = document.getElementById('pw');

// // storing input from register-form
function store() {
    localStorage.setItem('nm', nm.value);
    localStorage.setItem('pw', pw.value);

    var data = {"nm": nm.value, "pw": pw.value};
    register.push(data);
    localStorage.setItem('register', JSON.stringify(register));
    console.log(register)

    signupAlertText.innerHTML = "Sign up successful! Please login below.";

    //alert(register[register.length - 1].un + " " + register[register.length - 1].pw);
}

// // check if stored data from register-form is equal to entered data in the   login-form
function check() {

// //     // entered data from the login-form
    var userName = document.getElementById('userName').value;
    var userPw = document.getElementById('userPw').value;

    var tf = false;
    for (var i in register) {

      if (register[i].nm == userName) {
        if (register[i].pw == userPw) {
          loginAlertText.innerHTML = "Login successful! Loading homepage...";
          setTimeout(function myFunction(){
            window.location.href = "home.html";
          }, 2000);
          // if (window.confirm('Login success!')) {
          //   window.location.href = "home.html";  //NOT WORKING! HOW DO I MAKE ANOTHER PAGE LOAD AUTOMATICALLY WHEN THE USER CLICKS "OK" ON ALERT???
          // }
          // else {
          //   window.location.href = "signup.html";
          // }
        }
        else {
          loginAlertText.innerHTML = "Incorrect password! Try again.";
        }
        tf = true;
        break;
      }
    }
    if(tf == false){
      loginAlertText.innerHTML = "Incorrect username! Try again.";
    }
  }
