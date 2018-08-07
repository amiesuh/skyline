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
