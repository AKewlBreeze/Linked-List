var userWebsiteTitle = document.querySelector(".user-input-title");
var userWebsiteUrl = document.querySelector(".user-input-url");
var userEnterButton = document.querySelector(".enter-button");

console.log("hi")

// window.onload = function(){
//   disableInputFeilds();
// }


// function disableInputFeilds(){
//   userWebsiteTitle.disabled = true;
//   userWebsiteUrl.disabled = true;
//   userEnterButton.disabled = true;
// }

function userInputValues(){
  var display = userWebsiteTitle.text;
  console.log(display);
}

function collectUserTitle(){
  var title = userWebsiteTitle.text;
}
