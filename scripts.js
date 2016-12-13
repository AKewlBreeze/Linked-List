
var userWebsiteTitle = $(".user-input-title").val();
var userWebsiteUrl = $(".user-input-url");
var userEnterButton = $(".enter-button");
var bookmarkTitle = $(".title-underline");

function bookmarkContent(){
  var userTitle = $(".user-input-title").val();
  var userUrl = $(".user-input-url").val();
  $(".right-section").prepend(
   `  <div class="bookmark-card">
          <h4 class = "title-underline">${userTitle}
          </h4>
          <hr>
        <h4 class ="url-underline">
          ${userUrl}
        </h4>
        <hr>
        <span class = "read">read</span>
        <span class = "delete">delete</span>
     </div>`
 );
}

$(userEnterButton).on("click", function(){
    bookmarkContent();
    var websiteUrlInput = $(".url-underline");
    userInputValues();
});

function userInputValues(){
  $(bookmarkTitle).text(userWebsiteTitle.val());
  console.log(bookmarkTitle);
}






// function enterUserTitle(){
//   var display = $(".userWebsiteTitle").val();
//   $("websiteTitleInput").text("display");
// }
//
// function enterUserUrl(){
//   var displayUrl = $("userWebsiteUrl").val();
//   $("websiteUrlInput").text("displayUrl");
// }





// get the user submited info and assign to a variable and use ${} selection in the concatenation
