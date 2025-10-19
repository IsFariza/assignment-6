console.log("my name is Fariza");
console.log("my group is SE-2436");
alert("Hello, JavaScript World!");

var myName = "Fariza";
var myBirthYear = 2006;
var doILoveWebDev = true;

var mySurname = " Ismagambetova";
var currentYear = 2025;

console.log(myName + mySurname);
console.log("My age is " + (currentYear-myBirthYear));

document.getElementById("change-text").addEventListener("click", function(){
    document.getElementById("initial-text").innerHTML = "Changed Text";
});

document.getElementById("change-bg-color").addEventListener("click", function(){
    document.querySelector(".mycontainer").style.backgroundColor = "lightyellow";
});

document.getElementById("change-font").addEventListener("click", function(){
    document.getElementById("heading").style.fontStyle = "Italic";
});

document.getElementById("addItem").addEventListener("click", function(){
    var item = document.createElement("li");
    item.innerHTML="Second Item"
    document.getElementById("list").appendChild(item);
});

document.getElementById("removeItem").addEventListener("click", function(){
    var lastitem = document.getElementById("list").lastElementChild;
    document.getElementById("list").removeChild(lastitem);
});




document.querySelector(".red").addEventListener('mouseover', function(){
    document.querySelector(".red").style.backgroundColor="red";
});
document.querySelector(".red").addEventListener('mouseout', function(){
    document.querySelector(".red").style.backgroundColor="lightgrey";
});

document.querySelector(".orange").addEventListener('mouseover', function(){
    document.querySelector(".orange").style.backgroundColor="orange";
});
document.querySelector(".orange").addEventListener('mouseout', function(){
    document.querySelector(".orange").style.backgroundColor="lightgrey";
});

document.querySelector(".yellow").addEventListener('mouseover', function(){
    document.querySelector(".yellow").style.backgroundColor="yellow";
});
document.querySelector(".yellow").addEventListener('mouseout', function(){
    document.querySelector(".yellow").style.backgroundColor="lightgrey";
});

document.querySelector(".green").addEventListener('mouseover', function(){
    document.querySelector(".green").style.backgroundColor="lightgreen";
});
document.querySelector(".green").addEventListener('mouseout', function(){
    document.querySelector(".green").style.backgroundColor="lightgrey";
});

document.querySelector(".blue").addEventListener('mouseover', function(){
    document.querySelector(".blue").style.backgroundColor="lightblue";
});
document.querySelector(".blue").addEventListener('mouseout', function(){
    document.querySelector(".blue").style.backgroundColor="lightgrey";
});

document.querySelector(".navyBlue").addEventListener('mouseover', function(){
    document.querySelector(".navyBlue").style.backgroundColor="blue";
});
document.querySelector(".navyBlue").addEventListener('mouseout', function(){
    document.querySelector(".navyBlue").style.backgroundColor="lightgrey";
});

document.querySelector(".purple").addEventListener('mouseover', function(){
    document.querySelector(".purple").style.backgroundColor="purple";
});
document.querySelector(".purple").addEventListener('mouseout', function(){
    document.querySelector(".purple").style.backgroundColor="lightgrey";
});



document.getElementById("inputText").addEventListener("keyup", function(){
    document.getElementById("outputText").innerHTML="You're typing: " + document.getElementById("inputText").value;
});



function validateForm() {
    var errorMes = document.getElementById("error-message");

  var x = document.forms["form"]["fname"].value;
  if (x == "") {
    errorMes.innerHTML = "First Name must be filled out";
    return false;
  }
  var lname = document.forms["form"]["lname"].value;
  if (lname == "") {
    errorMes.innerHTML = "Last Name must be filled out";
    return false;
  }
  var email = document.forms["form"]["email"].value;
  if (email == "") {
    errorMes.innerHTML = "Email must be filled out";
    return false;
  }
  var pw = document.forms["form"]["passwd"].value;
  if (pw == "") {
    errorMes.innerHTML = "Password must be filled out";
    return false;
  }
}







