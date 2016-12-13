var userWebsiteTitle = document.querySelector(".user-input-title");
var userWebsiteUrl = document.querySelector(".user-input-url");
var userEnterButton = document.querySelector(".enter-button");
var websiteTitleInput = document.querySelector(".title-underline");
var websiteUrlInput = document.querySelector(".url-underline");
console.log("hi")


userEnterButton.addEventListener("click", function(){

  enterUserTitle();
  enterUserUrl();
});

function enterUserTitle(){
  var display = userWebsiteTitle.value;
  websiteTitleInput.innerText = display;
  console.log(display);
}

function enterUserUrl(){
  var displayUrl = userWebsiteUrl.value;
  websiteUrlInput.innerText = displayUrl;
  console.log(displayUrl);
}
