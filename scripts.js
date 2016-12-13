//
// var userWebsiteTitle = $(".user-input-title").val();
// var userWebsiteUrl = $(".user-input-url");
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
    // read();

});
//
// function read (){
// });
// }

  $(".right-section").on("click", ".read", function(){
    $(this).toggleClass("read-bookmark");
    console.log("yep");
});
