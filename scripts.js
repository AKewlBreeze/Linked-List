var userWebsiteTitle = $(".user-input-title");
var userWebsiteUrl = $(".user-input-url");
var userEnterButton = $(".enter-button");

var websiteTitleInput = $(".title-underline");
var websiteUrlInput = $(".url-underline");

var bookmarkContent = "<div class='bookmark-card'>" + "<h4 class='title-underline'>The Website title</h4>" + "<hr>"  + "<h4 class = 'url-underline'> www.thewebsiteurl.com</h4>" + "<hr>" + "<span class = 'read'> read</span>" + "<span class = 'delete'>delete</span>" + "</div>";


$('button').on("click", function(){
  $(".right-section").prepend(bookmarkContent);

});

// get the user submited info and assign to a variable and use ${} selection in the concatenation

$("userEnterButton").on("click", function(){
  var title = enterUserTitle();
  enterUserUrl();
});

function enterUserTitle(){
  var display = $(".userWebsiteTitle").val();
  $("websiteTitleInput").text("display");
}

function enterUserUrl(){
  var displayUrl = $("userWebsiteUrl").val();
  $("websiteUrlInput").text("displayUrl");
}
