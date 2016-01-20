// var turtle = Object();
// console.log(turtle);

var turtle = {
  color: "blue",
  legs: 4,
  ninja: true,
  hunger: 4,
  eat: function() {
    if(isHungry > 5) {
      console.log("Get me some of that pizza");
    } else if (isHungry <= 5) {
      console.log("Yup");
    }
  }
};

// var sectionEL = document.getElementById("myList");
// sectionEL.textContent = "Hello";
//
// var ulEL = document.createElement("ul");
// ulEL.textContent = "I am a banana";
//
// var liEL = document.createElement("li");
// liEL.textContent = "I am a grape";
//
// ulEL.appendChild(liEL);
// sectionEL.appendChild(ulEL);

var months = ["Jan","Feb","Mar","Apr","May"];
var weeks = [1,2,3,4]
var sectionEL = document.getElementById("myList");
var ulEL = document.createElement("ul");

for (month in months) {
  var liEL = document.createElement("li");
  liEL.textContent = months[month];
  var nestedUlEL = document.getElementById("ul");

  for (week in weeks){
    var nestedLiEL = document.createElement("li");
    nestedLiEL.textContent = weeks[week];
    nestedUlEL.appendChild(nestedLiEL);
}

sectionEL.appendChild(ulEL);
