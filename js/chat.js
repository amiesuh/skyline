
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


var box1 = document.getElementById("select1");
var box2 = document.getElementById("select2");
var form1 = document.getElementById("subjects");
var mathForm = document.getElementById("mathForm");
var englishForm = document.getElementById("englishForm");
var scienceForm = document.getElementById("scienceForm");
var historyForm = document.getElementById("historyForm");
var langForm = document.getElementById("langForm");
var mathClass = document.getElementById("mathClass");
var englishClass = document.getElementById("englishClass");
var scienceClass = document.getElementById("scienceClass");
var historyClass = document.getElementById("historyClass");
var langClass = document.getElementById("langClass");
var chatFrame = document.getElementById("chatFrame");
$(document).ready(function(){
  $("#select1").fadeIn("slow");
})

function searchSubjects(){
  $("#select2").fadeIn("slow");
  // box2.style.display = "block";
  if(form1.value == "math"){
    mathForm.style.display = "block";
    englishForm.style.display = "none";
    scienceForm.style.display = "none";
    historyForm.style.display = "none";
    langForm.style.display = "none";
  }
  else if(form1.value == "english"){
    mathForm.style.display = "none";
    englishForm.style.display = "block";
    scienceForm.style.display = "none";
    historyForm.style.display = "none";
    langForm.style.display = "none";
  }
  else if(form1.value == "science"){
    mathForm.style.display = "none";
    englishForm.style.display = "none";
    scienceForm.style.display = "block";
    historyForm.style.display = "none";
    langForm.style.display = "none";
  }
  else if(form1.value == "history"){
    mathForm.style.display = "none";
    englishForm.style.display = "none";
    scienceForm.style.display = "none";
    historyForm.style.display = "block";
    langForm.style.display = "none";
  }
  else if(form1.value == "lang"){
    mathForm.style.display = "none";
    englishForm.style.display = "none";
    scienceForm.style.display = "none";
    historyForm.style.display = "none";
    langForm.style.display = "block";
  }

}

function searchMath(){
  document.getElementById("processingtext").innerHTML = "Processing your chat request...!";
  $("#processingtext").fadeIn("slow");
  setTimeout(function myFunction(){}, 2000);
  if(mathClass.value == "algebra"){
    chatFrame.src = "http://skylinealgebra.chatango.com";
  }
  else if(mathClass.value == "geometry"){
    chatFrame.src = "http://skylinegeometry.chatango.com";
  }
  else if(mathClass.value == "calc"){
    chatFrame.src = "http://skylinecalculus.chatango.com";
  }
  else if(mathClass.value == "precalc"){
    chatFrame.src = "http://skylineprecalculus.chatango.com";
  }
  else if(mathClass.value == "stats"){
    chatFrame.src = "http://skylinestatistics.chatango.com";
  }
  else if(mathClass.value == "trig"){
    chatFrame.src = "http://skylinetrigonometry.chatango.com";
  }
  else if(mathClass.value == "abbc"){
    chatFrame.src = "http://skylineapcalculus.chatango.com";
  }
  chatFrame.style.margin = "0 auto";
}

function searchEnglish(){
  document.getElementById("processingtext").innerHTML = "Processing your chat request...!";
  $("#processingtext").fadeIn("slow");
  setTimeout(function myFunction(){}, 2000);
  if(englishClass.value == "lit"){
    chatFrame.src = "http://skylineliterature.chatango.com";
  }
  else if(englishClass.value == "amlit"){
    chatFrame.src = "http://skylineamericanlit.chatango.com";
  }
  else if(englishClass.value == "worldlit"){
    chatFrame.src = "http://skylineworldlit.chatango.com";
  }
  else if(englishClass.value == "english"){
    chatFrame.src = "http://skylineenglish.chatango.com";
  }
  else if(englishClass.value == "aplang"){
    chatFrame.src = "http://skylineaplanguage.chatango.com";
  }
  else if(englishClass.value == "aplit"){
    chatFrame.src = "http://skylineapliterature.chatango.com";
  }
  chatFrame.style.margin = "0 auto";
}

function searchScience(){
  document.getElementById("processingtext").innerHTML = "Processing your chat request...!";
  $("#processingtext").fadeIn("slow");
  setTimeout(function myFunction(){}, 2000);
  if(scienceClass.value == "bio"){
    chatFrame.src = "http://skylinebiology.chatango.com";
  }
  else if(scienceClass.value == "chem"){
    chatFrame.src = "http://skylinechemistry.chatango.com";
  }
  else if(scienceClass.value == "physics"){
    chatFrame.src = "http://skylinephysics.chatango.com";
  }
  chatFrame.style.margin = "0 auto";
}

function searchHistory(){
  document.getElementById("processingtext").innerHTML = "Processing your chat request...!";
  $("#processingtext").fadeIn("slow");
  setTimeout(function myFunction(){}, 2000);
  if(historyClass.value == "ush"){
    chatFrame.src = "http://skylineushistory.chatango.com";
  }
  else if(historyClass.value == "worldh"){
    chatFrame.src = "http://skylineworldhistory.chatango.com";
  }
  else if(historyClass.value == "econ"){
    chatFrame.src = "http://skylineeconomics.chatango.com";
  }
  else if(historyClass.value == "gov"){
    chatFrame.src = "http://skylinegovernment.chatango.com";
  }
  chatFrame.style.margin = "0 auto";
}
function searchLang(){
  document.getElementById("processingtext").innerHTML = "Processing your chat request...!";
  $("#processingtext").fadeIn("slow");
  setTimeout(function myFunction(){}, 2000);
  if(langClass.value == "spanish"){
    chatFrame.src = "http://skylinespanish.chatango.com";
  }
  else if(langClass.value == "french"){
    chatFrame.src = "http://skylinefrench.chatango.com";
  }
  else if(langClass.value == "chinese"){
    chatFrame.src = "http://skylinechinese.chatango.com";
  }
  else if(langClass.value == "korean"){
    chatFrame.src = "http://skylinekorean.chatango.com";
  }
  else if(langClass.value == "japanese"){
    chatFrame.src = "http://skylinejapanese.chatango.com";
  }
  chatFrame.style.margin = "0 auto";
}
