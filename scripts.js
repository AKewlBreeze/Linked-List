
var userEnterButton = $(".enter-button");
var bookmarkTitle = $(".title-underline");
var userInputTitle = $(".user-input-title");

$(userEnterButton).on("click", function(){
  var userWebsiteTitle = $(".user-input-title").val();
  var userWebsiteUrl = $(".user-input-url").val();
    userError(userWebsiteTitle,userWebsiteUrl);
});

$(".right-section").on("click", ".delete", function(){
  $(this).parent("div").remove();
});

function bookmarkContent(title,url){
  $(".right-section").prepend(
   `  <div class="bookmark-card">
          <h4 class = "title-underline">${title}
          </h4>
          <hr>
        <h4 class ="url-underline">
          ${url}
        </h4>
        <hr>
        <span class = "read">Read</span>
        <span class = "delete">Delete</span>
     </div>`
 );
}

  $(".right-section").on("click", ".read", function(){
    $(this).parent("div").toggleClass("read-bookmark bookmark-card ");
    $(this).toggleClass("read-link");
});

$(".right-section").on("click", ".delete", function(){
  $(this).parent("div").remove();
});


function userError(title,url){
  if (title === "" || url === ""){
    alert("Error, please enter a valid Title and URL");
  } else {
    bookmarkContent(title,url);
  }
}

  $(".right-section").on("click", ".read", function(){
    $(this).toggleClass("read-bookmark");
});

$(".right-section").on("click", ".delete", function(){
  $(this).parent("div").remove();
});
